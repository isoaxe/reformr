'use client';

import { useState } from 'react';
import { TextField } from '@mui/material';
import Button from '@/components/quiz/button';

/* Collect user first name. */
export default function FirstName() {
  const [firstName, setFirstName] = useState('');

  return (
    <main className="mx-auto flex flex-col">
      <p className="mb-6">
        Let&apos;s start with your{' '}
        <span className="font-semibold">first name</span>.
      </p>
      <TextField
        variant="standard"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        sx={{ mb: 3 }}
        InputProps={{ className: 'text-xl md:text-2xl xl:text-3xl' }}
      />
      <Button text="Ok" link="/screening/ws03-last-name" />
    </main>
  );
}
