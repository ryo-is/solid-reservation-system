import { Component } from 'solid-js';
import { Svg } from './Svg';

export const Navbar: Component = () => {
  return (
    <div class="navbar sticky top-0 justify-end h-[72px] bg-zinc-800">
      <div class="flex-none">
        <button class="btn bg-zinc-800 hover:bg-zinc-900 no-animation border-0">
          <Svg name="user" />
        </button>
      </div>
    </div>
  );
};
