import { TextField } from '@mui/material';

/* Just a standardised number input component for the screening and medical quizzes. */
/* IMPORTANT: All props take a string, not a number! */
export default function NumberInput(props) {
  const { number, setNumber, isError, placeholder = '' } = props;
  /* Allow only number input (albeit in string form). */
  const handleChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === '' || regex.test(e.target.value)) {
      setNumber(e.target.value);
    }
  };

  return (
    <TextField
      autoFocus
      variant="standard"
      placeholder={placeholder}
      value={number}
      onChange={handleChange}
      error={isError}
      sx={{ mb: 3 }}
      InputProps={{ className: 'text-xl md:text-2xl xl:text-3xl' }}
    />
  );
}
