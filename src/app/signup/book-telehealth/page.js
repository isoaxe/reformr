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
      const captchaToken = cookies.get('token');
      const email = cookies.get('email');

      try {
        const options = {
          method: 'POST',
          body: JSON.stringify({ medical, email, captchaToken }),
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
    <main className="mx-auto h-screen min-h-[calc(100vh-8rem)] w-full max-w-xl">
      <h1 className="mb-4 text-center text-2xl font-semibold text-sky-600 sm:text-3xl">
        Book your telehealth appointment
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
