import { Component } from 'solid-js';

export const MenuDrawer: Component = () => {
  return (
    <div class="bg-zinc-900 w-72 min-h-screen fixed">
      <div class="p-4 text-lg">Reservation System</div>
      <div class="border border-zinc-600" />
      <ul class="menu p-2 mt-1">
        <li class="hover:bg-zinc-700 rounded my-1">
          <a>Reservation</a>
        </li>
        <li class="hover:bg-zinc-700 rounded my-1">
          <a>Client</a>
        </li>
        <li class="hover:bg-zinc-700 rounded my-1">
          <a>Setting</a>
        </li>
      </ul>
    </div>
  );
};
