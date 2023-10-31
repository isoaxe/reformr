'use client';

import { useState } from 'react';
import { Slider } from '@mui/material';
import Button from '@/components/quiz/button';
import { useCookieState } from '@/util/hooks';

/* Single question with a 1-10 range response. */
export default function ExtentOfFoodDomination() {
  const [answer, setAnswer] = useState(0);

  useCookieState('medical', 'wm05_extent_of_food_domination', setAnswer);

  return (
    <main className="m-auto w-full max-w-2xl">
      <p className="mb-2">
        To what extent would you say that food
        <span className="font-semibold"> dominates your life</span>?
      </p>
      <p className="mb-14 text-lg text-slate-700 md:text-xl xl:text-2xl">
        Rank from 1 (minimum impact) to 10 (maximum impact).
      </p>
      <div className="mb-3 flex flex-row items-center justify-between">
        <Slider
          valueLabelDisplay="on"
          min={1}
          max={10}
          marks
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>
      <div className="invisible h-14">This is a spacer - for layout only</div>
      <Button
        text="Ok"
        link="./wm06-weight-loss-techniques"
        state={{ wm05_extent_of_food_domination: answer }}
        isDisabled={!answer}
        quiz="medical"
      />
    </main>
  );
}
