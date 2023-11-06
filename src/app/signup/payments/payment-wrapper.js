import { useState } from 'react';
import { PaymentElement } from '@stripe/react-stripe-js';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from '@mui/material';
import { BASE_URL } from '@/util/urls';

export default function PaymentWrapper() {
  const [message, setMessage] = useState('');
  const [isLoading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  async function handleSubmit(event) {
    event.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: `${BASE_URL}/signup/identity-verification` },
    });
    if (error.type === 'card_error' || error.type === 'validation_error')
      setMessage(error.message);
    else setMessage('An unexpected error occured.');
    setLoading(false);
  }

  return (
    <section>
      <PaymentElement />
      <Button
        onClick={handleSubmit}
        variant="outlined"
        className="mt-4 w-full md:text-lg"
        disabled={isLoading || !stripe || !elements}
      >
        Submit
      </Button>
    </section>
  );
}
