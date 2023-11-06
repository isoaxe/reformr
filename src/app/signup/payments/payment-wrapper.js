import { Button } from '@mui/material';
import { PaymentElement } from '@stripe/react-stripe-js';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { BASE_URL } from '@/util/urls';

export default function PaymentWrapper() {
  const stripe = useStripe();
  const elements = useElements();

  async function handleSubmit(event) {
    event.preventDefault();
    if (!stripe || !elements) return;
    await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: `${BASE_URL}/signup/identity-verification` },
    });
  }

  return (
    <section>
      <PaymentElement />
      <Button
        onClick={handleSubmit}
        variant="outlined"
        className="mt-4 w-full md:text-lg"
      >
        Submit
      </Button>
    </section>
  );
}
