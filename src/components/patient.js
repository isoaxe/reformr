'use client';

import { TextField, IconButton } from '@mui/material';
import { CiSaveUp2 } from 'react-icons/ci';
import StatusDropdown from './status-dropdown';

export default function Patient({ patient, patients, setPatients }) {
  const { name, email, lastPayment, trackingNumber } = patient;
  const lastPaymentDate = new Date(lastPayment).toDateString().slice(4);

  async function storeTrackingNumber() {
    const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, trackingNumber }),
    };
    // TODO: Add token from firebase auth to request.
    const res = await fetch('/api/users/patient', options);
    const data = await res.json();
    if (data.success) console.log('Successfully updated tracking number.');
    else console.log('Error updating tracking number: ', data.error);
  }

  return (
    <div className="flex flex-row">
      <p className="w-40">{name}</p>
      <p className="w-64">{email}</p>
      <StatusDropdown
        patient={patient}
        patients={patients}
        setPatients={setPatients}
      />
      <p className="w-36 pl-6">{lastPaymentDate}</p>
      <TextField
        variant="standard"
        value={trackingNumber}
        onChange={(e) => {
          setPatients([...patients], (patient.trackingNumber = e.target.value));
        }}
        className="w-36"
      />
      <IconButton onClick={storeTrackingNumber}>
        <CiSaveUp2 />
      </IconButton>
    </div>
  );
}
