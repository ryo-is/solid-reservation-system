import { Component } from 'solid-js';
import { gql, createGraphQLClient } from '@solid-primitives/graphql';
import { HelloQuery } from '../generated/graphql';

const helloQueryDocument = gql`
  query hello {
    hello {
      message
    }
  }
`;

export const Top: Component = () => {
  const newQuery = createGraphQLClient('http://localhost:8080/graphql');
  const [data] = newQuery<HelloQuery>(helloQueryDocument);

  return (
    <div class="flex flex-col text-md p-4">
      <div>Reservation</div>
      <div>{data()?.hello.message}</div>
    </div>
  );
};
