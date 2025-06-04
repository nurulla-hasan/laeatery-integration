'use client';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-[#c8c8c83a] text-sm cursor-pointer"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ToggleTheme;