'use client';

import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { Button as CheckEmailButton } from '@mui/material';
import Button from '@/components/quiz/button';
import TextInput from '@/components/quiz/text-input';
import Toast from '@/components/toast';
import { useCookieState } from '@/util/hooks';
import { db } from '@/util/firebase';

/* Collect users email address. */
export default function Email() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isEmailChecked, setEmailChecked] = useState(false);
  const [isInvalid, setInvalid] = useState(true);
  const [showFailureToast, setShowFailureToast] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  useCookieState('screening', 'email', setEmail);
  useCookieState('screening', 'firstName', setFirstName);
  useCookieState('screening', 'lastName', setLastName);

  useEffect(() => {
    if (!/\S+@\S+\.\S+/.test(email)) setInvalid(true);
    else setInvalid(false);
    setEmailChecked(false);
  }, [email]);

  /* Show toast to confirm if email is ok based in whether account exists already. */
  async function checkAccountCreated() {
    const emailsRef = doc(db, 'emails', email);
    const emailSnap = await getDoc(emailsRef);
    let isAccountCreated = false;
    if (emailSnap.exists())
      isAccountCreated = emailSnap.data().isAccountCreated;
    if (isAccountCreated) setShowFailureToast(true);
    else {
      setShowSuccessToast(true);
      setEmailChecked(true);
    }
  }

  return (
    <main className="mx-auto flex max-w-4xl flex-col">
      <p className="mb-8">Thanks, {firstName}.</p>
      <p className="mb-4">
        What <span className="font-semibold">email address</span> can we reach
        you at? This is only to get in touch, not to send spam.
      </p>
      <p className="mb-8 text-lg text-slate-600 md:text-xl xl:text-2xl">
        (spam sucks)
      </p>
      <TextInput text={email} setText={setEmail} isError={isInvalid} />
      {/* Renders email checking button first. Replaced by usual one on success. */}
      {!isEmailChecked ? (
        <CheckEmailButton
          onClick={checkAccountCreated}
          variant="outlined"
          className="w-fit text-lg md:text-xl"
          disabled={isInvalid}
        >
          Check Email
        </CheckEmailButton>
      ) : (
        <Button
          text="Ok"
          link="/screening/ws05-phone-number"
          state={{ email }}
          isDisabled={isInvalid}
          quiz="screening"
        />
      )}
      <Toast
        message="An account for this email has already been created. Please login or use a different email."
        severity="warning"
        open={showFailureToast}
        setOpen={setShowFailureToast}
        duration={6}
      />
      <Toast
        message="This email is available."
        severity="success"
        open={showSuccessToast}
        setOpen={setShowSuccessToast}
      />
    </main>
  );
}
