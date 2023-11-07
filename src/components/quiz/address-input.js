import { TextField } from '@mui/material';

export function AddressInput({ text, setText, label }) {
  return (
    <TextField
      variant="standard"
      value={text}
      onChange={(e) => setText(e.target.value)}
      label={label}
      sx={{ width: '100%', mb: 1 }}
      InputProps={{ className: 'text-lg md:text-xl xl:text-2xl' }}
    />
  );
}
