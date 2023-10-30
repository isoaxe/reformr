'use client';

import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Button from '@/components/quiz/button';
import { useCookieState } from '@/util/hooks';

/* Multiple choice question with a single answer. */
export default function WhenLastIdealWeight() {
  const [answer, setAnswer] = useState('');

  useCookieState('screening', 'wm02_when_last_ideal_weight', setAnswer);

  const FormLabel = ({ label }) => (
    <Typography className="mt-1 text-lg md:text-xl xl:text-2xl">
      {label}
    </Typography>
  );

  return (
    <main className="mx-auto flex flex-col">
      <p className="mb-6">
        When were you last at your{' '}
        <span className="font-semibold">ideal weight</span>?
      </p>
      <RadioGroup
        aria-labelledby="when-last-ideal-weight-label"
        name="when-last-ideal-weight"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        sx={{ mb: 3, width: 'fit-content' }}
      >
        <FormControlLabel
          value="less_than_1_year_ago"
          control={<Radio />}
          label={<FormLabel label="Less than 1 year ago" />}
        />
        <FormControlLabel
          value="1_to_5_years_ago"
          control={<Radio />}
          label={<FormLabel label="1-5 years ago" />}
        />
        <FormControlLabel
          value="6_to_10_years_ago"
          control={<Radio />}
          label={<FormLabel label="6-10 years ago" />}
        />
        <FormControlLabel
          value="more_than_10_years_ago"
          control={<Radio />}
          label={<FormLabel label="More than 10 years ago" />}
        />
      </RadioGroup>
      <Button
        text="Ok"
        link="./wm03-how-weight-affects"
        state={{ wm02_when_last_ideal_weight: answer }}
        isDisabled={!answer}
        quiz="medical"
      />
    </main>
  );
}
