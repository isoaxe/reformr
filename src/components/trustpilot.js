'use client';

import { useEffect, useRef } from 'react';

/* This displays the Trustpilot widget. */
export default function TrustBox() {
  const ref = useRef(null);

  useEffect(() => {
    /* If window.Trustpilot isn't available, the script in root layout hasn't loaded just yet. */
    if (window.Trustpilot) window.Trustpilot.loadFromElement(ref.current, true);
  }, []);

  return (
    <div
      ref={ref}
      className="trustpilot-widget"
      data-locale="en-US"
      data-template-id="56278e9abfbbba0bdcd568bc"
      data-businessunit-id="6433b1b7e705ec822175d2c1"
      data-style-height="52px"
      data-style-width="100%"
    >
      <a
        href="https://www.trustpilot.com/review/reformr.co.nz"
        target="_blank"
        rel="noopener"
      >
        Trustpilot Loading...
      </a>
    </div>
  );
}
