import { useState } from 'react';
import { Settings } from '../Settings/Settings';
import { TodoApp } from '../TodoApp/TodoApp';
import { useTodos } from '../TodoApp/useTodos';
import { NavBar } from './NavBar';

export enum PAGES {
  HOME,
  SETTINGS,
}

/**
 *
 * + extract nav
 * + move todos useState into a custom hook
 * + move state upwart one level
 * - make Settings page
 */

export function Router() {
  const [currentPage, setCurrentPage] = useState(PAGES.HOME);

  const {
    todos,
    setTodos,
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

      {currentPage === PAGES.SETTINGS && (
        <Settings todos={todos} importTodos={setTodos} />
      )}
    </>
  );
}
