import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';

export function createApollo() {
  return new ApolloClient({
    uri: 'https://graphqlzero.almansi.me/api', // Using a public GraphQL API
    cache: new InMemoryCache(),
  });
}

export const APOLLO_PROVIDER = {
  provide: APOLLO_OPTIONS,
  useFactory: createApollo,
};
