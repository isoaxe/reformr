import { useState } from 'react';
import { PaymentElement } from '@stripe/react-stripe-js';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from '@mui/material';
import Toast from '@/components/toast';
import { getBaseUrl } from '@/util/helpers';

export default function PaymentWrapper() {
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false); // Snackbar toast message
  const [isLoading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  async function handleSubmit(event) {
    event.preventDefault();
    const baseUrl = getBaseUrl();
    if (!stripe || !elements) return;
    setLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: `${baseUrl}/signup/identity-verification` },
    });
    /* The code below only executes on error as redirect occurs on success. */
    if (error.type === 'card_error' || error.type === 'validation_error')
      setMessage(error.message);
    else setMessage('An unexpected error occured.');
    setShowMessage(true);
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
      <Toast
        message={message}
        severity="error"
        open={showMessage}
        setOpen={setShowMessage}
        duration={6}
      />
    </section>
  );
}
