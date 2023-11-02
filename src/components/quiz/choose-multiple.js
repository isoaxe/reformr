'use client';

import { useEffect, useState } from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { Typography } from '@mui/material';
import Button from '@/components/quiz/button';
import { useCookieState } from '@/util/hooks';

/* Multiple choice question with multiple answers. Support for up to 12 answers. */
export default function ChooseMultiple(props) {
  const { heading, subheading = '', answerLabels } = props;
  const { questionId, nextPage } = props;
  const [answers, setAnswers] = useState({});
  const { A, B, C, D, E, F, G, H, I, J, K, L } = answers;
  const letters = 'ABCDEFGHIJKL';

  function handleChange(e) {
    setAnswers({ ...answers, [e.target.name]: e.target.checked });
  }

  useCookieState('medical', questionId, setAnswers, 100);

  useEffect(() => {
    /* Set starting state as { A: false, B: false ... }, i.e. false for all. */
    const newStartingState = {};
    answerLabels.forEach((_, idx) => {
      const key = letters[idx];
      newStartingState[key] = false;
    });
    setAnswers(newStartingState);
  }, [answerLabels]);

  function CheckboxOption({ name, checked, label }) {
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
      <h1 className="mb-6">
        {heading[0]}
        <span className="font-semibold"> {heading[1]} </span>
        {heading[2]}
      </h1>
      <h2 className="-mt-4 mb-6 text-lg text-slate-700 md:text-xl xl:text-2xl">
        {subheading}
      </h2>
      <FormGroup sx={{ mb: 3, width: 'fit-content' }}>
        {answerLabels.map((label, idx) => {
          const letter = letters[idx];
          return (
            <CheckboxOption
              name={letter}
              checked={answers[letter]}
              label={label}
              key={idx}
            />
          );
        })}
      </FormGroup>
      <Button
        text="Ok"
        link={'./' + nextPage}
        state={{ [questionId]: answers }}
        isDisabled={
          !A && !B && !C && !D && !E && !F && !G && !H && !I && !J && !K && !L
        }
        quiz="medical"
      />
    </main>
  );
}
