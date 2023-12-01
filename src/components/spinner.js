import { CircularProgress } from '@mui/material';

export default function Spinner() {
  return (
    <div className="my-20 flex w-full flex-row justify-center">
      <CircularProgress color="secondary" />
    </div>
  );
}
