import { Component, children } from 'solid-js';
import { Navbar } from '@components/Navbar';
import { MenuDrawer } from './MenuDrawer';

export const Layout: Component = (props) => {
  const c = children(() => props.children);

  return (
    <div class="flex flex-col min-h-screen text-zinc-200 bg-zinc-800">
      {/* <Navbar /> */}
      <MenuDrawer />
      <div class="pl-72">{c()}</div>
    </div>
  );
};
