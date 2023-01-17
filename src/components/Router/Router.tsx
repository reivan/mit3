import { useState } from 'react';
import { TodoApp } from '../TodoApp/TodoApp';

enum PAGES {
  HOME,
  SETTINGS
}

export function Router() {
  const [currentPage, setCurrentPage] = useState(PAGES.HOME)

  return (
    <>
      <div className="px-8 mb-2 text-right">
        <button
          onClick={() => setCurrentPage(PAGES.HOME)}
          className={`
            font-semibold
            ${getActiveColor(currentPage === PAGES.HOME)}
            mr-2
          `}
        >
          home
        </button>
        <button
          onClick={() => setCurrentPage(PAGES.SETTINGS)}
          className={`
            font-semibold
            ${getActiveColor(currentPage === PAGES.SETTINGS)}
          `}
        >
          settings
        </button>
      </div>

      {currentPage === PAGES.HOME && <TodoApp />}
      {currentPage === PAGES.SETTINGS && 'settings page'}
    </>
  );
}

function getActiveColor(isActive: boolean) {
  if (isActive) {
    return 'text-yellow-600'
  }

  return ''
}
