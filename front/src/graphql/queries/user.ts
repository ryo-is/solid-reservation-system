import { gql } from '@solid-primitives/graphql';
import {
  GetUserQuery,
  GetUserQueryVariables,
  GetUserListQuery,
} from '@graphql/generated/graphql';
import { createQuery } from '@graphql';
import { Accessor } from 'solid-js';

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

const getUserListDocument = gql`
  query getUserList {
    users {
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

export const useGetUserQuery = (userId: Accessor<string>) =>
  createQuery<GetUserQuery, () => GetUserQueryVariables>(
    getUserDocument,
    () => ({
      userId: userId(),
    })
  );

export const useGetUserListQuery = () =>
  createQuery<GetUserListQuery>(getUserListDocument);
