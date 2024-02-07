import { TextField, Typography } from '@mui/material';

/* Just a standardised text input component for the screening and medical quizzes. */
export default function TextInput(props) {
  const { text, setText, label = '', isError = false } = props;

  return (
    <TextField
      autoFocus
      variant="standard"
      label={
        <Typography className="text-lg md:text-xl xl:text-2xl">
          {label}
        </Typography>
      }
      value={text}
      onChange={(e) => setText(e.target.value)}
      error={isError}
      sx={{ mb: 2 }}
      InputProps={{ className: '!text-xl md:!text-2xl xl:!text-3xl' }}
    />
  );
}
