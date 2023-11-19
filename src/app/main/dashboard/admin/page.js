'use client';

import { useState, useEffect } from 'react';
import { TextField, Typography } from '@mui/material';
import TextInput from '@/components/quiz/text-input';
import Password from '@/components/quiz/password';

export default function AdminDashboard() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [helperText, setHelperText] = useState('');
  const [isInvalidEmail, setInvalidEmail] = useState(false);

  useEffect(() => {
    if (!/\S+@\S+\.\S+/.test(email)) setInvalidEmail(true);
    else setInvalidEmail(false);
  }, [email]);

  return (
    <main className="mx-auto flex min-h-[calc(100vh-23rem)] w-full max-w-xl flex-col px-4 xs:px-9">
      <h1 className="py-4 text-center text-2xl font-semibold text-sky-600 md:py-8 md:text-4xl">
        Create a new user
      </h1>
      <div className="flex flex-col xs:flex-row">
        <TextInput text={firstName} setText={setFirstName} label="First Name" />
        <div className="hidden w-10 xs:block"></div>
        <TextInput text={lastName} setText={setLastName} label="Last Name" />
      </div>
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
        sx={{ mb: 2 }}
        InputProps={{ className: 'text-xl md:text-2xl xl:text-3xl' }}
      />
      <Password
        password={password}
        setPassword={setPassword}
        helperText={helperText}
        setHelperText={setHelperText}
      />
    </main>
  );
}
