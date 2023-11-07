'use client';

import { useState, useEffect } from 'react';
import { useCookies } from 'next-client-cookies';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentWrapper from './payment-wrapper';
import { STRIPE_PUBLIC_KEY } from '@/util/constants';
import { useCookieState } from '@/util/hooks';
import Address from './address';

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

export default function Payments() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [options, setOptions] = useState({});
  const [address, setAddress] = useState({});
  const cookies = useCookies();

  useCookieState('screening', 'firstName', setFirstName);
  useCookieState('screening', 'lastName', setLastName);

  useEffect(() => {
    const name = `${firstName} ${lastName}`;
    const email = cookies.get('email');
    const token = cookies.get('token');
    /* Fetch the client secret from the server and use to set options for Elements. */
    async function getElementsOptions() {
      const response = await fetch('/api/payments/initialise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, token }),
      });
      const subscription = await response.json();
      const { clientSecret } = subscription;
      const appearance = { theme: 'stripe', labels: 'floating' };
      const options = { clientSecret, appearance };
      setOptions(options);
    }
    if (firstName && email && token) getElementsOptions();
  }, [firstName, lastName, cookies]);

  return (
    <main className="mx-auto min-h-[calc(100vh-7rem)] w-full max-w-xl">
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
