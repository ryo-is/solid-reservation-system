import { Component, children, JSX } from 'solid-js';
import { Navbar } from '@components/Navbar';
import { MenuDrawer } from './MenuDrawer';

interface LayoutProps {
  children: JSX.Element;
}

export const Layout: Component<LayoutProps> = (props) => {
  const c = children(() => props.children);

  return (
    <div class="flex flex-col min-h-screen text-zinc-200 bg-zinc-800">
      <MenuDrawer />
      <div class="pl-72">
        <Navbar />
        <div class="h-[calc(100vh-72px)] overflow-y-scroll">{c()}</div>
      </div>
    </div>
  );
};
