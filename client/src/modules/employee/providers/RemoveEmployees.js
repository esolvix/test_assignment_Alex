import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

import { GET_EMPLOYEES } from './EmployeeList';

const DELETE_EMPLOYEE = gql`
  mutation deleteEmployee($id: ID!) {
    deleteEmployee(_id:$id) {
      _id
    }
  }
`

const withRemoveEmployee = Component => props => {
  return (
    <Mutation mutation={DELETE_EMPLOYEE}>
      {deleteEmployee => {
        return (
          <Component
            removeEmployee={id => deleteEmployee({
            variables: { id }, refetchQueries: [
              { query: GET_EMPLOYEES }
            ] })}
          />
        )
      }}
    </Mutation>
  );
};

export default withRemoveEmployee;