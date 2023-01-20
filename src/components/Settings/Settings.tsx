import { TTodoItem } from '../../misc/types';
import { ExportTodos } from './ExportTodos';
import { ImportTodos } from './ImportTodos';

interface ISettings {
  todos: TTodoItem[];
  importTodos: (todos: TTodoItem[]) => void;
}

export function Settings({ todos, importTodos }: ISettings) {
  return (
    <div className="px-8 py-4 mb-4">
      <ExportTodos todos={todos} />
      <div className="mb-4" />
      <ImportTodos onPressImport={importTodos} />
    </div>
  );
}
