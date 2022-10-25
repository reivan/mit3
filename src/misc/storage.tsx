import { TodoItem } from './types';

export const storage = {
  getTodos: async (): Promise<TodoItem[]> => {
    let todos = [];

    try {
      const savedState = localStorage.getItem('todos');
      todos = JSON.parse(savedState || '[]');
    } catch (error) {
      console.error(error);
    }

    return todos;
  },
  saveTodos: async (todos: TodoItem[]) => {
    const jsonTodos = JSON.stringify(todos);
    localStorage.setItem('todos', jsonTodos);
  },
};
