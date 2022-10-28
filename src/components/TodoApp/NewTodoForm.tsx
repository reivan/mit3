import { useState } from 'react';

interface INewTodoForm {
  addTodo: (text: string) => void;
}

export function NewTodoFrom({ addTodo }: INewTodoForm) {
  const [text, setText] = useState('');

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addTodo(text);
    setText('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className="w-full h-10 px-2 mb-2 bg-stone-700
          rounded focus:outline-none
          focus:ring-2 focus:ring-slate-300
          transition duration-100"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="new todo..."
      />
    </form>
  );
}
