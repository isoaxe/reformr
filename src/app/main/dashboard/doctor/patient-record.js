'use client';

import { useState, useEffect } from 'react';
import { Modal } from '@mui/material';

/* Presents patient screening and medical data to the doctor. */
export default function PatientRecord({ open, setOpen, fireDocId }) {
  const [screening, setScreening] = useState({});
  const [medical, setMedical] = useState({});

  useEffect(() => {
    async function getPatientRecord() {
      // TODO: Add token from firebase auth to request.
      const res = await fetch(`/api/medical?docId=${fireDocId}`);
      const data = await res.json();
      if (data.success) {
        setScreening(data.screening);
        setMedical(data.medical);
      } else console.log('Error getting patient record: ', data.error);
    }
    if (fireDocId) getPatientRecord();
  }, [fireDocId]);

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <section className="mx-auto mt-12 h-[90vh] w-full max-w-5xl rounded bg-slate-300 px-9 md:text-lg">
        <h1 className="mb-2 pt-4 text-center text-2xl font-semibold text-sky-600 md:text-3xl">
          Patient Record
        </h1>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <p>
              <span className="font-semibold">Name: </span>
              {`${screening.firstName} ${screening.lastName}`}
            </p>
            <p>
              <span className="font-semibold">Phone: </span>
              {screening.phone}
            </p>
            <p>
              <span className="font-semibold">DoB: </span>
              {screening.dob}
            </p>
            <p>
              <span className="font-semibold">Email: </span>
              {screening.email}
            </p>
          </div>
          <div className="flex flex-col">
            <p>
              <span className="font-semibold">Age: </span>
              {Math.floor(
                (new Date() - new Date(screening.dob)) / 31557600000 // 1 year in ms.
              )}{' '}
              years
            </p>
            <p>
              <span className="font-semibold">Sex: </span>
              {screening.sex}
            </p>
            <p>
              <span className="font-semibold">Height: </span>
              {`${screening.height}cm`}
            </p>
            <p>
              <span className="font-semibold">Weight: </span>
              {`${screening.weight}kg`}
            </p>
          </div>
        </div>
      </section>
    </Modal>
  );
}
