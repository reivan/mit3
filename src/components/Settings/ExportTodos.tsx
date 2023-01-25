import { useEffect, useState } from 'react';
import { TTodoItem } from '../../misc/types';

export function ExportTodos({ todos = [] }: { todos: TTodoItem[] }) {
  const [downloadURL, setDownloadURL] = useState('');
  const [createdAt, setCreatedAt] = useState('');

  useEffect(() => {
    const blob = new Blob(
      [JSON.stringify(todos)], // prettier-ignore
      { type: 'application/json' }
    );
    const downloadURL = URL.createObjectURL(blob);

    const datetime = new Date().toISOString().replaceAll(':', '_');

    setDownloadURL(downloadURL);
    setCreatedAt(datetime);

    return () => {
      URL.revokeObjectURL(downloadURL)
    }
  }, [todos]);

  return (
    <a
      download={`todos_${createdAt}.json`}
      href={downloadURL}
      className="bg-lime-600 rounded px-4 py-1"
    >
      Export
    </a>
  );
}
