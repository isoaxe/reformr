'use client';

import { useState } from 'react';
import { TextField } from '@mui/material';
import Password from '@/components/quiz/password';
import { useCookieState } from '@/util/hooks';

/* Immutable email field and password field for account creation.  */
export default function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useCookieState('screening', 'email', setEmail);

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
        <Password password={password} setPassword={setPassword} />
      </section>
    </main>
  );
}
