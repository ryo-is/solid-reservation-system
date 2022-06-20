import { Component } from 'solid-js';
import { gql, createGraphQLClient } from '@solid-primitives/graphql';
import { Unnamed_1_Query } from '../generated/graphql';

const helloQueryDocument = gql`
  query {
    hello {
      message
    }
  }
`;

export const Top: Component = () => {
  const newQuery = createGraphQLClient('http://localhost:8080/graphql');
  const [data] = newQuery<Unnamed_1_Query>(helloQueryDocument);

  return (
    <div class="flex flex-col text-md p-4">
      <div>Reservation</div>
      <div>{data()?.hello.message}</div>
    </div>
  );
};
