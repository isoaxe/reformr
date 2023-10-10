'use client';

import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@/components/quiz/button';

/* Collect the users sex as recorded at birth. */
export default function Sex() {
  const [sex, setSex] = useState('');

  return (
    <main className="mx-auto flex flex-col">
      <p className="mb-6">
        What is your <span className="font-semibold">sex at birth</span>?
      </p>
      <RadioGroup
        aria-labelledby="choose-sex-at-birth-label"
        name="choose-sex-at-birth"
        value={sex}
        onChange={(e) => setSex(e.target.value)}
        sx={{ mb: 3, width: 'fit-content' }}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel
          value="intersex"
          control={<Radio />}
          label="Intersex"
        />
      </RadioGroup>
      <Button text="Ok" link="/screening/ws08-height" />
    </main>
  );
}
