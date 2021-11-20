import { gql } from "@apollo/client";

export const LOGIN_STUDENT = gql`
  mutation loginTeacher($email: String!, $password: String!) {
    loginTeacher(email: $email, password: $password) {
      refresh_token
    }
  }
`;
