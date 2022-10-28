import { TTodoId, TTodoItem } from '../../misc/types';
import { TodoItem } from './TodoItem';

interface ITodoItemList {
  todoItems: TTodoItem[];
  setTodoItemTags: (id: TTodoId, tags: string[]) => void;
  deleteTodo: (id: TTodoId) => void;
}

export function TodoItemList({
  todoItems,
  setTodoItemTags,
  deleteTodo,
}: ITodoItemList) {
  return (
    <div>
      {todoItems.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          todoItem={todoItem}
          setTodoItemTags={setTodoItemTags}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}
