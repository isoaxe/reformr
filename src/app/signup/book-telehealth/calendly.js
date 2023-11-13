'use client';

import { useEffect } from 'react';

export default function Calendly() {
  useEffect(() => {
    /* Load Calendly script once the component mounts. */
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      /* Clean up the script when the component unmounts. */
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/lucasoconnell/meet-your-doctor"
      style={{ minWidth: '320px', height: '580px' }}
    />
  );
}
