import { gql } from "@apollo/client";

export const LOGIN_TEACHER = gql`
  mutation LoginTeacher($email: String!, $password: String!) {
    loginTeacher(email: $email, password: $password) {
      refreshToken
    }
  }
`;
