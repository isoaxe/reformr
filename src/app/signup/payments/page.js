'use client';

import { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentWrapper from './payment-wrapper';
import Address from './address';
import Spinner from '@/components/spinner';
import { STRIPE_PUBLIC_KEY } from '@/util/constants';
import { useAuth, useRedirectNoUser } from '@/util/hooks';
import { auth } from '@/util/firebase';

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

export default function Payments() {
  const [options, setOptions] = useState({});
  const [address, setAddress] = useState({
    address1: '',
    address2: '',
    address3: '',
    postcode: '',
  });
  const { user } = useAuth();

  useRedirectNoUser(user);

  useEffect(() => {
    /* Fetch the client secret from the server and use to set options for Elements. */
    async function getElementsOptions() {
      const fireToken = await auth.currentUser.getIdToken(true);
      const fetchOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fireToken }),
      };
      const response = await fetch('/api/payments/initialise', fetchOptions);
      const { subscription, error } = await response.json();
      if (error) console.log('Error creating subscription: ', error);
      else {
        const { clientSecret } = subscription;
        const appearance = { theme: 'stripe', labels: 'floating' };
        const options = { clientSecret, appearance };
        setOptions(options);
      }
    }
    if (user) getElementsOptions();
  }, [user]);

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
      ) : (
        <Spinner />
      )}
    </main>
  );
}
