'use client';

import { useEffect, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
import Button from '@/components/quiz/button';
import { useCookieState } from '@/util/hooks';

/* Collect the users date of birth. */
export default function DateOfBirth() {
  const [birthday, setBirthday] = useState(null); // moment object
  const [dob, setDob] = useState(''); // string to store in cookie

  useCookieState('screening', 'dob', setDob);

  useEffect(() => {
    /* Check that user has finished inputting date. */
    const dobToCheck = moment(birthday).format()?.slice(0, 10);
    const firstTwoDigits = dobToCheck?.slice(0, 2);
    /* Validate by checking if date is in the 20th or 21st centuries. */
    if (firstTwoDigits === '19' || firstTwoDigits === '20') setDob(dobToCheck);
  }, [birthday]);

  useEffect(() => {
    if (dob) setBirthday(moment(dob, 'YYYY-MM-DD'));
  }, [dob]);

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
      <Button
        text="Ok"
        link="/screening/ws07-sex-at-birth"
        state={{ dob }}
        quiz="screening"
      />
    </main>
  );
}
