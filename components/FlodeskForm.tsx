'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    fd: (event: string, options: { formId: string; containerEl: string }) => void;
    FlodeskObject: string;
  }
}

export default function FlodeskForm() {
  useEffect(() => {
    const existingScript = document.querySelector('script[src*="flodesk"]');
    if (!existingScript) {
      (function(
        w: Window & typeof globalThis,
        d: Document,
        t: string,
        h: string,
        s: string,
        n: string
      ) {
        w.FlodeskObject = n;
        const fn = function(...args: unknown[]) {
          ((w as unknown as Record<string, { q?: unknown[] }>)[n].q =
            (w as unknown as Record<string, { q?: unknown[] }>)[n].q || []).push(args);
        };
        (w as unknown as Record<string, unknown>)[n] =
          (w as unknown as Record<string, unknown>)[n] || fn;
        const f = d.getElementsByTagName(t)[0];
        const v = '?v=' + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
        const sm = d.createElement(t) as HTMLScriptElement;
        sm.async = true;
        sm.type = 'module';
        sm.src = h + s + '.mjs' + v;
        f.parentNode!.insertBefore(sm, f);
        const sn = d.createElement(t) as HTMLScriptElement;
        sn.async = true;
        sn.noModule = true;
        sn.src = h + s + '.js' + v;
        f.parentNode!.insertBefore(sn, f);
      })(window, document, 'script', 'https://assets.flodesk.com', '/universal', 'fd');
    }
    window.fd('form', {
      formId: '6a284442c4e25021363b19df',
      containerEl: '#fd-form-6a284442c4e25021363b19df',
    });
  }, []);

  return <div id="fd-form-6a284442c4e25021363b19df" />;
}
