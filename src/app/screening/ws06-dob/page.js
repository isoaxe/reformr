'use client';

import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@/components/quiz/button';

/* Collect the users date of birth. */
export default function DateOfBirth() {
  const [dob, setDob] = useState(null);

  return (
    <main className="mx-auto flex max-w-4xl flex-col">
      <p className="mb-4">
        What is your <span className="font-semibold">date of birth</span>?
      </p>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          value={dob}
          onChange={(newValue) => setDob(newValue)}
          format="DD/MM/YYYY"
          sx={{ mb: 3 }}
        />
      </LocalizationProvider>
      <Button text="Ok" link="/screening/ws07-sex-at-birth" />
    </main>
  );
}
