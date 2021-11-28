import { gql } from "@apollo/client";

export const GET_TEACHER_TESTS = gql`
  query GetTeacherTests($teacher_id: ID!) {
    getTeacherTests(teacher_id: $teacher_id) {
      test_id
      title
      test_createdat
      creator
      # quize: [Quiz!]!
    }
  }
`;
