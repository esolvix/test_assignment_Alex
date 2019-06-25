import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

import { GET_EMPLOYEES } from './EmployeeList';

const UPDATE_EMPLOYEE = gql`
  mutation($_id: ID!, $firstName: String!, $lastName: String!, $dateOfBirth: String!, $primaryLanguage: String!, $languages: String!) {
    updateEmployee(_id:$_id, firstName: $firstName, lastName: $lastName, dateOfBirth: $dateOfBirth, primaryLanguage: $primaryLanguage, languages: $languages) {
      _id
      firstName
      lastName
      dateOfBirth
      primaryLanguage
      languages
    }
  }
`;

const withUpdateEmployee = Component => props => {
  return (
    <Mutation mutation={UPDATE_EMPLOYEE}>
      {updateEmployee => {
        return (
          <Component
          updateEmployee={({ _id, firstName, lastName, dateOfBirth, primaryLanguage, languages }) => updateEmployee({
            variables: { _id, firstName, lastName, dateOfBirth, primaryLanguage, languages }, refetchQueries: [
              { query: GET_EMPLOYEES }
            ] })}
          />
        )
      }}
    </Mutation>
  );
};

export default withUpdateEmployee;