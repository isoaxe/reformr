import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Toast({ message, severity, open, setOpen }) {
  const vertical = 'bottom';
  const horizontal = 'center';

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical, horizontal }}
    >
      <Alert severity={severity} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
}
