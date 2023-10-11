'use client';

import { useState } from 'react';
import Button from '@/components/quiz/button';
import NumberInput from '@/components/quiz/number-input';
import { useCookieState } from '@/util/hooks';

/* Collect height of the user in cm as an integer. */
export default function Height() {
  const [height, setHeight] = useState('');

  useCookieState('screening', 'height', setHeight);

  return (
    <main className="mx-auto flex flex-col">
      <p className="mb-6">
        What is your <span className="font-semibold">height</span> in
        centimetres (cm)?
      </p>
      <NumberInput number={height} setNumber={setHeight} placeholder={'165'} />
      <Button text="Ok" link="/screening/ws09-weight" state={{ height }} />
    </main>
  );
}
