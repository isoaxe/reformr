'use client';

import { useState, useEffect } from 'react';
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import Button from '@/components/quiz/button';
import { useCookieState } from '@/util/hooks';

/* Collect users mobile phone number. */
export default function PhoneNumber() {
  const [phone, setPhone] = useState('');
  const [isDisabled, setDisabled] = useState(true);

  useCookieState('screening', 'phone', setPhone);

  const handleChange = (newValue) => setPhone(newValue);

  useEffect(() => {
    if (matchIsValidTel(phone)) setDisabled(false);
    else setDisabled(true);
  }, [phone]);

  return (
    <main className="mx-auto flex flex-col">
      <p className="mb-8">
        What&apos;s your <span className="font-semibold">mobile number</span>?
      </p>
      <MuiTelInput
        value={phone}
        onChange={handleChange}
        placeholder="020 123 4567"
        defaultCountry="NZ"
        flagSize="medium"
        variant="standard"
        sx={{ mb: 3 }}
        forceCallingCode
        onlyCountries={['NZ', 'AU']}
        InputProps={{ className: 'text-xl md:text-2xl xl:text-3xl' }}
        error={isDisabled && phone.length > 3}
      />
      <Button
        text="Ok"
        link="/screening/ws06-dob"
        state={{ phone }}
        isDisabled={isDisabled}
        quiz="screening"
      />
    </main>
  );
}
