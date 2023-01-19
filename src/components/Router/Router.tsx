import { useState } from 'react';
import { TodoApp } from '../TodoApp/TodoApp';
import { useTodos } from '../TodoApp/useTodos';
import { NavBar } from './NavBar';

export enum PAGES {
  HOME,
  SETTINGS,
}

export function Router() {
  const [currentPage, setCurrentPage] = useState(PAGES.HOME);

  const {
    addTodo,
    deleteTodo,
    setTodoItemTags,
    selectedTag,
    setSelectedTag,
    tags,
    filteredTodos,
  } = useTodos();

  return (
    <>
      <NavBar currentPage={currentPage} onPress={setCurrentPage} />

      {currentPage === PAGES.HOME && (
        <TodoApp
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          setTodoItemTags={setTodoItemTags}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          tags={tags}
          filteredTodos={filteredTodos}
        />
      )}

      {currentPage === PAGES.SETTINGS && 'settings page'}
    </>
  );
}
