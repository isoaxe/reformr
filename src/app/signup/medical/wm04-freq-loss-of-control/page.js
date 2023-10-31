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

  useCookieState('medical', 'wm04_freq_loss_of_control', setAnswer);

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
        Do you ever feel like you have
        <span className="font-semibold"> lost control over what you eat</span>?
      </p>
      <RadioGroup
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        sx={{ mb: 3, width: 'fit-content' }}
      >
        <RadioOption label="All the time" />
        <RadioOption label="Every day" />
        <RadioOption label="Most days" />
        <RadioOption label="Occasionally" />
        <RadioOption label="Rarely" />
        <RadioOption label="Never" />
      </RadioGroup>
      <Button
        text="Ok"
        link="./wm05-extent-of-food-domination"
        state={{ wm04_freq_loss_of_control: answer }}
        isDisabled={!answer}
        quiz="medical"
      />
    </main>
  );
}
