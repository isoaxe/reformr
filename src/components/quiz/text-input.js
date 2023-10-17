import { TextField } from '@mui/material';

/* Just a standardised text input component for the screening and medical quizzes. */
export default function TextInput({ text, setText, isError }) {
  return (
    <TextField
      variant="standard"
      value={text}
      onChange={(e) => setText(e.target.value)}
      error={isError}
      sx={{ mb: 3 }}
      InputProps={{ className: 'text-xl md:text-2xl xl:text-3xl' }}
    />
  );
}
