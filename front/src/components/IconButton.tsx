import { Component, children, JSX } from 'solid-js';

interface IconButtonProps {
  children: JSX.Element;
  class?: string;
}

export const IconButton: Component<IconButtonProps> = (props) => {
  const c = children(() => props.children);

  return (
    <button
      class={[
        'btn bg-zinc-800 hover:bg-zinc-900 no-animation border-0',
        props.class,
      ].join(' ')}
    >
      {c()}
    </button>
  );
};
