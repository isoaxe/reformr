'use client';

import { useState, useEffect } from 'react';

export default function PharmacistDashboard() {
  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true); // assume user fetched within a second.
    }, 1000);
  }, []);

  return (
    <main className="mx-auto flex min-h-[calc(100vh-23rem)] w-fit max-w-3xl flex-col px-4 xs:px-9">
      <h1 className="mb-2 pt-4 text-center text-xl font-semibold text-sky-600 md:pt-8 md:text-2xl">
        Current Patients
      </h1>
      <div className="flex flex-row font-semibold">
        <p className="w-40">Name</p>
        <p className="w-64">Email</p>
        <p>Order Status</p>
      </div>
    </main>
  );
}
