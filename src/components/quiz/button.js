'use client';

import Link from 'next/link';
import { Button as MuiButton } from '@mui/material';
import { useCookies } from 'next-client-cookies';

/* Material UI button used in the screening and medical quizzes. */
export default function Button({ text, link, state }) {
  const cookies = useCookies();

  const setCookie = () => {
    if (!state) return; // exit early as no cookie to set

    const key = Object.keys(state)[0]; // get name of state, e.g. 'firstName'
    cookies.set(key, state[key]);
  };

  return (
    <Link href={link} className="w-fit">
      <MuiButton
        variant="outlined"
        className="text-lg md:text-xl"
        onClick={setCookie}
      >
        {text}
      </MuiButton>
    </Link>
  );
}
