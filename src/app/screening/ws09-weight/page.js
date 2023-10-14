'use client';

import { useState } from 'react';
import { useCookies } from 'next-client-cookies';
import { doc, setDoc } from 'firebase/firestore';
import Button from '@/components/quiz/button';
import NumberInput from '@/components/quiz/number-input';
import { useCookieState } from '@/util/hooks';
import { createDocId } from '@/util/helpers';
import { db } from '@/util/firebase';

/* Collect weight of the user in kg as an integer. */
export default function Weight() {
  const [weight, setWeight] = useState('');
  const cookies = useCookies();

  useCookieState('screening', 'weight', setWeight);

  async function saveScreeningData() {
    const cookieAsString = cookies.get('screening');
    const cookie = JSON.parse(cookieAsString);
    const { email } = cookie;
    let docId = createDocId(cookie.lastName);
    try {
      const res = await fetch(`/api/user?email=${email}`);
      const { isAccountCreated, isEmailMatch, currentDocId } = await res.json();
      if (isEmailMatch) docId = currentDocId;
      /* Overwrite user data only if no account has already been created. */
      /* Fine to overwrite data saved to Firestore before account creation. */
      if (!isAccountCreated) {
        await setDoc(doc(db, 'users', docId), {
          screening: cookie,
          isAccountCreated: false,
        });
        if (isEmailMatch)
          console.log(`Overwriting previous screening data for ${email}...`);
      } else {
        console.log(`Account already created for ${email}...`);
        cookies.set('isAccountCreated', 'true', { sameSite: 'strict' });
      }
    } catch (err) {
      console.error('Error adding document: ', err);
    }
  }

  return (
    <main className="mx-auto flex flex-col">
      <p className="mb-6">
        What is your <span className="font-semibold">current weight</span> in
        kilograms (kg)?
      </p>
      <NumberInput number={weight} setNumber={setWeight} placeholder={'85'} />
      <div onClick={saveScreeningData}>
        <Button
          text="Ok"
          link="/screening"
          state={{ weight }}
          quiz="screening"
        />
      </div>
    </main>
  );
}
