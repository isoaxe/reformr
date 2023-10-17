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
  const [isDisabled, setDisabled] = useState(true);
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
    const cookieAsString = cookies.get('screening');
    const cookie = JSON.parse(cookieAsString);
    cookie.dateCreated = new Date();
    const { email } = cookie;
    let docId = createDocId(cookie.lastName);
    try {
      const { userDocId, isScreeningSaved, isAccountCreated } =
        await checkEmailExists(docId, email);
      docId = userDocId; // updates docId to existing one from database
      /* Overwrite user data only if no account has already been created. */
      /* Fine to overwrite data saved to Firestore before account creation. */
      if (!isAccountCreated) {
        await setDoc(doc(db, 'users', docId), {
          screening: cookie,
          dateAccountCreated: null,
        });
        if (isScreeningSaved)
          console.log(`Overwriting previous screening data for ${email}...`);
        else console.log(`Saving new screening data for ${email}...`);
      } else {
        console.log(`Account already created for ${email}...`);
        cookies.set('isAccountCreated', 'true', { sameSite: 'strict' });
      }
    } catch (err) {
      console.error('Error adding document: ', err);
    }
  }

  useEffect(() => {
    const weightInt = parseInt(weight); // was a string, convert to int
    if (weightInt < 50 || weightInt > 500) setDisabled(true);
    else setDisabled(false);
  }, [weight]);

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
          link="/screening"
          state={{ weight }}
          isDisabled={isDisabled} // enabled if weight is 50-500kg
          quiz="screening"
        />
      </div>
    </main>
  );
}
