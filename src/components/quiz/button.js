import Link from 'next/link';
import { Button as MuiButton } from '@mui/material';

/* Material UI button used in the screening and medical quizzes. */
export default function Button({ text, link }) {
  return (
    <Link href={link} className="w-fit">
      <MuiButton variant="outlined" className="text-lg md:text-xl">
        {text}
      </MuiButton>
    </Link>
  );
}
