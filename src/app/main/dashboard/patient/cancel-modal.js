'use client';

import { Modal, Button } from '@mui/material';

export default function CancelModal({ open, setOpen }) {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <section className="mx-4 mt-20 flex max-w-lg flex-col justify-between rounded border-2 border-violet-700 bg-zinc-400 sm:mx-auto sm:w-full md:mt-40">
        <h2 className="mt-5 text-center text-2xl font-semibold text-red-800 md:text-3xl">
          Warning!
        </h2>
        <p className="mx-10 my-5 text-lg md:text-xl">
          This action cancels your subscription to the Reformr metabolic reset
          program. You will no longer be sent monthy deliveries and will lost
          access to the platform at the end of your current billing period.
        </p>
        <div className="mb-5 flex w-full flex-row justify-around">
          <Button
            variant="contained"
            className="w-40 bg-red-400 text-lg hover:bg-red-500 md:text-xl"
            color="error"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            className="w-40 bg-blue-400 text-lg  hover:bg-blue-500 md:text-xl"
          >
            Keep
          </Button>
        </div>
      </section>
    </Modal>
  );
}
