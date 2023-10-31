'use client';

import { useState } from 'react';
import { Slider } from '@mui/material';
import Button from '@/components/quiz/button';
import { useCookieState } from '@/util/hooks';

/* Single question with a 1-10 range response. */
export default function HowHealthy() {
  const [answer, setAnswer] = useState(0);

  useCookieState('medical', 'wm08_how_healthy', setAnswer);

  return (
    <main className="m-auto max-w-2xl">
      <p className="mb-2">
        In general, how <span className="font-semibold">healthy</span> would you
        say your current diet is?
      </p>
      <p className="text-lg text-slate-700 md:text-xl xl:text-2xl">
        Rank from 1 (least healthy) to 10 (most healthy).
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
        link="./wm09-freq-eat-out"
        state={{ wm08_how_healthy: answer }}
        isDisabled={!answer}
        quiz="medical"
      />
    </main>
  );
}
