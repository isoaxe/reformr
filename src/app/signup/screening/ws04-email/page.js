'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import { doc, getDoc } from 'firebase/firestore';
import { LoadingButton } from '@mui/lab';
import TextInput from '@/components/quiz/text-input';
import Toast from '@/components/toast';
import { useCookieState, useKeyPress } from '@/util/hooks';
import { setQuizCookie } from '@/util/helpers';
import { db } from '@/util/firebase';

/* Collect patients email address. */
export default function Email() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isInvalid, setInvalid] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [showFailureToast, setShowFailureToast] = useState(false);
  const cookies = useCookies();
  const router = useRouter();

  useCookieState('screening', 'email', setEmail);
  useCookieState('screening', 'firstName', setFirstName);
  useKeyPress(nextPage);

  useEffect(() => {
    if (!/\S+@\S+\.\S+/.test(email)) setInvalid(true);
    else setInvalid(false);
  }, [email]);

  /* Show error toast if account exists already, navigate to next page if not. */
  async function nextPage() {
    setLoading(true);
    setQuizCookie('screening', { email }, cookies);
    const emailsRef = doc(db, 'emails', email);
    const emailSnap = await getDoc(emailsRef);
    let isAccountCreated = false;
    if (emailSnap.exists())
      isAccountCreated = emailSnap.data().isAccountCreated;
    if (isAccountCreated) setShowFailureToast(true);
    else router.push('./ws05-phone-number');
    setLoading(false);
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
      <TextInput
        text={email}
        setText={setEmail}
        isError={isInvalid && !!email}
      />
      <LoadingButton
        onClick={nextPage}
        variant="outlined"
        className="w-fit !text-lg md:!text-xl"
        disabled={isInvalid}
        loading={isLoading}
      >
        Ok
      </LoadingButton>
      <Toast
        message="An account for this email has already been created. Please login or use a different email."
        severity="warning"
        open={showFailureToast}
        setOpen={setShowFailureToast}
        duration={6}
      />
    </main>
  );
}
