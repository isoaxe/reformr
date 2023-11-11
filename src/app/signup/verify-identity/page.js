'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { STRIPE_PUBLIC_KEY } from '@/util/constants';

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

function VerifyButton({ stripePromise }) {
  const [stripe, setStripe] = useState(null);

  async function handleClick(event) {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: '12345' }),
    };
    const response = await fetch('/api/identity', options);
    const { clientSecret } = await response.json();
    const { error } = await stripe.verifyIdentity(clientSecret);
    if (error) console.error('Error creating identity session: ', error);
    else console.log('✅ Identity session created');
  }

  useEffect(() => {
    stripePromise.then(setStripe);
  }, [stripePromise]);

  return (
    <button role="link" disabled={!stripe} onClick={handleClick}>
      Verify
    </button>
  );
}

export default function VerifyIdentity() {
  return (
    <main className="min-h-[calc(100vh-7rem)]">
      <h1 className="p-4 text-2xl md:p-8 md:text-4xl">
        This is the
        <span className="font-bold text-blue-600"> identity verification </span>
        page
      </h1>
      <VerifyButton stripePromise={stripePromise} />
    </main>
  );
}
