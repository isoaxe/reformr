'use client';

import { useState } from 'react';
import { Slider } from '@mui/material';
import Button from '@/components/quiz/button';
import { useCookieState } from '@/util/hooks';

/* Single question with a 1-10 range response. */
export default function Range(props) {
  const { heading, subheading = '', questionId, nextPage } = props;
  const [answer, setAnswer] = useState(0);

  useCookieState('medical', questionId, setAnswer);

  return (
    <main className="m-auto max-w-2xl">
      <p className="mb-2">
        {heading[0]}
        <span className="font-semibold"> {heading[1]} </span>
        {heading[2]}
      </p>
      <p className="text-lg text-slate-700 md:text-xl xl:text-2xl">
        {subheading}
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
        link={'./' + nextPage}
        state={{ [questionId]: answer }}
        isDisabled={!answer}
        quiz="medical"
      />
    </main>
  );
}
