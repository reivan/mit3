import { TodoItemList } from './TodoItemList';
import { NewTodoFrom } from './NewTodoForm';
import { TagList } from './TagList';
import { TTodoId, TTodoItem } from '../../misc/types';

interface ITodoApp {
  addTodo: (text: string) => void;
  deleteTodo: (id: TTodoId) => void;
  setTodoItemTags: (id: TTodoId, tags: string[]) => void;
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
  tags: string[];
  filteredTodos: TTodoItem[];
}

export function TodoApp({
  addTodo,
  deleteTodo,
  setTodoItemTags,
  selectedTag,
  setSelectedTag,
  tags,
  filteredTodos,
}: ITodoApp) {
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
