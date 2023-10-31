'use client';

import { useState } from 'react';
import { Radio, RadioGroup, Typography, FormControlLabel } from '@mui/material';
import Button from '@/components/quiz/button';
import { useCookieState } from '@/util/hooks';

/* Multiple choice question with a single answer. */
export default function FreqEatOut() {
  const [answer, setAnswer] = useState('');

  useCookieState('medical', 'wm09_freq_eat_out', setAnswer);

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
        How many times a week do you
        <span className="font-semibold"> eat out or order in</span>?
      </p>
      <RadioGroup
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        sx={{ mb: 3, width: 'fit-content' }}
      >
        <RadioOption label="Multiple times a day" />
        <RadioOption label="At least once a day" />
        <RadioOption label="Between 4-6 days" />
        <RadioOption label="Between 2-3 days" />
        <RadioOption label="Once or less" />
      </RadioGroup>
      <Button
        text="Ok"
        link="./wm10-physical-fitness"
        state={{ wm09_freq_eat_out: answer }}
        isDisabled={!answer}
        quiz="medical"
      />
    </main>
  );
}
