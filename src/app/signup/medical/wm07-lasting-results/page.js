'use client';

import { useState } from 'react';
import { Radio, RadioGroup, Typography, FormControlLabel } from '@mui/material';
import Button from '@/components/quiz/button';
import { useCookieState } from '@/util/hooks';

/* Multiple choice question with a single answer. */
export default function FreqLossOfControl() {
  const [answer, setAnswer] = useState('');

  useCookieState('medical', 'wm07_lasting_results', setAnswer);

  function RadioOption({ label }) {
    return (
      <FormControlLabel
        value={label}
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
      <p className="mb-6">
        Did you see <span className="font-semibold">lasting results</span>?
      </p>
      <RadioGroup
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        sx={{ mb: 3, width: 'fit-content' }}
      >
        <RadioOption label="Yes" />
        <RadioOption label="Sort of" />
        <RadioOption label="Nope" />
      </RadioGroup>
      <Button
        text="Ok"
        link="./hope-and-change"
        state={{ wm07_lasting_results: answer }}
        isDisabled={!answer}
        quiz="medical"
      />
    </main>
  );
}
