'use client';

import { useState } from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';
import { auth } from '@/util/firebase';

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

  const statusKey = isDoctor ? 'patientStatus' : 'orderStatus';
  const statusOptions = isDoctor ? patientStatusOptions : orderStatusOptions;
  const statusType = isDoctor ? 'patient' : 'order';

  async function storeStatus(email, updatedStatus) {
    setLoading(true);
    const fireToken = await auth.currentUser.getIdToken();
    const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, [statusKey]: updatedStatus, fireToken }),
    };
    const res = await fetch('/api/users/patient', options);
    const { error } = await res.json();
    if (error) console.log(`Error updating ${statusType} status: `, error);
    else console.log(`Successfully updated ${statusType} status.`);
    setLoading(false);
  }

  return (
    <FormControl>
      <Select
        variant="standard"
        value={patient[statusKey]}
        className="w-48"
        disabled={isLoading}
        onChange={(e) => {
          const updatedStatus = e.target.value;
          setPatients([...patients], (patient[statusKey] = updatedStatus));
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
