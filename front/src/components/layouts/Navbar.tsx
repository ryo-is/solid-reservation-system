import { Component } from 'solid-js';
import { HiOutlineUser } from 'solid-icons/hi';
import { IconButton } from '@components/IconButton';

export const Navbar: Component = () => {
  return (
    <div class="navbar sticky top-0 justify-end h-[72px] bg-zinc-800">
      <div class="flex-none">
        <IconButton>
          <HiOutlineUser class="w-6 h-6" />
        </IconButton>
      </div>
    </div>
  );
};
