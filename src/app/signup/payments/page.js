'use client';

import { useState, useEffect } from 'react';
import { useCookies } from 'next-client-cookies';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentWrapper from './payment-wrapper';
import { STRIPE_PUBLIC_KEY } from '@/util/constants';
import Address from './address';

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

export default function Payments() {
  const [options, setOptions] = useState({});
  const [address, setAddress] = useState();
  const cookies = useCookies();

  useEffect(() => {
    const email = cookies.get('email');
    /* Fetch the client secret from the server and use to set options for Elements. */
    async function getElementsOptions() {
      const response = await fetch('/api/payments/customer', {
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
      <h1 className="mb-4 text-center text-2xl font-semibold text-sky-600 sm:text-3xl">
        Complete your payment
      </h1>
      <Address address={address} setAddress={setAddress} />
      {Object.keys(options).length ? (
        <Elements stripe={stripePromise} options={options}>
          <PaymentWrapper address={address} />
        </Elements>
      ) : null}
    </main>
  );
}
