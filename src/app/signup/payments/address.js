import { useState } from 'react';
import { TextField } from '@mui/material';

export default function Address() {
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [address3, setAddress3] = useState('');
  const [postcode, setPostcode] = useState('');

  const AddressField = ({ text, setText, label }) => (
    <TextField
      variant="standard"
      value={text}
      onChange={(e) => setText(e.target.value)}
      label={label}
      sx={{ width: '100%', mb: 1 }}
      InputProps={{ className: 'text-lg md:text-xl xl:text-2xl' }}
    />
  );

  return (
    <div className="my-8 w-full">
      <AddressField label="Address 1" text={address1} setText={setAddress1} />
      <AddressField label="Address 2" text={address2} setText={setAddress2} />
      <AddressField label="Address 3" text={address3} setText={setAddress3} />
      <AddressField label="Zip Code" text={postcode} setText={setPostcode} />
    </div>
  );
}
