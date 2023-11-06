'use client';

import { useState, useEffect } from 'react';
import { useCookies } from 'next-client-cookies';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentWrapper from './payment-wrapper';
import { STRIPE_PUBLIC_KEY } from '@/util/constants';

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

export default function Payments() {
  const [options, setOptions] = useState({});
  const cookies = useCookies();

  useEffect(() => {
    const email = cookies.get('email');
    /* Fetch the client secret from the server and use to set options for Elements. */
    async function getElementsOptions() {
      const response = await fetch('/api/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const subscription = await response.json();
      const { clientSecret } = subscription;
      const appearance = { theme: 'stripe', labels: 'floating' };
      const options = { clientSecret, appearance };
      setOptions(options);
    }
    getElementsOptions();
  }, [cookies]);

  return (
    <main className="mx-auto min-h-[calc(100vh-8rem)] w-full max-w-xl">
      <h1 className="mb-4 text-center font-semibold text-sky-600">
        Complete your payment
      </h1>
      {Object.keys(options).length ? (
        <Elements stripe={stripePromise} options={options}>
          <PaymentWrapper />
        </Elements>
      ) : null}
    </main>
  );
}
