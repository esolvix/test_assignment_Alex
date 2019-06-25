import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

import { GET_EMPLOYEES } from './EmployeeList';

const ADD_EMPLOYEE = gql`
  mutation($firstName: String!, $lastName: String!, $dateOfBirth: String!, $primaryLanguage: String!, $languages: String!) {
    addEmployee(firstName: $firstName, lastName: $lastName, dateOfBirth: $dateOfBirth, primaryLanguage: $primaryLanguage, languages: $languages) {
      firstName
      lastName
      dateOfBirth
      primaryLanguage
      languages
    }
  }
`;


const withAddEmployee = Component => props => {
  return (
    <Mutation mutation={ADD_EMPLOYEE}>
      {addEmployee => {
        return (
          <Component
            addEmployee={({ firstName, lastName, dateOfBirth, primaryLanguage, languages }) => addEmployee({
            variables: { firstName, lastName, dateOfBirth, primaryLanguage, languages }, refetchQueries: [
              { query: GET_EMPLOYEES }
            ] })}
          />
        )
      }}
    </Mutation>
  );
};

export default withAddEmployee;
