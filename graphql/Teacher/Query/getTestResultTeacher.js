import { gql } from "@apollo/client";

export const GET_TESTS_RESULTS_TEACHER = gql`
  query GetTestsResultsTeacher($id: ID!) {
    getTestsResultsTeacher(id: $id) {
      test_result_id
      first_name
      last_name
      result
    }
  }
`;
