'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';

export default function Payments() {
  const router = useRouter();

  return (
    <main className="min-h-screen">
      <h1 className="mt-16 p-4 text-2xl md:p-8 md:text-4xl">
        This is the <span className="font-bold text-blue-600">Payments</span>{' '}
        page
      </h1>
      {/* Temporary button to show continuity to signup flow. Can be removed after payments and identity verification has been implemented. */}
      <Button
        variant="outlined"
        className="mx-4 mt-40 text-lg md:mx-8 md:text-xl"
        onClick={() => router.push('/signup/medical/deep-dive')}
      >
        Proceed to Medical Quiz
      </Button>
    </main>
  );
}
