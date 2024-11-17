'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import type { ComponentProps } from 'react';

export function ThemeToggle(props: ComponentProps<'button'>) {
  const { setTheme, theme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      {...props}
    >
      <Sun className="h-6 w-6 dark:hidden" />
      <Moon className="hidden h-6 w-6 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
