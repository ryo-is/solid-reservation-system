export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddUser = {
  address: Scalars['String'];
  email: Scalars['String'];
  kana: Scalars['String'];
  memo: Scalars['String'];
  name: Scalars['String'];
  tell: Scalars['String'];
};

export type Mutation = {
  addUser: User;
};


export type MutationAddUserArgs = {
  input: AddUser;
};

export type Query = {
  user: User;
  users: Array<User>;
  version: Version;
};


export type QueryUserArgs = {
  userId: Scalars['ID'];
};

export type User = {
  address: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  kana: Scalars['String'];
  memo: Scalars['String'];
  name: Scalars['String'];
  tell: Scalars['String'];
};

export type Version = {
  version: Scalars['String'];
};

export type GetUserQueryVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type GetUserQuery = { user: { id: string, name: string, kana: string, address: string, email: string, tell: string, memo: string } };

export type GetUserListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserListQuery = { users: Array<{ id: string, name: string, kana: string, address: string, email: string, tell: string, memo: string }> };
