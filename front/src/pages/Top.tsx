import { Component, createSignal } from 'solid-js';
import { useGetUserQuery } from '@graphql/queries/user';

export const Top: Component = () => {
  const [userId, setUserId] = createSignal('test-id');
  const [user, { refetch }] = useGetUserQuery(userId);

  return (
    <div class="flex flex-col text-md p-4">
      <div>Reservation</div>
      <div class="my-2">req: {userId()}</div>
      <div class="my-2">res: {user()?.user.id}</div>
      <input
        class="input my-2 text-lg w-[240px] bg-zinc-300 text-zinc-800"
        value={userId()}
        onChange={(e) => {
          setUserId(e.currentTarget.value);
          refetch();
        }}
      />
    </div>
  );
};
