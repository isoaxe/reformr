'use client';

import { useState, useEffect } from 'react';
import { useCookies } from 'next-client-cookies';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import Button from '@/components/quiz/button';
import NumberInput from '@/components/quiz/number-input';
import { useCookieState } from '@/util/hooks';
import { db } from '@/util/firebase';

/* Collect weight of the user in kg as an integer. */
export default function Weight() {
  const [weight, setWeight] = useState('');
  const [nextPage, setNextPage] = useState('/');
  const [isDisabled, setDisabled] = useState(true);
  const [cookie, setCookie] = useState({});
  const [bmi, setBmi] = useState(null);
  const cookies = useCookies();

  useCookieState('screening', 'weight', setWeight);

  async function saveScreeningData() {
    try {
      /* Get docId from Firestore. */
      const { email } = cookie;
      const emailsRef = doc(db, 'emails', email);
      const emailSnap = await getDoc(emailsRef);
      const emailsData = emailSnap.data();
      const { docId } = emailsData; // get docId from Firestore

      /* Save BMI to Firestore but also as a separate cookie. */
      cookies.set('bmi', bmi, { sameSite: 'strict' });
      const updatedCookie = { ...cookie, bmi };
      /* Fine to overwrite data saved to Firestore before account creation. */
      await setDoc(doc(db, 'users', docId), {
        screening: updatedCookie,
        dateAccountCreated: null,
      });
    } catch (err) {
      console.error('Error saving screening data: ', err);
    }
  }

  useEffect(() => {
    const weightInt = parseInt(weight); // was a string, convert to int
    if (weightInt < 50 || weightInt > 500) setDisabled(true);
    else setDisabled(false);
  }, [weight]);

  useEffect(() => {
    /* Save existing cookie to state. */
    const cookieAsString = cookies.get('screening');
    const cookieAsJson = JSON.parse(cookieAsString);
    cookieAsJson.dateCreated = new Date();
    setCookie(cookieAsJson);
  }, [cookies]);

  useEffect(() => {
    /* Calculate BMI and select path based on this. */
    const { height } = cookie;
    const heightInMetres = height / 100;
    const updatedBmi = parseFloat((weight / heightInMetres ** 2).toFixed(2));
    setBmi(updatedBmi);
    if (updatedBmi < 27) setNextPage('/screening/bmi-low');
    else if (updatedBmi > 30) setNextPage('/screening/bmi-high');
    else setNextPage('/screening/bmi-mid');
  }, [cookie, weight]);

  return (
    <main className="mx-auto flex flex-col">
      <p className="mb-6">
        What is your <span className="font-semibold">current weight</span> in
        kilograms (kg)?
      </p>
      <NumberInput
        number={weight}
        setNumber={setWeight}
        isError={isDisabled}
        placeholder={'85'}
      />
      <div onClick={saveScreeningData}>
        <Button
          text="Ok"
          link={nextPage}
          state={{ weight }}
          isDisabled={isDisabled} // enabled if weight is 50-500kg
          quiz="screening"
        />
      </div>
    </main>
  );
}
