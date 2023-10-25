import { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function Password({ password, setPassword }) {
  const [isVisible, setVisible] = useState(false);

  return (
    <TextField
      id="password-field"
      label="Password"
      variant="standard"
      value={password}
      type={isVisible ? 'text' : 'password'}
      onChange={(e) => setPassword(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setVisible(!isVisible)}
              edge="end"
            >
              {isVisible ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
