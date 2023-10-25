import { useState } from 'react';
import { OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function Password({ password, setPassword }) {
  const [isVisible, setVisible] = useState(false);

  return (
    <OutlinedInput
      id="password-field"
      label="Password"
      value={password}
      type={isVisible ? 'text' : 'password'}
      onChange={(e) => setPassword(e.target.value)}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => setVisible(!isVisible)}
            edge="end"
          >
            {isVisible ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
    />
  );
}
