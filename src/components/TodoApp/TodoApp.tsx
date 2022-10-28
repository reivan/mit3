import { useState, useEffect } from 'react';
import { TTodoId, TTodoItem } from '../../misc/types';
import { TodoItemList } from './TodoItemList';
import { NewTodoFrom } from './NewTodoForm';
import { TagList } from './TagList';
import { storage } from '../../misc/storage';
import { uniq } from '../../misc/utils';

const untaggedTag = 'untagged';

export function TodoApp() {
  const [todos, setTodos] = useState<TTodoItem[]>([]);
  const [selectedTag, setSelectedTag] = useState<null | string>(null);

  useEffect(() => {
    (async () => {
      const todos = await storage.getTodos();

      setTodos(todos);
    })();
  }, []);

  function addTodo(text: string) {
    const tags =
      selectedTag !== null && selectedTag !== untaggedTag ? [selectedTag] : [];

    const newTodo = {
      id: new Date().getTime(),
      title: text,
      tags,
    };

    const newList = [newTodo, ...todos];
    setTodos(newList);

    storage.saveTodos(newList);
  }

  function deleteTodo(id: TTodoId) {
    const newList = todos.filter((todo) => todo.id !== id);
    setTodos(newList);

    storage.saveTodos(newList);
  }

  function setTodoItemTags(id: TTodoId, tags: string[]) {
    const newList = todos.map((todo) =>
      todo.id === id ? { ...todo, tags } : todo
    );
    setTodos(newList);

    storage.saveTodos(newList);
  }

  const tags = [untaggedTag, ...uniq(todos.flatMap((todo) => todo.tags ?? []))];

  const filteredTodos = filterByTag(todos, selectedTag);

  return (
    <>
      <TagList
        tags={tags}
        selectedTag={selectedTag}
        filterByTag={setSelectedTag}
      />
      <div className="px-8">
        <NewTodoFrom addTodo={addTodo} />
        <TodoItemList
          setTodoItemTags={setTodoItemTags}
          todoItems={filteredTodos}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
}

function filterByTag(todos: TTodoItem[], selectedTag: string | null) {
  if (selectedTag === null) {
    return todos;
  }

  if (selectedTag === untaggedTag) {
    return todos.filter((todo) => {
      const tagCount = todo.tags?.length ?? 0;
      return tagCount === 0;
    });
  }

  return todos.filter((todo) => todo.tags?.includes(selectedTag));
}
