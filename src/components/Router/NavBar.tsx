import { PAGES } from './Router';

export function NavBar({
  currentPage,
  onPress,
}: {
  currentPage: PAGES;
  onPress: (page: PAGES) => void;
}) {
  return (
    <nav className="px-8 mb-2 text-right">
      <button
        onClick={() => onPress(PAGES.HOME)}
        className={`
            font-semibold
            ${getActiveColor(currentPage === PAGES.HOME)}
            mr-2
          `}
      >
        home
      </button>
      <button
        onClick={() => onPress(PAGES.SETTINGS)}
        className={`
            font-semibold
            ${getActiveColor(currentPage === PAGES.SETTINGS)}
          `}
      >
        settings
      </button>
    </nav>
  );
}

function getActiveColor(isActive: boolean) {
  if (isActive) {
    return 'text-yellow-600';
  }

  return '';
}
