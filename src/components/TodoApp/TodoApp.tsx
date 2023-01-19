import { TodoItemList } from './TodoItemList';
import { NewTodoFrom } from './NewTodoForm';
import { TagList } from './TagList';
import { useTodos } from './useTodos';

export function TodoApp() {
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