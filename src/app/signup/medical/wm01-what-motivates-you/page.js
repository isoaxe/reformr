'use client';

import { useState } from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { Typography } from '@mui/material';
import Button from '@/components/quiz/button';
import { useCookieState } from '@/util/hooks';

/* Multiple choice question with multiple answers. */
export default function WhatMotivatesYou() {
  const [answer, setAnswer] = useState({});

  useCookieState('medical', 'wm01-what-motivates-you', setAnswer);

  const FormLabel = ({ label }) => (
    <Typography className="mt-1 text-lg md:text-xl xl:text-2xl">
      {label}
    </Typography>
  );

  return (
    <main className="mx-auto flex flex-col">
      <p className="mb-6">
        So...what <span className="font-semibold">motivates you</span> to lose
        weight?
      </p>
      <FormGroup
        aria-labelledby="choose-motivation-label"
        name="choose-motivation"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        sx={{ mb: 3, width: 'fit-content' }}
      >
        <FormControlLabel
          value="physical-appearance"
          control={<Checkbox />}
          label={<FormLabel label="Physical appearance" />}
        />
        <FormControlLabel
          value="physical-health"
          control={<Checkbox />}
          label={<FormLabel label="Physical health" />}
        />
        <FormControlLabel
          value="mental-health"
          control={<Checkbox />}
          label={<FormLabel label="Mental health" />}
        />
        <FormControlLabel
          value="feel-better-day-to-day"
          control={<Checkbox />}
          label={<FormLabel label="Feeling better day-to-day" />}
        />
        <FormControlLabel
          value="family-friends"
          control={<Checkbox />}
          label={<FormLabel label="Family / friends" />}
        />
        <FormControlLabel
          value="work"
          control={<Checkbox />}
          label={<FormLabel label="Work" />}
        />
        <FormControlLabel
          value="other"
          control={<Checkbox />}
          label={<FormLabel label="Other" />}
        />
      </FormGroup>
      <Button
        text="Ok"
        link="./ws08-height"
        state={{ answer }}
        isDisabled={!answer}
        quiz="screening"
      />
    </main>
  );
}
