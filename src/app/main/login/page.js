'use client';

import { useState, useEffect } from 'react';
import { TextField, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import Password from '@/components/quiz/password';
import { useAuth } from '@/util/hooks';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [helperText, setHelperText] = useState('');
  const [isInvalidEmail, setInvalidEmail] = useState(false);
  const auth = useAuth();
  const router = useRouter();

  async function signIn() {
    const user = await auth.login(email, password);
    if (user) router.push('/signup/payments'); // TODO: redirect to dashboard
  }

  useEffect(() => {
    if (!/\S+@\S+\.\S+/.test(email)) setInvalidEmail(true);
    else setInvalidEmail(false);
  }, [email]);

  return (
    <main className="flex min-h-[calc(100vh-23rem)] items-center">
      <div className="mx-auto flex w-full max-w-md flex-col px-4 py-28 xs:px-9 sm:max-w-lg">
        <TextField
          variant="standard"
          label={
            <Typography className="text-lg md:text-xl xl:text-2xl">
              Email
            </Typography>
          }
          value={email}
          error={isInvalidEmail && !!email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 6 }}
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
          className="mt-16 w-fit text-lg md:text-xl"
          onClick={signIn}
          disabled={!password || !!helperText || isInvalidEmail}
        >
          Login
        </Button>
      </div>
    </main>
  );
}
