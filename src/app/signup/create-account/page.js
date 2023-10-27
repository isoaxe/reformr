'use client';

import { useState } from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import Password from '@/components/quiz/password';
import { useCookieState, useAuth } from '@/util/hooks';

/* Immutable email field and password field for account creation. */
export default function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [helperText, setHelperText] = useState('');
  const auth = useAuth();

  useCookieState('screening', 'email', setEmail);

  async function createPatientAccount() {
    const res = await fetch(`/api/user?email=${email}&password=${password}`);
    const json = await res.json();
    if (json.success) await auth.signIn(email, password);
  }

  return (
    <main className="flex w-full justify-center">
      <section className="flex flex-col">
        <TextField
          variant="standard"
          value={email}
          disabled={true}
          sx={{ mb: 8 }}
          InputProps={{ className: 'text-xl md:text-2xl xl:text-3xl' }}
        />
        <Password
          password={password}
          setPassword={setPassword}
          helperText={helperText}
          setHelperText={setHelperText}
        />
        <Button
          variant="outlined"
          className="mt-8 w-fit text-lg md:text-xl"
          onClick={createPatientAccount}
          disabled={!password || !!helperText}
        >
          Create Account
        </Button>
      </section>
    </main>
  );
}
