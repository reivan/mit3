interface ITagList {
  tags: string[];
  selectedTag: string | null;
  filterByTag: (tag: string | null) => void;
}

export function TagList({ tags, selectedTag, filterByTag }: ITagList) {
  function onPressTag(pressedTag: string) {
    const newSelectedTag = selectedTag === pressedTag ? null : pressedTag;

    filterByTag(newSelectedTag);
  }

  return (
    <div className="px-8 mb-4 whitespace-nowrap overflow-x-scroll">
      {tags.map((tag, i) => (
        <span
          key={tag}
          className={`cursor-pointer inline-block
            mr-1 py-1 px-2
            select-none
            ${getTagColor(i, selectedTag === null, tag === selectedTag)}
            ${' '}
            ${getTagPressedColor(i)}
            rounded`}
          onClick={() => onPressTag(tag)}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

const baseColors = [
  'bg-sky-500',
  'bg-lime-500',
  'bg-amber-500',
  'bg-indigo-500',
];
const pressedColors = [
  'active:bg-sky-600',
  'active:bg-lime-600',
  'active:bg-amber-600',
  'active:bg-indigo-600',
];
const inactiveColors = [
  'bg-sky-500/30',
  'bg-lime-500/30',
  'bg-amber-500/30',
  'bg-indigo-500/30',
];

function getTagColor(
  index: number,
  noTagSelected: boolean,
  isTagActive: boolean
) {
  if (noTagSelected) {
    return baseColors[index % 4];
  }

  const colors = isTagActive ? baseColors : inactiveColors;
  return colors[index % 4];
}

function getTagPressedColor(index: number) {
  return pressedColors[index % 4];
}
