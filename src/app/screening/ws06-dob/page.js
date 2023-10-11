'use client';

import { useEffect, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
import Button from '@/components/quiz/button';

/* Collect the users date of birth. */
export default function DateOfBirth() {
  const [birthday, setBirthday] = useState(null); // moment object
  const [dob, setDob] = useState(''); // string to store in cookie

  useEffect(() => {
    setDob(moment(birthday).format()?.slice(0, 10));
  }, [birthday]);

  return (
    <main className="mx-auto flex max-w-4xl flex-col">
      <p className="mb-4">
        What is your <span className="font-semibold">date of birth</span>?
      </p>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          value={birthday}
          onChange={(newValue) => setBirthday(newValue)}
          format="DD/MM/YYYY"
          sx={{ mb: 3 }}
        />
      </LocalizationProvider>
      <Button text="Ok" link="/screening/ws07-sex-at-birth" />
    </main>
  );
}
