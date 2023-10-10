'use client';

import { useState } from 'react';
import { MuiTelInput } from 'mui-tel-input';
import Button from '@/components/quiz/button';

/* Collect users mobile phone number. */
export default function PhoneNumber() {
  const [phone, setPhone] = useState('');

  const handleChange = (newValue) => setPhone(newValue);

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
      />
      <Button text="Ok" link="/screening/ws06-dob" />
    </main>
  );
}
