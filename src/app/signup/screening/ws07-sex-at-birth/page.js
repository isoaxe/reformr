'use client';

import { useState } from 'react';
import { Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import Button from '@/components/quiz/button';
import { useCookieState } from '@/util/hooks';

/* Collect the patients sex as recorded at birth. */
export default function SexAtBirth() {
  const [sex, setSex] = useState('');

  useCookieState('screening', 'sex', setSex);

  const FormLabel = ({ label }) => (
    <Typography className="mt-1 text-lg md:text-xl xl:text-2xl">
      {label}
    </Typography>
  );

  return (
    <main className="mx-auto flex flex-col">
      <p className="mb-6">
        What was your <span className="font-semibold">sex at birth</span>?
      </p>
      <RadioGroup
        aria-labelledby="choose-sex-at-birth-label"
        name="choose-sex-at-birth"
        value={sex}
        onChange={(e) => setSex(e.target.value)}
        sx={{ mb: 3, width: 'fit-content' }}
      >
        <FormControlLabel
          value="female"
          control={<Radio />}
          label={<FormLabel label="Female" />}
        />
        <FormControlLabel
          value="male"
          control={<Radio />}
          label={<FormLabel label="Male" />}
        />
        <FormControlLabel
          value="intersex"
          control={<Radio />}
          label={<FormLabel label="Intersex" />}
        />
      </RadioGroup>
      <Button
        text="Ok"
        link="./ws08-height"
        state={{ sex }}
        isDisabled={!sex}
        quiz="screening"
      />
    </main>
  );
}
