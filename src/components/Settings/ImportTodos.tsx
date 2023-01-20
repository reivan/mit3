import React, { useState } from 'react';
import { TTodoItem } from '../../misc/types';

interface IImportTodos {
  onPressImport: (todos: TTodoItem[]) => void;
}

export function ImportTodos({ onPressImport }: IImportTodos) {
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [uploadedTodos, setUploadedTodos] = useState<TTodoItem[] | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        setMessage('');
        try {
          const str = String(event.target?.result);
          const data = JSON.parse(str);
          setUploadedTodos(data);
          setError('');
        } catch {
          setError('cant read file');
          setUploadedTodos(null);
        }
      };
      reader.readAsText(selectedFile);
    }
  };

  return (
    <div>
      <h3 className="text-xl mb-1">Import</h3>
      <hr className="mb-4" />

      <input className="mb-4" type="file" onChange={handleChange} />

      {error && <p className="text-red-500">{error}</p>}
      {message && <p>{message}</p>}

      {uploadedTodos && (
        <button
          onClick={() => {
            onPressImport(uploadedTodos);
            setUploadedTodos(null);
            setMessage('import success');
          }}
          className="bg-red-600 rounded px-4 py-1"
        >
          Import (length: {uploadedTodos.length})
        </button>
      )}
    </div>
  );
}
