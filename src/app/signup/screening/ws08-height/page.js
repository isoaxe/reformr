'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/quiz/button';
import NumberInput from '@/components/quiz/number-input';
import { useCookieState } from '@/util/hooks';

/* Collect height of the user in cm as an integer. */
export default function Height() {
  const [height, setHeight] = useState('');
  const [isInvalid, setInvalid] = useState(true);

  useCookieState('screening', 'height', setHeight);

  useEffect(() => {
    const heightInt = parseInt(height); // was a string, convert to int
    if (heightInt < 100 || heightInt > 300) setInvalid(true);
    else setInvalid(false);
  }, [height]);

  return (
    <main className="mx-auto flex flex-col">
      <p className="mb-6">
        What is your <span className="font-semibold">height</span> in
        centimetres (cm)?
      </p>
      <NumberInput
        number={height}
        setNumber={setHeight}
        isError={isInvalid}
        placeholder={'165'}
      />
      <Button
        text="Ok"
        link="./ws09-weight"
        state={{ height }}
        isDisabled={isInvalid || !height} // enabled if height is 1-3m
        quiz="screening"
      />
    </main>
  );
}
