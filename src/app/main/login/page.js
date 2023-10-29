'use client';

import { useState } from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import Password from '@/components/quiz/password';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [helperText, setHelperText] = useState('');

  async function login() {
    return null;
  }

  return (
    <main className="flex min-h-[calc(100vh-23rem)] items-center">
      <div className="mx-auto flex w-full max-w-md flex-col px-4 py-28 xs:px-9 sm:max-w-lg">
        <TextField
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          onClick={login}
          disabled={!password || !!helperText}
        >
          Login
        </Button>
      </div>
    </main>
  );
}
