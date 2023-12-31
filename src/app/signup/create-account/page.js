'use client';

import { useState } from 'react';
import { useCookies } from 'next-client-cookies';
import { useRouter } from 'next/navigation';
import { TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Password from '@/components/quiz/password';
import Toast from '@/components/toast';
import { useCookieState, useAuth } from '@/util/hooks';

/* Immutable email field and password field for account creation. */
export default function CreateAccount() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [helperText, setHelperText] = useState('');
  const [showFailure, setShowFailure] = useState(false);
  const cookies = useCookies();
  const { login } = useAuth();
  const router = useRouter();

  useCookieState('screening', 'email', setEmail);
  useCookieState('screening', 'firstName', setFirstName);
  useCookieState('screening', 'lastName', setLastName);
  useCookieState('screening', 'phone', setPhone);

  async function createPatientAccount() {
    setLoading(true);
    const name = `${firstName} ${lastName}`;
    if (!name || !phone || !email) return;
    const captchaToken = cookies.get('token');
    const options = {
      method: 'POST',
      body: JSON.stringify({ name, phone, email, password, captchaToken }),
      headers: { 'content-type': 'application/json' },
    };
    const res = await fetch('/api/users/patient', options);
    const { error } = await res.json();

    let user = null;
    if (!error) user = await login(email, password);
    if (user) router.push('/signup/payments');
    else {
      setShowFailure(true);
      setLoading(false);
    }
  }

  return (
    <main className="flex w-full justify-center">
      <section className="flex flex-col">
        <TextField
          variant="standard"
          value={email}
          disabled={true}
          sx={{ mb: 6 }}
          InputProps={{ className: 'text-xl md:text-2xl xl:text-3xl' }}
        />
        <Password
          password={password}
          setPassword={setPassword}
          helperText={helperText}
          setHelperText={setHelperText}
          isFocused={true}
        />
        <LoadingButton
          variant="outlined"
          className="mt-16 w-fit text-lg md:text-xl"
          onClick={createPatientAccount}
          disabled={!password || !!helperText}
          loading={isLoading}
        >
          Create Account
        </LoadingButton>
        <Toast
          message="There was an issue when creating your account. Please try again or send a message via the contact page."
          severity="error"
          open={showFailure}
          setOpen={setShowFailure}
          duration={6}
        />
      </section>
    </main>
  );
}
