'use client';

import { useState } from 'react';
import Button from '@/components/quiz/button';
import TextInput from '@/components/quiz/text-input';

/* Collect last name of the user. */
export default function Email() {
  const [email, setEmail] = useState('');

  return (
    <main className="mx-auto flex max-w-4xl flex-col">
      <p className="mb-8">Thanks!</p>
      <p className="mb-4">
        What <span className="font-semibold">email address</span> can we reach
        you at? This is only to get in touch, not to send spam.
      </p>
      <p className="mb-8 text-lg text-slate-600 md:text-xl xl:text-2xl">
        &#40;spam sucks&#41;
      </p>
      <TextInput text={email} setText={setEmail} />
      <Button text="Ok" link="/screening/ws05-phone-number" />
    </main>
  );
}
