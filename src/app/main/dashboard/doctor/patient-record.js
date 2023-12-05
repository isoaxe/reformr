'use client';

import { useState, useEffect } from 'react';
import { Modal } from '@mui/material';

/* Presents patient screening and medical data to the doctor. */
export default function PatientRecord({ open, setOpen, fireDocId }) {
  const [screening, setScreening] = useState({});
  const [medical, setMedical] = useState({});
  const [age, setAge] = useState(0);
  const { firstName, lastName, email, phone, dob, sex, height, weight, bmi } =
    screening;

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

  useEffect(() => {
    if (dob) {
      const age = Math.floor(
        (new Date() - new Date(dob)) / 31557600000 // 1 year in ms.
      );
      setAge(age);
    }
  }, [dob]);

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <section className="mx-auto mt-12 h-[90vh] w-full max-w-5xl rounded bg-slate-300 px-9 md:text-lg">
        <h1 className="mb-2 pt-4 text-center text-2xl font-semibold text-sky-600 md:text-3xl">
          Patient Record
        </h1>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <p>
              <span className="font-semibold">Name: </span>
              {`${firstName} ${lastName}`}
            </p>
            <p>
              <span className="font-semibold">Phone: </span>
              {phone}
            </p>
            <p>
              <span className="font-semibold">DoB: </span>
              {dob}
            </p>
            <p>
              <span className="font-semibold">Email: </span>
              {email}
            </p>
          </div>
          <div className="mx-10 flex flex-col">
            <p>
              <span className="font-semibold">Age: </span>
              {age} years
            </p>
            <p>
              <span className="font-semibold">Sex: </span>
              {sex}
            </p>
            <p>
              <span className="font-semibold">Height: </span>
              {`${height}cm`}
            </p>
            <p>
              <span className="font-semibold">Weight: </span>
              {`${weight}kg`}
            </p>
          </div>
        </div>
      </section>
    </Modal>
  );
}
