import { gql } from "@apollo/client";

export const GET_TEST_TEACHER = gql`
  query getTest($id: ID!) {
    test(id: $id) {
      #       test_id
      #       title
      quize {
        q
        a
        b
        c
        d
        answerKey
      }
      #       test_createdat
      #     creator
      #       teacher_id
      first_name
      last_name
      #       email
      #       password
      #       picture
      #       role
      #       refresh_token
    }
  }
`;
