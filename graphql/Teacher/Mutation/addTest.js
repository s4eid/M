import { gql } from "@apollo/client";

export const ADD_TEST = gql`
  mutation AddTest($title: String!, $creator: ID!, $quize: [testAdd]!) {
    addTest(title: $title, creator: $creator, quize: $quize) {
      test_id
    }
  }
`;
