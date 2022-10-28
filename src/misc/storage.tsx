import { TTodoItem } from './types';

export const storage = {
  getTodos: async (): Promise<TTodoItem[]> => {
    let todos = [];

    try {
      const savedState = localStorage.getItem('todos');
      todos = JSON.parse(savedState || '[]');
    } catch (error) {
      console.error(error);
    }

    return todos;
  },
  saveTodos: async (todos: TTodoItem[]) => {
    const jsonTodos = JSON.stringify(todos);
    localStorage.setItem('todos', jsonTodos);
  },
};
