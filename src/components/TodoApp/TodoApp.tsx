import { useState, useEffect } from 'react';
import { TodoId, TodoItem } from '../../misc/types';
import { NewTodoFrom } from './NewTodoForm';
import { storage } from '../../misc/storage';
import { TodoItemList } from './TodoItemList';

export function TodoApp() {
  const [list, setList] = useState<TodoItem[]>([]);

  useEffect(() => {
    (async () => {
      const todos = await storage.getTodos();

      setList(todos);
    })();
  }, []);

  function addTodo(text: string) {
    const newTodo = {
      id: new Date().getTime(),
      title: text,
    };

    const newList = [...list, newTodo];
    setList(newList);

    storage.saveTodos(newList);
  }

  function deleteTodo(id: TodoId) {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);

    storage.saveTodos(newList);
  }

  return (
    <>
      <NewTodoFrom addTodo={addTodo} />
      <TodoItemList todoItems={list} deleteTodo={deleteTodo} />
    </>
  );
}
