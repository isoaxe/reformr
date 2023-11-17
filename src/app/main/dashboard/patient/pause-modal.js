'use client';

import { useState } from 'react';
import { Modal, Button } from '@mui/material';

export default function PauseModal(props) {
  const [isLoading, setLoading] = useState(false);
  const { open, setOpen, subId, email } = props;

  async function pauseSub() {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ subId, email }),
    };
    setLoading(true);
    // TODO: Add token from firebase auth to request.
    const res = await fetch('/api/payments/pause-sub', options);
    const data = await res.json();
    if (data.success) {
      console.log('Subscription paused for one month.');
      setOpen(false);
    } else console.log('Error pausing subscription: ', data.error);
    setLoading(false);
  }

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <section className="mx-4 mt-20 flex max-w-lg flex-col justify-between rounded border-2 border-violet-700 bg-zinc-400 sm:mx-auto sm:w-full md:mt-40">
        <h2 className="mt-5 text-center text-2xl font-semibold text-blue-800 md:text-3xl">
          Notice!
        </h2>
        <p className="mx-8 mb-10 mt-5 text-lg md:text-xl">
          This action pauses your subscription to the Reformr metabolic reset
          program for one month. We will skip your next delivery and resume the
          following month. You won&apos;t be charged for the skipped delivery.
        </p>
        <div className="mb-5 flex w-full flex-row justify-around">
          <Button
            variant="outlined"
            className="w-40 text-lg md:text-xl"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
          <Button
            variant="contained"
            className="w-44 bg-blue-500 text-lg  hover:bg-blue-600 md:text-xl"
            onClick={pauseSub}
            disabled={isLoading}
          >
            Skip Month
          </Button>
        </div>
      </section>
    </Modal>
  );
}
