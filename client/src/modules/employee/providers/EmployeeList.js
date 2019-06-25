import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

export const GET_EMPLOYEES = gql`
  {
    employees {
      _id
      firstName
      lastName
      dateOfBirth
      primaryLanguage
      languages
    }
  }
`;

const withEmployees = Component => props => {
  return (
    <Query query={GET_EMPLOYEES}>
      {({ loading, data }) => {
        return (
          <Component
            employeesLoading={loading}
            employees={data && data.employees} {...props}
          />
        );
      }}
    </Query>
  );
};

export default withEmployees;
