'use client';

import { useState, useEffect } from 'react';

export default function DoctorDashboard() {
  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true); // assume user fetched within a second.
    }, 1000);
  }, []);

  return (
    <main className="mx-auto flex min-h-[calc(100vh-23rem)] w-full max-w-3xl flex-col px-4 xs:px-9"></main>
  );
}
