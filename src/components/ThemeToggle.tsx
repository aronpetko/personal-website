'use client';

import { useEffect, useState } from 'react';

function getSystemPrefersLight(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
  return window.matchMedia('(prefers-color-scheme: light)').matches;
}

function getStoredTheme(): 'light' | 'dark' | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = window.localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {}
  return null;
}

function applyTheme(theme: 'light' | 'dark') {
  const root = document.documentElement;
  if (theme === 'light') {
    root.classList.add('light');
  } else {
    root.classList.remove('light');
  }
}

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'dark';
    const stored = getStoredTheme();
    if (stored) return stored;
    return getSystemPrefersLight() ? 'light' : 'dark';
  });

  useEffect(() => {
    // Ensure initial theme is applied on mount
    applyTheme(theme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyTheme(theme);
    try {
      window.localStorage.setItem('theme', theme);
    } catch {}
  }, [theme, mounted]);

  const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  const label = theme === 'light' ? 'Dark mode' : 'Light mode';

  if (!mounted) {
    // Avoid hydration mismatch: render nothing until mounted
    return null;
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Toggle ${label}`}
      title={`Switch to ${label}`}
      className="fixed bottom-4 right-4 z-50 rounded-full border border-white/10 px-3 py-2 text-xs backdrop-blur theme-toggle"
      style={{ color: 'var(--foreground)' }}
    >
      {theme === 'light' ? (
        // moon icon
        <span className="inline-flex items-center align-middle">
          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="mr-1"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          Dark
        </span>
      ) : (
        // sun icon
        <span className="inline-flex items-center align-middle">
          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="mr-1"><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zm10.48 14.32l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM12 4V1h-2v3h2zm0 19v-3h-2v3h2zM4 12H1v-2h3v2zm19 0v-2h-3v2h3zM6.76 19.16l-1.42 1.42-1.79-1.8 1.41-1.41 1.8 1.79zM19.16 6.76l1.4-1.4-1.79-1.8-1.41 1.41 1.8 1.79zM12 8a4 4 0 100 8 4 4 0 000-8z"/></svg>
          Light
        </span>
      )}
    </button>
  );
}


