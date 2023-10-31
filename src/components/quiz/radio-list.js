'use client';

import { useState } from 'react';
import { Radio, RadioGroup, Typography, FormControlLabel } from '@mui/material';
import Button from '@/components/quiz/button';
import { useCookieState } from '@/util/hooks';

/* Choose a single answer from a list. */
export default function RadioList(props) {
  const { heading, subheading = '', answerLabels } = props;
  const { questionId, nextPage } = props;
  const [answer, setAnswer] = useState('');

  useCookieState('medical', questionId, setAnswer);

  function RadioOption({ label }) {
    return (
      <FormControlLabel
        value={label} // value saved can be the same as label
        control={<Radio />}
        label={
          <Typography className="mt-1 text-lg md:text-xl xl:text-2xl">
            {label}
          </Typography>
        }
      />
    );
  }

  return (
    <main className="mx-auto flex max-w-2xl flex-col">
      <h1 className="mb-6">
        {heading[0]}
        <span className="font-semibold"> {heading[1]} </span>
        {heading[2]}
      </h1>
      <h2 className="-mt-4 mb-6 text-lg text-slate-700 md:text-xl xl:text-2xl">
        {subheading}
      </h2>
      <RadioGroup
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        sx={{ mb: 3, width: 'fit-content' }}
      >
        {answerLabels.map((label, idx) => (
          <RadioOption key={idx} label={label} />
        ))}
      </RadioGroup>
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
