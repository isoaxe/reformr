'use client';

import { useState, useEffect } from 'react';
import { useCookies } from 'next-client-cookies';
import Toast from '@/components/toast';
import Calendly from './calendly';

export default function BookTelehealth() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);
  const cookies = useCookies();

  useEffect(() => {
    async function saveMedicalData() {
      const medical = cookies.get('medical');
      const token = cookies.get('token');
      const email = cookies.get('email');

      try {
        const options = {
          method: 'POST',
          body: JSON.stringify({ medical, email, token }),
          headers: { 'content-type': 'application/json' },
        };
        const res = await fetch('/api/medical', options);
        const { success } = await res.json();
        if (success) setShowSuccess(true);
        else setShowFailure(true);
      } catch (err) {
        console.error('Error saving medical data: ', err);
      }
    }

    saveMedicalData();
  }, [cookies]);

  return (
    <main className="min-h-screen">
      <h1 className="p-4 text-2xl md:p-8 md:text-4xl">
        This is the
        <span className="font-bold text-blue-600"> Telehealth Booking </span>
        page
      </h1>
      <Calendly />
      <Toast
        message="There was an issue saving medical data to the database."
        severity="error"
        open={showFailure}
        setOpen={setShowFailure}
      />
      <Toast
        message="Medical data saved successfully."
        severity="success"
        open={showSuccess}
        setOpen={setShowSuccess}
      />
    </main>
  );
}
