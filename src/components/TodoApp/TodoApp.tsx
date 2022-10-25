import { useState, useEffect } from 'react';
import { TodoId, TodoItem } from '../../misc/types';
import { TodoItemList } from './TodoItemList';
import { NewTodoFrom } from './NewTodoForm';
import { TagList } from './TagList';
import { storage } from '../../misc/storage';
import { uniq } from '../../misc/utils';

export function TodoApp() {
  const [list, setList] = useState<TodoItem[]>([]);
  const [selectedTag, setSelectedTag] = useState<null | string>(null);

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

  const tags = uniq(list.flatMap((todo) => todo.tags ?? []));

  const filteredTodos = selectedTag
    ? list.filter((todo) => todo.tags?.includes(selectedTag))
    : list;

  return (
    <>
      <TagList
        tags={tags}
        selectedTag={selectedTag}
        filterByTag={setSelectedTag}
      />
      <div className="px-8">
        <NewTodoFrom addTodo={addTodo} />
        <TodoItemList todoItems={filteredTodos} deleteTodo={deleteTodo} />
      </div>
    </>
  );
}
