// components/ThemeSwitcher.tsx
import React from 'react';
import { useTheme } from '@/app/store/hooks';

const ThemeSwitcher = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg ${mode === 'dark'
        ? 'bg-gray-800 text-white'
        : 'bg-white text-gray-800'
        }`}
    >
      {mode === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};