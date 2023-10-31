'use client';

import { useState } from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { Typography } from '@mui/material';
import Button from '@/components/quiz/button';
import { useCookieState } from '@/util/hooks';

/* Multiple choice question with multiple answers. */
export default function WeightLossTechniques() {
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

  useCookieState('medical', 'wm06_weight_loss_techniques', setAnswers);

  function CheckboxOption({ state, label }) {
    const name = Object.keys(state)[0];
    const checked = state[name];

    return (
      <FormControlLabel
        name={name}
        checked={checked}
        onChange={handleChange}
        control={<Checkbox />}
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
        If you have tried to lose weight before,
        <span className="font-semibold"> what did you try</span>?
      </p>
      <FormGroup
        aria-labelledby="choose-motivation-label"
        name="choose-motivation"
        sx={{ mb: 3, width: 'fit-content' }}
      >
        <CheckboxOption state={{ A }} label="Diet" />
        <CheckboxOption state={{ B }} label="Exercise" />
        <CheckboxOption state={{ C }} label="Fasting" />
        <CheckboxOption state={{ D }} label="Meal replacement shakes" />
        <CheckboxOption state={{ E }} label="Prescription medication" />
        <CheckboxOption state={{ F }} label="Surgery" />
        <CheckboxOption state={{ G }} label="None of the above" />
      </FormGroup>
      <Button
        text="Ok"
        link="./wm07-lasting-results"
        state={{ wm06_weight_loss_techniques: answers }}
        isDisabled={!A && !B && !C && !D && !E && !F && !G}
        quiz="medical"
      />
    </main>
  );
}
