import { gql } from 'apollo-angular';

export const GET_USERS = gql`
  query {
    users {
      data {
        id
        name
        email
      }
    }
  }
`;
