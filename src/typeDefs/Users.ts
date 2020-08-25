import { gql } from "apollo-server-express";

export const Users = gql`
  extend type Query {
    me: User
  }
  type User {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
  }
  extend type Mutation {
    register(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Boolean!
    login(email: String!, password: String!): User
  }
`;
