'use client';

import { useState } from 'react';
import Button from '@/components/quiz/button';
import TextInput from '@/components/quiz/text-input';

/* Collect last name of the user. */
export default function LastName() {
  const [lastName, setLastName] = useState('');

  return (
    <main className="mx-auto flex flex-col">
      <p className="mb-6">
        And your <span className="font-semibold">last name?</span>.
      </p>
      <TextInput text={lastName} setText={setLastName} />
      <Button text="Ok" link="/screening/ws04-email" />
    </main>
  );
}
