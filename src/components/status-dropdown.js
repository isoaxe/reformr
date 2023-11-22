'use client';

import { FormControl, Select, MenuItem } from '@mui/material';

export default function StatusDropdown(props) {
  const { patient, patients, setPatients, isLoading, setLoading } = props;
  const { statusOptions } = props;

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
    if (data.success) console.log('Successfully updated order status.');
    else console.log('Error updating order status: ', data.error);
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
