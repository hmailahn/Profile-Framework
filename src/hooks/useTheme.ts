import { useEffect, useState } from 'react';

export type ThemeOption = 'light' | 'dark' | 'cool' | 'warm';

const THEMES: ThemeOption[] = ['light', 'dark', 'cool', 'warm'];

export function useTheme() {
  const [theme, setTheme] = useState<ThemeOption>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as ThemeOption | null;
      if (savedTheme && THEMES.includes(savedTheme)) {
        return savedTheme;
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('data-theme', theme);

    if (theme === 'light') {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme, themes: THEMES };
}
