'use client';

import { useEffect } from 'react';
import hljs from 'highlight.js';

export default function CodeHighlighter() {
  useEffect(() => {
    try {
      hljs.highlightAll();
    } catch {}
  }, []);
  return null;
}


