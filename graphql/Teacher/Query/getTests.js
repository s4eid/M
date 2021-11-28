import { gql } from "@apollo/client";

export const GET_TESTS_TEACHER = gql`
  query getTests {
    tests {
      test_id
      title
      #       quize
      test_createdat
      #       creator
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
