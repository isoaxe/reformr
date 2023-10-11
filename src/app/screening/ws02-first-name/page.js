'use client';

import { useState } from 'react';
import Button from '@/components/quiz/button';
import TextInput from '@/components/quiz/text-input';
import { useCookieState } from '@/util/hooks';

/* Collect first name of the user. */
export default function FirstName() {
  const [firstName, setFirstName] = useState('');

  useCookieState('screening', 'firstName', setFirstName);

  return (
    <main className="mx-auto flex flex-col">
      <p className="mb-6">
        Let&apos;s start with your{' '}
        <span className="font-semibold">first name</span>.
      </p>
      <TextInput text={firstName} setText={setFirstName} />
      <Button
        text="Ok"
        link="/screening/ws03-last-name"
        state={{ firstName }}
      />
    </main>
  );
}
