'use client';

import { useState } from 'react';
import { useCookies } from 'next-client-cookies';
import { collection, query, where } from 'firebase/firestore';
import { doc, getDocs, setDoc } from 'firebase/firestore';
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

  /* Checks if email exists in Firestore. If not, then save it. */
  async function checkEmailExists(docId, email) {
    const users = collection(db, 'emails');
    const q = query(users, where('email', '==', email));
    const querySnapshot = await getDocs(q);
    let result;
    querySnapshot.forEach((doc) => {
      /* Required to iterate, not allowed to simply access first element. */
      /* Returns just one document at most since emails are unique. */
      result = {
        currentDocId: doc.id,
        isScreeningSaved: true,
        isAccountCreated: doc.data().isAccountCreated,
      };
    });
    if (result === undefined) {
      await setDoc(doc(db, 'emails', docId), {
        email,
        isAccountCreated: false,
      });
      result = {
        currentDocId: docId,
        isScreeningSaved: false,
        isAccountCreated: false,
      };
    }
    return result;
  }

  async function saveScreeningData() {
    const cookieAsString = cookies.get('screening');
    const cookie = JSON.parse(cookieAsString);
    cookie.dateCreated = new Date();
    const { email } = cookie;
    let docId = createDocId(cookie.lastName);
    try {
      const { currentDocId, isScreeningSaved, isAccountCreated } =
        await checkEmailExists(docId, email);
      docId = currentDocId; // updates docId to existing one from database
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
