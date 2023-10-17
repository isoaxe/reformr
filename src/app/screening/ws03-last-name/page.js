'use client';

import { useState } from 'react';
import Button from '@/components/quiz/button';
import TextInput from '@/components/quiz/text-input';
import { useCookieState } from '@/util/hooks';

/* Collect last name of the user. */
export default function LastName() {
  const [lastName, setLastName] = useState('');

  useCookieState('screening', 'lastName', setLastName);

  return (
    <main className="mx-auto flex flex-col">
      <p className="mb-6">
        And your <span className="font-semibold">last name</span>?
      </p>
      <TextInput text={lastName} setText={setLastName} />
      <Button
        text="Ok"
        link="/screening/ws04-email"
        state={{ lastName }}
        isDisabled={!lastName}
        quiz="screening"
      />
    </main>
  );
}
