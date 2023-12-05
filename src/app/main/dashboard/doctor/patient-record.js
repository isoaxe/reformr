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

  const wrapperStyle = 'my-2 flex flex-row'; // standard question and answer wrapper style

  function Question({ text }) {
    return <p className="mr-10 w-72 font-medium">{text}</p>;
  }

  function AnswerList({ answers }) {
    return (
      <ul>
        {answers?.map((answer, index) => (
          <li key={index} className="flex flex-row items-center">
            <div className="mr-2 h-1.5 w-1.5 rounded bg-sky-600"></div>
            <p>{answer}</p>
          </li>
        ))}
      </ul>
    );
  }

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
          <p className="max-w-md">{`${firstName} ${lastName} is a ${age} year old ${sex} who is attending for medical weight management. They have a BMI of ${bmi}. ${firstName}’s motivation for losing weight includes ${medical.wm01_what_motivates_you}.`}</p>
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-sky-600 md:text-2xl">
            Medical Records
          </h2>
          <div className={wrapperStyle}>
            <Question text="What motivates the patient?" />
            <AnswerList answers={medical.wm01_what_motivates_you} />
          </div>
          <div className={wrapperStyle}>
            <Question text="When was the patient last at their ideal weight?" />
            <p>{medical.wm02_when_last_ideal_weight}</p>
          </div>
          <div className={wrapperStyle}>
            <Question text="How does weight affect the patient?" />
            <ul>
              {Object.keys(medical.wm03_how_weight_affects ?? {}).map(
                (aspect, index) => (
                  <li key={index} className="flex flex-row items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded bg-sky-600"></div>
                    <p className="w-36">{aspect.split('_').join(' ')}:</p>
                    <p>{medical.wm03_how_weight_affects[aspect]} / 5</p>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>
    </Modal>
  );
}
