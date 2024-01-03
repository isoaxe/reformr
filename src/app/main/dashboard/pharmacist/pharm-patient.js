'use client';

import { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import { CiSaveUp2 } from 'react-icons/ci';
import StatusDropdown from '@/components/status-dropdown';
import Toast from '@/components/toast';
import { auth } from '@/util/firebase';

/* This is a single patient as displayed on the pharmacist dashboard. */
export default function PharmacistPatient({ patient, patients, setPatients }) {
  const [isLoading, setLoading] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const { name, email, lastPayment, trackingNumber } = patient;
  const lastPaymentDate = new Date(lastPayment).toDateString().slice(4);

  async function storeTrackingNumber() {
    setLoading(true);
    const fireToken = await auth.currentUser.getIdToken(true);
    const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, trackingNumber, fireToken }),
    };
    const res = await fetch('/api/users/patient', options);
    const { error } = await res.json();
    if (error) console.log('Error updating tracking number: ', error);
    else setToastOpen(true);
    setLoading(false);
  }

  return (
    <div className="flex flex-row">
      <p className="w-40">{name}</p>
      <p className="w-64">{email}</p>
      <StatusDropdown
        patient={patient}
        patients={patients}
        setPatients={setPatients}
        isDoctor={false}
      />
      <p className="w-36 pl-6">{lastPaymentDate}</p>
      <TextField
        variant="standard"
        value={trackingNumber}
        disabled={isLoading}
        onChange={(e) => {
          setPatients([...patients], (patient.trackingNumber = e.target.value));
        }}
        className="w-36"
      />
      <IconButton onClick={storeTrackingNumber}>
        <CiSaveUp2 />
      </IconButton>
      <Toast
        message="Tracking number saved to database."
        severity="success"
        open={toastOpen}
        setOpen={setToastOpen}
      />
    </div>
  );
}
