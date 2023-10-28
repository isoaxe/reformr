'use client';

import { useState } from 'react';
import { useCookies } from 'next-client-cookies';
import { useRouter } from 'next/navigation';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import Password from '@/components/quiz/password';
import Toast from '@/components/toast';
import { useCookieState, useAuth } from '@/util/hooks';

/* Immutable email field and password field for account creation. */
export default function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [helperText, setHelperText] = useState('');
  const [showFailure, setShowFailure] = useState(false);
  const cookies = useCookies();
  const auth = useAuth();
  const router = useRouter();

  useCookieState('screening', 'email', setEmail);

  async function createPatientAccount() {
    const token = cookies.get('token');
    const res = await fetch(
      `/api/user?email=${email}&password=${password}&token=${token}`
    );
    const json = await res.json();

    let user = null;
    if (json.success) user = await auth.signIn(email, password);
    if (user) router.push('/signup/payments');
    else setShowFailure(true);
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
