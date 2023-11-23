'use client';

import { useState } from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';

/* Dropdown menu that allows the pharmacist to select order status. */
export default function StatusDropdown(props) {
  const [isLoading, setLoading] = useState(false);
  const { patient, patients, setPatients, isDoctor } = props;

  const orderStatusOptions = [
    'pending',
    'prescription printed',
    'medication dispensed',
    'order packed',
    'collected by courier',
  ];

  const patientStatusOptions = [
    'pending',
    'medically cleared',
    'labs needed',
    'medically failed',
  ];

  const statusOptions = isDoctor ? patientStatusOptions : orderStatusOptions;
  const statusType = isDoctor ? 'patient' : 'order';

  async function storeStatus(email, orderStatus) {
    const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, orderStatus }),
    };
    setLoading(true);
    // TODO: Add token from firebase auth to request.
    const res = await fetch('/api/users/patient', options);
    const data = await res.json();
    if (data.success) console.log(`Successfully updated ${statusType} status.`);
    else console.log(`Error updating ${statusType} status: `, data.error);
    setLoading(false);
  }

  return (
    <FormControl>
      <Select
        variant="standard"
        value={patient.orderStatus}
        className="w-48"
        disabled={isLoading}
        onChange={(e) => {
          const updatedStatus = e.target.value;
          setPatients([...patients], (patient.orderStatus = updatedStatus));
          storeStatus(patient.email, updatedStatus);
        }}
      >
        {statusOptions.map((option, index) => (
          <MenuItem value={option} key={index}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
