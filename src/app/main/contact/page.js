'use client';

import { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import { TextField, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import Toast from '@/components/toast';

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [helpType, setHelpType] = useState('');
  const [message, setMessage] = useState('');
  const [state, handleSubmit] = useForm('xjvqpzde'); // Formspree form ID
  const [showSuccess, setShowSuccess] = useState(false); // Snackbar toast message

  const helpOptions = [
    'Issue with my order or delivery',
    'Medical support',
    'Careers at Reformr',
    'Media enquiries',
    'Learn more about Reformr',
    'Following up from consultation',
    'Partnering with Reformr',
    'Something else',
  ];

  /* Dropdown menu that allows user to select type of help required. */
  function HelpSelect() {
    return (
      <Box sx={{ my: 1 }}>
        <FormControl fullWidth>
          <InputLabel id="help-select-label">How can we help you?</InputLabel>
          <Select
            labelId="help-select-label"
            id="help-select"
            name="Help Type:"
            value={helpType}
            label="How can we help you?"
            onChange={(e) => setHelpType(e.target.value)}
          >
            {helpOptions.map((option, idx) => (
              <MenuItem value={option} key={idx}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    );
  }

  useEffect(() => {
    if (state.succeeded) {
      setFirstName('');
      setLastName('');
      setEmail('');
      setHelpType('');
      setMessage('');
      setShowSuccess(true);
    }
  }, [state.succeeded]);

  return (
    <main>
      <section className="mx-auto my-20 max-w-3xl px-4 xs:px-9 sm:my-28">
        <h1 className="text-4xl font-extrabold xs:text-5xl md:text-6xl">
          Contact Us
        </h1>
        <p className="my-4 text-lg font-light sm:text-xl md:my-8 md:text-2xl">
          Thanks for getting in touch. Please provide as much information as
          possible and we will get back to you within 2 business days.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="my-2 flex flex-col sm:flex-row">
            <TextField
              label="First Name"
              name="First Name:"
              value={firstName}
              className="w-full sm:w-1/2"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <div className="h-4 w-4 sm:w-4">
              {/* Spacer between Name fields */}
            </div>
            <TextField
              label="Last Name"
              name="Last Name:"
              value={lastName}
              className="w-full sm:w-1/2"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <TextField
            label="Email"
            name="Email:"
            value={email}
            sx={{ my: 1 }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <HelpSelect />
          <TextField
            label="Message"
            name="Message:"
            value={message}
            sx={{ mt: 1, mb: 2 }}
            onChange={(e) => setMessage(e.target.value)}
            multiline
            rows={6}
          />
          <LoadingButton
            variant="contained"
            type="submit"
            loading={state.submitting}
            className="w-32 bg-blue-600 py-2 hover:bg-blue-500"
          >
            Submit
          </LoadingButton>
        </form>
        <Toast
          message="Message sent!"
          severity="success"
          open={showSuccess}
          setOpen={setShowSuccess}
        />
      </section>
    </main>
  );
}
