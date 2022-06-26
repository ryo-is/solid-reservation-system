import { Component, For } from 'solid-js';
import { useGetUserListQuery } from '@graphql/queries/user';
import { IconButton } from '@components/IconButton';
import { HiOutlinePencil } from 'solid-icons/hi';

export const Users: Component = () => {
  const [users] = useGetUserListQuery();

  return (
    <div class="px-4">
      <table class="table w-full">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>address</th>
            <th>email</th>
            <th>tell</th>
            <th class="w-[0]" />
          </tr>
        </thead>
        <tbody>
          <For each={users()?.users}>
            {(user) => (
              <tr class="hover">
                <td>{user.id}</td>
                <td>
                  {user.name} ({user.kana})
                </td>
                <td>{user.address}</td>
                <td>{user.email}</td>
                <td>{user.tell}</td>
                <td>
                  <IconButton class="bg-transparent">
                    <HiOutlinePencil class="w-6 h-6" />
                  </IconButton>
                </td>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
};
