'use client';

import { useState, useEffect } from 'react';
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import { useCookies } from 'next-client-cookies';
import Button from '@/components/quiz/button';
import Captcha from '@/components/captcha';
import { useCookieState } from '@/util/hooks';

/* Collect users mobile phone number. */
export default function PhoneNumber() {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isInvalid, setInvalid] = useState(true);
  const [token, setToken] = useState(null);
  const cookies = useCookies();

  useCookieState('screening', 'phone', setPhone);
  useCookieState('screening', 'email', setEmail);
  useCookieState('screening', 'firstName', setFirstName);
  useCookieState('screening', 'lastName', setLastName);

  const handleChange = (newValue) => setPhone(newValue);

  useEffect(() => {
    if (matchIsValidTel(phone)) setInvalid(false);
    else setInvalid(true);
  }, [phone]);

  useEffect(() => {
    if (token) {
      cookies.set('token', token, { expires: 90, sameSite: 'strict' });
      cookies.set('email', email, { expires: 90, sameSite: 'strict' });
    }
  }, [cookies, token, email]);

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
        error={isInvalid && phone.length > 3}
      />
      <Button
        text="Ok"
        link="./ws06-dob"
        state={{ phone }}
        isDisabled={isInvalid || !token}
        quiz="screening"
      />
      {email && (
        <Captcha
          firstName={firstName}
          lastName={lastName}
          email={email}
          setToken={setToken}
        />
      )}
    </main>
  );
}
