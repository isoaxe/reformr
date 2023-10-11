'use client';

import { useState } from 'react';
import Button from '@/components/quiz/button';
import NumberInput from '@/components/quiz/number-input';
import { useCookieState } from '@/util/hooks';

/* Collect weight of the user in kg as an integer. */
export default function Weight() {
  const [weight, setWeight] = useState('');

  useCookieState('screening', 'weight', setWeight);

  return (
    <main className="mx-auto flex flex-col">
      <p className="mb-6">
        What is your <span className="font-semibold">current weight</span> in
        kilograms (kg)?
      </p>
      <NumberInput number={weight} setNumber={setWeight} placeholder={'85'} />
      <Button text="Ok" link="/screening" state={{ weight }} quiz="screening" />
    </main>
  );
}
