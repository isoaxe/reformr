import { useState } from 'react';
import { AddressInput } from '@/components/quiz/address-input';

export default function Address() {
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [address3, setAddress3] = useState('');
  const [postcode, setPostcode] = useState('');

  return (
    <div className="my-8 w-full">
      <AddressInput label="Address 1" text={address1} setText={setAddress1} />
      <AddressInput label="Address 2" text={address2} setText={setAddress2} />
      <AddressInput label="Address 3" text={address3} setText={setAddress3} />
      <AddressInput label="Zip Code" text={postcode} setText={setPostcode} />
    </div>
  );
}
