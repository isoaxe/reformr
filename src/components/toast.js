import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Toast(props) {
  const { message, severity, open, setOpen, duration = 3 } = props;
  const vertical = 'bottom';
  const horizontal = 'center';

  return (
    <Snackbar
      open={open}
      autoHideDuration={duration * 1000}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical, horizontal }}
    >
      <Alert
        severity={severity}
        variant="filled"
        className="max-w-xl !text-lg md:!text-xl xl:!text-2xl"
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
