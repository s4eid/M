const { gql } = require("@apollo/client");

export const DELETE_TEST = gql`
  mutation DeleteTest($id: ID!) {
    deleteTest(id: $id) {
      test_id
    }
  }
`;
