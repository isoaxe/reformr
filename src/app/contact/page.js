'use client';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Contact() {
  return (
    <main>
      <section className="mx-auto my-20 flex max-w-3xl flex-col px-4 xs:px-9 sm:my-28">
        <h1 className="text-4xl font-extrabold xs:text-5xl md:text-6xl">
          Contact Us
        </h1>
        <p className="my-4 text-lg font-light sm:text-xl md:my-8 md:text-2xl">
          Thanks for getting in touch. Please provide as much information as
          possible and we will get back to you within 2 business days.
        </p>
        <div className="my-2 flex flex-col sm:flex-row">
          <TextField label="First Name" className="w-full sm:w-1/2" />
          <div className="h-4 w-4 sm:w-4">
            {/* Spacer between Name fields */}
          </div>
          <TextField label="Last Name" className="w-full sm:w-1/2" />
        </div>
        <TextField label="Email" sx={{ my: 1 }} />
        <TextField label="Message" sx={{ mt: 1, mb: 2 }} multiline rows={6} />
        <Button
          variant="contained"
          className="w-32 bg-blue-600 py-2 hover:bg-blue-500"
        >
          Submit
        </Button>
      </section>
    </main>
  );
}
