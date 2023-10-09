import Link from 'next/link';
import { Button } from '@mui/material';

/* Material UI button used in the screening and medical quizzes. */
export default function QuizButton({ text, link }) {
  return (
    <Link href={link}>
      <Button variant="outlined" className="w-fit text-lg md:text-xl">
        {text}
      </Button>
    </Link>
  );
}
