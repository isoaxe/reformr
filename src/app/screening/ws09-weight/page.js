'use client';

import { useState, useEffect } from 'react';
import { useCookies } from 'next-client-cookies';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import Button from '@/components/quiz/button';
import NumberInput from '@/components/quiz/number-input';
import { useCookieState } from '@/util/hooks';
import { createDocId } from '@/util/helpers';
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

  /* Checks if email exists in Firestore. If not, then save it. */
  async function checkEmailExists(docId, email) {
    const emailsRef = doc(db, 'emails', email);
    const emailSnap = await getDoc(emailsRef);
    if (emailSnap.exists()) {
      const emailsData = emailSnap.data();
      emailsData.isScreeningSaved = true;
      return emailsData;
    } else {
      const emailsData = {
        email,
        isAccountCreated: false,
        userDocId: docId,
      };
      await setDoc(doc(db, 'emails', email), emailsData);
      emailsData.isScreeningSaved = false;
      return emailsData;
    }
  }

  async function saveScreeningData() {
    try {
      const { lastName, email } = cookie;
      let docId = createDocId(lastName);
      const { userDocId, isScreeningSaved, isAccountCreated } =
        await checkEmailExists(docId, email);
      docId = userDocId; // updates docId to existing one from database
      /* Overwrite user data only if no account has already been created. */
      /* Fine to overwrite data saved to Firestore before account creation. */
      if (!isAccountCreated) {
        /* Save BMI to Firestore but also as a separate cookie. */
        cookies.set('bmi', bmi, { sameSite: 'strict' });
        const updatedCookie = { ...cookie, bmi };
        await setDoc(doc(db, 'users', docId), {
          screening: updatedCookie,
          dateAccountCreated: null,
        });
        if (isScreeningSaved)
          console.log(`Overwriting previous screening data for ${email}...`);
        else console.log(`Saving new screening data for ${email}...`);
      } else {
        console.log(`Account already created for ${email}...`);
      }
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
