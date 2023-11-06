import { PaymentElement } from '@stripe/react-stripe-js';

export default function PaymentWrapper() {
  return (
    <section>
      <PaymentElement />
    </section>
  );
}
