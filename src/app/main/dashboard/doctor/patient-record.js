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

  const wrapperStyle =
    'flex flex-row items-center border-b border-slate-400 py-2'; // standard question and answer wrapper style

  function Question({ text }) {
    return <p className="mr-10 w-72 italic">{text}</p>;
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
      <div className="mx-auto mt-12 h-[90vh] w-full max-w-3xl overflow-y-auto rounded bg-slate-300 px-9 md:text-lg">
        <h1 className="mb-2 pt-4 text-center text-2xl font-semibold text-sky-600 md:text-3xl">
          Patient Record
        </h1>
        <section className="flex flex-row justify-between">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="w-16 font-semibold">Name: </p>
              <p>{`${firstName} ${lastName}`}</p>
            </div>
            <div className="flex flex-row">
              <p className="w-16 font-semibold">Phone: </p>
              <p>{phone}</p>
            </div>
            <div className="flex flex-row">
              <p className="w-16 font-semibold">Email: </p>
              <p>{email}</p>
            </div>
          </div>
          <div className="mx-8 flex flex-col">
            <div className="flex flex-row">
              <p className="w-12 font-semibold">DoB: </p>
              <p>{dob}</p>
            </div>
            <div className="flex flex-row">
              <p className="w-12 font-semibold">Age: </p>
              <p>{age} years</p>
            </div>
            <div className="flex flex-row">
              <p className="w-12 font-semibold">Sex: </p>
              <p>{sex}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="w-20 font-semibold">Height: </p>
              <p>{`${height}cm`}</p>
            </div>
            <div className="flex flex-row">
              <p className="w-20 font-semibold">Weight: </p>
              <p>{`${weight}kg`}</p>
            </div>
            <div className="flex flex-row">
              <p className="w-20 font-semibold">BMI: </p>
              <p>{bmi}</p>
            </div>
          </div>
        </section>
        <section className="my-10">
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
          <div className={wrapperStyle}>
            <Question text="How often does the patient lose control over what they eat?" />
            <p>{medical.wm04_freq_loss_of_control}</p>
          </div>
          <div className={wrapperStyle}>
            <Question text="To what extent does food dominate the patients life?" />
            <p>{medical.wm05_extent_food_dominates} / 10</p>
          </div>
          <div className={wrapperStyle}>
            <Question text="What weight loss techniques has the patient tried previously?" />
            <AnswerList answers={medical.wm06_weight_loss_techniques} />
          </div>
          <div className={wrapperStyle}>
            <Question text="Did the patient see lasting results?" />
            <p>{medical.wm07_lasting_results}</p>
          </div>
          <div className={wrapperStyle}>
            <Question text="How healthy is the patients diet?" />
            <p>{medical.wm08_how_healthy} / 10</p>
          </div>
          <div className={wrapperStyle}>
            <Question text="How many times a week does the patient eat out or order in?" />
            <p>{medical.wm09_freq_eat_out}</p>
          </div>
          <div className={wrapperStyle}>
            <Question text="How fit is the patient?" />
            <p>{medical.wm10_physical_fitness} / 10</p>
          </div>
          <div className={wrapperStyle}>
            <Question text="How many hours of moderate physical activity does the patient do per week?" />
            <p>{medical.wm11_amount_of_exercise}</p>
          </div>
          <div className={wrapperStyle}>
            <Question text="What health vices does the patient have?" />
            <AnswerList answers={medical.wm12_health_vices} />
          </div>
          <div className={wrapperStyle}>
            <Question text="Has the patient ever been diagnosed with a thyroid condition?" />
            <AnswerList answers={medical.wm13_thyroid_activity} />
          </div>
          <div className={wrapperStyle}>
            <Question text="Has the patient or someone in their family ever been diagnosed with a thyroid tumor?" />
            <AnswerList answers={medical.wm14_thyroid_tumor} />
          </div>
          <div className={wrapperStyle}>
            <Question text="The patient has been diagnosed with the following that relate to conditions of the liver, pancreas gallstones and kidneys:" />
            <AnswerList answers={medical.wm15_health_ailments} />
          </div>
          <div className={wrapperStyle}>
            <Question text="The patient has been diagnosed with the following that relate to blood sugar levels:" />
            <AnswerList answers={medical.wm16_sugar_ailments} />
          </div>
          <div className={wrapperStyle}>
            <Question text="What other ailments has the patient been diagnosed with?" />
            <AnswerList answers={medical.wm17_other_ailments} />
          </div>
          <div className={wrapperStyle}>
            <Question text="What mental health issues is the patient suffering from?" />
            <AnswerList answers={medical.wm18_mental_health} />
          </div>
          <div className={wrapperStyle}>
            <Question text="Has the patient ever been diagnosed with any other medical conditions? If so, what were they?" />
            <p>{medical.wm19_other_medical.response}</p>
            {medical.wm19_other_medical.response === 'Yes' && (
              <p className="ml-1.5">- {medical.wm19_other_medical.moreInfo}</p>
            )}
          </div>
          <div className={wrapperStyle}>
            <Question text="Does the patient currently take any medications or suppliments?" />
            <AnswerList answers={medical.wm20_medications} />
          </div>
          <div className={wrapperStyle}>
            <Question text="Does the patient have any allergies? If so, what were they?" />
            <p>{medical.wm21_allergies.response}</p>
            {medical.wm21_allergies.response === 'Yes' && (
              <p className="ml-1.5">- {medical.wm21_allergies.moreInfo}</p>
            )}
          </div>
          <div className={wrapperStyle}>
            <Question text="What weight loss procedures has the patient had in the past?" />
            <AnswerList answers={medical.wm22_past_procedures} />
          </div>
        </section>
      </div>
    </Modal>
  );
}
