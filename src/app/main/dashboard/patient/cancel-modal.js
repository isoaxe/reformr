'use client';

import { useState } from 'react';
import { Modal, Button } from '@mui/material';

export default function CancelModal(props) {
  const [isLoading, setLoading] = useState(false);
  const { open, setOpen, setSubActive, subId, email } = props;

  async function cancelSub() {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ subId, email }),
    };
    setLoading(true);
    // TODO: Add token from firebase auth to request.
    const res = await fetch('/api/payments/cancel-sub', options);
    const data = await res.json();
    if (data.success) {
      console.log('Subscription cancelled.');
      setSubActive(false);
      setOpen(false);
    } else console.log('Error cancelling subscription: ', data.error);
    setLoading(false);
  }

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <section className="mx-4 mt-20 flex max-w-lg flex-col justify-between rounded border-2 border-violet-700 bg-zinc-400 sm:mx-auto sm:w-full md:mt-40">
        <h2 className="mt-5 text-center text-2xl font-semibold text-red-800 md:text-3xl">
          Warning!
        </h2>
        <p className="mx-10 mb-10 mt-5 text-lg md:text-xl">
          This action cancels your subscription to the Reformr metabolic reset
          program. You will no longer be sent monthy deliveries and will lose
          access to the platform at the end of your current billing period.
        </p>
        <div className="mb-5 flex w-full flex-row justify-around">
          <Button
            variant="outlined"
            className="w-40 text-lg md:text-xl"
            onClick={() => setOpen(false)}
            disabled={isLoading}
          >
            Close
          </Button>
          <Button
            variant="contained"
            className="w-44 bg-red-500 text-lg hover:bg-red-600 md:text-xl"
            onClick={cancelSub}
            disabled={isLoading}
          >
            Cancel Sub
          </Button>
        </div>
      </section>
    </Modal>
  );
}
