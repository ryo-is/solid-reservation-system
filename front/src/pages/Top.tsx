import { Component } from 'solid-js';
import { gql } from '@solid-primitives/graphql';
import {
  HelloQuery,
  GetUserQuery,
  GetUserQueryVariables,
} from '../graphql/generated/graphql';
import { createQuery } from '../graphql';

const helloQueryDocument = gql`
  query hello {
    hello {
      message
    }
  }
`;

const getUserDocument = gql`
  query getUser($userId: ID!) {
    user(userId: $userId) {
      id
      name
      kana
      address
      email
      tell
      memo
    }
  }
`;

export const Top: Component = () => {
  const [helloData] = createQuery<HelloQuery>(helloQueryDocument);
  const [user] = createQuery<GetUserQuery, GetUserQueryVariables>(
    getUserDocument,
    {
      userId: 'test',
    }
  );

  return (
    <div class="flex flex-col text-md p-4">
      <div>Reservation</div>
      <div>{helloData()?.hello.message}</div>
      <div>{user()?.user.id}</div>
    </div>
  );
};
