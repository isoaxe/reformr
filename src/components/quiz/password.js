import { useState, useEffect } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { FormHelperText, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function Password(props) {
  const { password, setPassword, helperText, setHelperText } = props;
  const { isFocused = false } = props;
  const [isVisible, setVisible] = useState(false);

  /* Display password validation in DOM as user types. */
  useEffect(() => {
    if (password && password.length < 12)
      setHelperText('Needs to be > 11 characters');
    else setHelperText('');
  }, [password, setHelperText]);

  return (
    <>
      <TextField
        autoFocus={isFocused}
        id="password-field"
        variant="standard"
        label={
          <Typography className="!text-lg md:!text-xl xl:!text-2xl">
            Password
          </Typography>
        }
        value={password}
        type={isVisible ? 'text' : 'password'}
        onChange={(e) => setPassword(e.target.value)}
        error={!!helperText}
        InputProps={{
          className: '!text-xl md:!text-2xl xl:!text-3xl',
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setVisible(!isVisible)}
              >
                {isVisible ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <FormHelperText error={!!helperText}>{helperText}</FormHelperText>
    </>
  );
}
