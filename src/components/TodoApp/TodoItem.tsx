import { useState } from 'react';
import { TTodoId, TTodoItem } from '../../misc/types';
import { TagEditor } from './TagEditor';

interface ITodoItem {
  todoItem: TTodoItem;
  setTodoItemTags: (id: TTodoId, tags: string[]) => void;
  deleteTodo: (id: TTodoId) => void;
}

export function TodoItem({ todoItem, setTodoItemTags, deleteTodo }: ITodoItem) {
  const [showEditor, setShowEditor] = useState(false);

  return (
    <>
      <div
        className="p-2 mb-2 rounded select-none
          hover:bg-slate-700/20
          active:bg-slate-700/50"
        onClick={() => setShowEditor((show) => !show)}
        onDoubleClick={() => deleteTodo(todoItem.id)}
      >
        {todoItem.title}
      </div>

      {showEditor && (
        <TagEditor
          tags={todoItem.tags ?? []}
          onSaveNewTags={(tags) => setTodoItemTags(todoItem.id, tags)}
          onStopEditing={() => setShowEditor(false)}
        />
      )}
    </>
  );
}
