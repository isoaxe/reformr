'use client';

import { useState, useEffect } from 'react';
import { useCookies } from 'next-client-cookies';
import { auth } from '@/util/firebase';
import Toast from '@/components/toast';
import Calendly from './calendly';

export default function BookTelehealth() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);
  const cookies = useCookies();

  useEffect(() => {
    async function saveMedicalData() {
      const medical = cookies.get('medical');
      const fireToken = await auth.currentUser.getIdToken();

      try {
        const options = {
          method: 'POST',
          body: JSON.stringify({ medical, fireToken }),
          headers: { 'content-type': 'application/json' },
        };
        const res = await fetch('/api/medical', options);
        const { error } = await res.json();
        if (error) setShowFailure(true);
        else setShowSuccess(true);
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
