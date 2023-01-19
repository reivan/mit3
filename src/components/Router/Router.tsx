import { useState } from 'react';
import { TodoApp } from '../TodoApp/TodoApp';
import { NavBar } from './NavBar';

export enum PAGES {
  HOME,
  SETTINGS,
}

export function Router() {
  const [currentPage, setCurrentPage] = useState(PAGES.HOME);

  return (
    <>
      <NavBar currentPage={currentPage} onPress={setCurrentPage} />

      {currentPage === PAGES.HOME && <TodoApp />}
      {currentPage === PAGES.SETTINGS && 'settings page'}
    </>
  );
}
