import { useState } from 'react';
import { PaymentElement } from '@stripe/react-stripe-js';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { doc, updateDoc } from 'firebase/firestore';
import { useCookies } from 'next-client-cookies';
import { Button } from '@mui/material';
import Toast from '@/components/toast';
import { getBaseUrl } from '@/util/helpers';
import { db } from '@/util/firebase';
import { useAuth } from '@/util/hooks';

export default function PaymentWrapper({ address }) {
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false); // toast message
  const [isLoading, setLoading] = useState(false);
  const cookies = useCookies();
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const token = cookies.get('token');
    const email = cookies.get('email');

    /* Check that user is logged in. */
    if (!user) {
      setMessage('Please log in before making payment.');
      setShowMessage(true);
      setLoading(false);
      return;
    }

    /* Check that addresses are present. */
    const { address1, address3, postcode } = address;
    if (!address1 || !address3 || !postcode) {
      setMessage('Please fill out all required address fields.');
      setShowMessage(true);
      setLoading(false);
      return;
    }

    /* Get the users document ID from Firestore. */
    let docId;
    try {
      const idRes = await fetch(`/api/doc-id?email=${email}&token=${token}`);
      const idJson = await idRes.json();
      if (!idJson.success) console.log(idJson.error);
      docId = idJson.docId;
    } catch (err) {
      console.log('Error getting document ID: ', err);
      setMessage('There was an issue getting the document ID.');
      setShowMessage(true);
      setLoading(false);
      return;
    }

    /* Save address to Firestore. */
    try {
      await updateDoc(doc(db, 'users', docId), { address });
    } catch (err) {
      console.log('Error saving address: ', err);
      setMessage('There was an issue saving your address.');
      setShowMessage(true);
      setLoading(false);
      return;
    }

    /* Make a new card payment with Stripe. */
    const baseUrl = getBaseUrl();
    if (!stripe || !elements) return;
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: `${baseUrl}/signup/verify-identity` },
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
