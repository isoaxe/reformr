'use client';

import { FormControl, Select, MenuItem } from '@mui/material';

export default function StatusDropdown(props) {
  const { patient, patients, setPatients, isLoading, statusOptions } = props;
  const { storeStatus } = props;

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
