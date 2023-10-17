'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/quiz/button';
import TextInput from '@/components/quiz/text-input';
import { useCookieState } from '@/util/hooks';

/* Collect users email address. */
export default function Email() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isDisabled, setDisabled] = useState(true);

  useCookieState('screening', 'email', setEmail);
  useCookieState('screening', 'firstName', setName);

  useEffect(() => {
    if (!/\S+@\S+\.\S+/.test(email)) setDisabled(true);
    else setDisabled(false);
  }, [email]);

  return (
    <main className="mx-auto flex max-w-4xl flex-col">
      <p className="mb-8">Thanks, {name}.</p>
      <p className="mb-4">
        What <span className="font-semibold">email address</span> can we reach
        you at? This is only to get in touch, not to send spam.
      </p>
      <p className="mb-8 text-lg text-slate-600 md:text-xl xl:text-2xl">
        (spam sucks)
      </p>
      <TextInput text={email} setText={setEmail} isError={isDisabled} />
      <Button
        text="Ok"
        link="/screening/ws05-phone-number"
        state={{ email }}
        isDisabled={isDisabled}
        quiz="screening"
      />
    </main>
  );
}
