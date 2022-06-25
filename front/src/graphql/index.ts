import { createGraphQLClient } from '@solid-primitives/graphql';

export const createQuery = <T, S = {}>(document: string, variables?: S) => {
  const newQuery = createGraphQLClient('http://localhost:8080/graphql');
  return newQuery<T>(document, variables);
};
