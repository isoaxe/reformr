'use client';

import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
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
