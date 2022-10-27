import { useState } from 'react';
import { uniq } from '../../misc/utils';

interface ITagEditor {
  tags: string[];
  onSaveNewTags: (tags: string[]) => void;
  onStopEditing: () => void;
}

export function TagEditor({ tags, onSaveNewTags, onStopEditing }: ITagEditor) {
  const [text, setText] = useState(format.stringify(tags));

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    // TODO: is not invoked when Enter is pressed for some reason
    event.preventDefault();
    onSaveNewTags(format.parse(text));
    onStopEditing();
  }

  function onPressSave() {
    onSaveNewTags(format.parse(text));
    onStopEditing();
  }

  function onPressCancel() {
    onStopEditing();
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col mb-2">
      <label className="mb-1 text-sm text-slate-300">edit tags</label>

      <input
        type="text"
        className="py-1 px-2 mb-4 rounded"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <div className="flex space-x-3">
        <button
          onClick={onPressCancel}
          className="w-1/2 py-2 bg-rose-600 active:bg-rose-700 rounded"
        >
          Cancel
        </button>
        <button
          onClick={onPressSave}
          className="w-1/2 py-2 bg-lime-600 active:bg-lime-700 rounded"
        >
          Save
        </button>
      </div>
    </form>
  );
}

const format = {
  stringify: (tags: string[]) => tags.join(' '),
  parse: (text: string) => {
    if (text === '') {
      return [];
    }

    return uniq(text.trim().split(/\s+/));
  },
};
