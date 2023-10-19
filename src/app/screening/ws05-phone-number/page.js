'use client';

import { useState, useEffect } from 'react';
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import { useCookies } from 'next-client-cookies';
import Button from '@/components/quiz/button';
import Toast from '@/components/toast';
import { useCookieState } from '@/util/hooks';

/* Collect users mobile phone number. */
export default function PhoneNumber() {
  const [phone, setPhone] = useState('');
  const [isDisabled, setDisabled] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const cookies = useCookies();

  useCookieState('screening', 'phone', setPhone);

  const handleChange = (newValue) => setPhone(newValue);

  useEffect(() => {
    if (matchIsValidTel(phone)) setDisabled(false);
    else setDisabled(true);
  }, [phone]);

  useEffect(() => {
    if (cookies.get('isAccountCreated') === 'true') setShowToast(true);
  }, [cookies]);

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
      <Toast
        message="An account for this email has already been created. Please login or use a different email."
        severity="warning"
        open={showToast}
        setOpen={setShowToast}
        duration={10}
      />
    </main>
  );
}
