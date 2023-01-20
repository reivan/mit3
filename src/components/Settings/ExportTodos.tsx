import { TTodoItem } from '../../misc/types';

export function ExportTodos({ todos = [] }: { todos: TTodoItem[] }) {
  const todos64 = [todos] // converting to base64 JSON
    .map((val) => JSON.stringify(val))
    .map(btoa)[0];
  const timestamp = new Date().toISOString().replaceAll(':', '_');

  return (
    <a
      download={`todos_${timestamp}.json`}
      href={`data:application/json;base64,${todos64}`}
      className="bg-lime-600 rounded px-4 py-1"
    >
      Export
    </a>
  );
}
