import { TodoId, TodoItem } from '../../misc/types';

interface ITodoItemList {
  todoItems: TodoItem[];
  deleteTodo: (id: TodoId) => void;
}

export function TodoItemList({ todoItems, deleteTodo }: ITodoItemList) {
  return (
    <div>
      {todoItems.map((todoItem) => (
        <div
          className="py-2 select-none"
          key={todoItem.id}
          onDoubleClick={() => deleteTodo(todoItem.id)}
        >
          {todoItem.title}
        </div>
      ))}
    </div>
  );
}
