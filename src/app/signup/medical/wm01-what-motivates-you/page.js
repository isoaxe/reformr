'use client';

import { useState } from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { Typography } from '@mui/material';
import Button from '@/components/quiz/button';
import { useCookieState } from '@/util/hooks';

/* Multiple choice question with multiple answers. */
export default function WhatMotivatesYou() {
  const [answers, setAnswers] = useState({
    A: false,
    B: false,
    C: false,
    D: false,
    E: false,
    F: false,
    G: false,
  });

  const { A, B, C, D, E, F, G } = answers;

  function handleChange(e) {
    setAnswers({ ...answers, [e.target.name]: e.target.checked });
  }

  useCookieState('medical', 'wm01_what_motivates_you', setAnswers);

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
        sx={{ mb: 3, width: 'fit-content' }}
      >
        <FormControlLabel
          value="physical-appearance"
          name="A"
          checked={A}
          onChange={handleChange}
          control={<Checkbox />}
          label={<FormLabel label="Physical appearance" />}
        />
        <FormControlLabel
          value="physical-health"
          name="B"
          checked={B}
          onChange={handleChange}
          control={<Checkbox />}
          label={<FormLabel label="Physical health" />}
        />
        <FormControlLabel
          value="mental-health"
          name="C"
          checked={C}
          onChange={handleChange}
          control={<Checkbox />}
          label={<FormLabel label="Mental health" />}
        />
        <FormControlLabel
          value="feel-better-day-to-day"
          name="D"
          checked={D}
          onChange={handleChange}
          control={<Checkbox />}
          label={<FormLabel label="Feeling better day-to-day" />}
        />
        <FormControlLabel
          value="family-friends"
          name="E"
          checked={E}
          onChange={handleChange}
          control={<Checkbox />}
          label={<FormLabel label="Family / friends" />}
        />
        <FormControlLabel
          value="work"
          name="F"
          checked={F}
          onChange={handleChange}
          control={<Checkbox />}
          label={<FormLabel label="Work" />}
        />
        <FormControlLabel
          value="other"
          name="G"
          checked={G}
          onChange={handleChange}
          control={<Checkbox />}
          label={<FormLabel label="Other" />}
        />
      </FormGroup>
      <Button
        text="Ok"
        link="./wm02-when-last-ideal-weight"
        state={{ wm01_what_motivates_you: answers }}
        isDisabled={!A && !B && !C && !D && !E && !F && !G}
        quiz="medical"
      />
    </main>
  );
}
