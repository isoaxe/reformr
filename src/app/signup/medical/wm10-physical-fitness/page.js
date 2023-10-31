'use client';

import { useState } from 'react';
import { Slider } from '@mui/material';
import Button from '@/components/quiz/button';
import { useCookieState } from '@/util/hooks';

/* Single question with a 1-10 range response. */
export default function PhysicalFitness() {
  const [answer, setAnswer] = useState(0);

  useCookieState('medical', 'wm10_physical_fitness', setAnswer);

  return (
    <main className="m-auto max-w-2xl">
      <p className="mb-2">
        How would you rate your
        <span className="font-semibold"> physical fitness</span> on a scale of 1
        to 10?
      </p>
      <p className="text-lg text-slate-700 md:text-xl xl:text-2xl">
        Rank from 1 (worst) to 10 (best).
      </p>
      <div className="my-16 flex flex-row items-center justify-between">
        <Slider
          valueLabelDisplay="on"
          min={1}
          max={10}
          marks
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>
      <Button
        text="Ok"
        link="./wm11-amount-of-exercise"
        state={{ wm10_physical_fitness: answer }}
        isDisabled={!answer}
        quiz="medical"
      />
    </main>
  );
}
