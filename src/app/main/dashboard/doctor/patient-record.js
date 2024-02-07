'use client';

import { useState, useEffect } from 'react';
import { Modal, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { makeGetRequest } from '@/util/helpers';
import { useAuth } from '@/util/hooks';
import { auth } from '@/util/firebase';

/* Presents patient screening and medical data to the doctor. */
export default function PatientRecord({ open, setOpen, fireDocId }) {
  const [screening, setScreening] = useState({});
  const [medical, setMedical] = useState({});
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState('');
  const [age, setAge] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const { user } = useAuth();
  const { firstName, lastName, email, phone, dob, sex, height, weight, bmi } =
    screening;

  const wrapperStyle =
    'flex flex-row items-center border-b border-slate-400 py-2'; // standard question and answer wrapper style

  async function saveNote() {
    setLoading(true);
    const fireToken = await auth.currentUser.getIdToken();
    const doctor = user.displayName;
    const reqBody = { noteText: note, docId: fireDocId, doctor, fireToken };
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reqBody),
    };
    const res = await fetch('/api/users/patient/notes', options);
    const { error } = await res.json();
    if (error) console.log('Error saving note: ', error);
    else {
      setNotes([...notes, { noteText: note, doctor }]);
      setNote('');
    }
    setLoading(false);
  }

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

  function NoteList({ notes }) {
    return (
      <ul className="max-w-lg">
        {notes?.map((noteData, index) => {
          const { noteText, doctor, dateCreated } = noteData;
          const dateObject = new Date(dateCreated?._seconds * 1000);
          const date = dateObject.toDateString().slice(4);
          const time = dateObject.toLocaleTimeString().slice(0, 5);
          return (
            <li key={index} className="my-5">
              <p>{noteText}</p>
              <div className="flex flex-row justify-between text-sm text-slate-500">
                <p className="mr-5">Dr. {doctor}</p>
                <p>{dateCreated ? `${date} at ${time}` : 'Just now'}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  useEffect(() => {
    async function getPatientRecord() {
      const url = `/api/medical?docId=${fireDocId}`;
      const data = await makeGetRequest(url);
      const { error } = data;
      if (error) console.log('Error getting patient record: ', { error });
      else {
        setScreening(data.screening);
        setMedical(data.medical);
        setNotes(data.notes ?? []);
      }
    }
    if (user && fireDocId) getPatientRecord();
  }, [user, fireDocId]);

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
        <h1 className="my-5 text-center text-2xl font-light text-slate-500 md:text-3xl">
          Patient Record
        </h1>
        <h2 className="my-2 text-xl font-semibold text-sky-600 md:text-2xl">
          Patient Info
        </h2>
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
        <h2 className="mt-10 text-xl font-semibold text-sky-600 md:text-2xl">
          Medical Records
        </h2>
        {medical ? (
          <section>
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
              <p>{medical.wm19_other_medical?.response}</p>
              {medical.wm19_other_medical?.response === 'Yes' && (
                <p className="ml-1.5">
                  - {medical.wm19_other_medical.moreInfo}
                </p>
              )}
            </div>
            <div className={wrapperStyle}>
              <Question text="Does the patient currently take any medications or suppliments?" />
              <AnswerList answers={medical.wm20_medications} />
            </div>
            <div className={wrapperStyle}>
              <Question text="Does the patient have any allergies? If so, what are they?" />
              <p>{medical.wm21_allergies?.response}</p>
              {medical.wm21_allergies?.response === 'Yes' && (
                <p className="ml-1.5">- {medical.wm21_allergies.moreInfo}</p>
              )}
            </div>
            <div className={wrapperStyle}>
              <Question text="What weight loss procedures has the patient had in the past?" />
              <AnswerList answers={medical.wm22_past_procedures} />
            </div>
          </section>
        ) : (
          <p className="mt-3 text-slate-700">Medical records not added yet.</p>
        )}
        <h2 className="mt-10 text-xl font-semibold text-sky-600 md:text-2xl">
          Doctors Notes
        </h2>
        <NoteList notes={notes} />
        <section className="mb-10 flex flex-col">
          <TextField
            multiline
            value={note}
            onChange={(e) => setNote(e.target.value)}
            minRows={5}
            className="!my-5 w-full max-w-lg"
          />
          <LoadingButton
            variant="outlined"
            className="w-36"
            onClick={saveNote}
            loading={isLoading}
          >
            Save Note
          </LoadingButton>
        </section>
      </div>
    </Modal>
  );
}
