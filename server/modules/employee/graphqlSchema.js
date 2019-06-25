const { gql } = require('apollo-server-express');

// Construct a schema using GraphQL schema language
const typeDefs = gql`
  type Employee {
    _id: String,
    firstName: String,
    lastName: String,
    dateOfBirth: String,
    primaryLanguage: String,
    languages: String
  },
  type Query {
    employees: [Employee],
    employee: Employee
  },
  type Mutation {
    addEmployee(
      firstName: String!,
      lastName: String!,
      dateOfBirth: String!,
      primaryLanguage: String!,
      languages: String!
    ): Employee,
    updateEmployee(
      _id: ID!,
      firstName: String!,
      lastName: String!,
      dateOfBirth: String!,
      primaryLanguage: String!,
      languages: String!
    ): Employee,
    deleteEmployee(
      _id: ID!
    ): Employee
  }
`;

module.exports = typeDefs;
