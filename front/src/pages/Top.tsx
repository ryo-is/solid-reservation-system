import { Component } from 'solid-js';
import { Timeline } from '@components/Timeline';

export const Top: Component = () => {
  return (
    <div class="flex flex-col text-md h-full p-4">
      <Timeline />
    </div>
  );
};
