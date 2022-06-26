import type { Component } from 'solid-js';
import { Route, Routes } from 'solid-app-router';
import { Resarvations } from '@pages/resarvations';
import { Users } from '@pages/users';

export const App: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<Resarvations />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};
