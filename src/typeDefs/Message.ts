import { gql } from "apollo-server-express";

export const Message = gql`
  type Message {
    text: String!
    userId: ID!
    channelId: ID!
  }
`;
