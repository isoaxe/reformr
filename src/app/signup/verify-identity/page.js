'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';
import { LoadingButton } from '@mui/lab';
import { auth } from '@/util/firebase';
import { useAuth, useKeyPress, useRedirectNoUser } from '@/util/hooks';
import { STRIPE_PUBLIC_KEY } from '@/util/constants';

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

function VerifyButton({ stripePromise }) {
  const [stripe, setStripe] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  useKeyPress(handleClick);
  useRedirectNoUser(user);

  async function handleClick(event) {
    event?.preventDefault();
    setLoading(true);
    const fireToken = await auth.currentUser.getIdToken(true);
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fireToken }),
    };
    const response = await fetch('/api/identity/verification', options);
    const { clientSecret, err } = await response.json();
    if (err) return console.log(err); // backend error
    const { error } = await stripe.verifyIdentity(clientSecret); // stripe error
    if (error) {
      console.error('Error creating identity session: ', error);
      setLoading(false);
    } else {
      console.log('✅ Identity session created');
      router.push('/signup/medical/deep-dive');
    }
  }

  useEffect(() => {
    stripePromise.then(setStripe);
  }, [stripePromise]);

  return (
    <LoadingButton
      role="link"
      disabled={!stripe || !user}
      loading={isLoading}
      onClick={handleClick}
      variant="outlined"
      className="w-fit text-lg md:text-xl"
    >
      Verify Identity
    </LoadingButton>
  );
}

export default function VerifyIdentity() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-xl flex-col items-center">
      <h1 className="mb-10 text-center text-2xl font-semibold text-sky-600 sm:text-3xl md:mb-20">
        Verify your identity
      </h1>
      <VerifyButton stripePromise={stripePromise} />
    </main>
  );
}
