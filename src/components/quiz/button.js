'use client';

import Link from 'next/link';
import { Button as MuiButton } from '@mui/material';
import { useCookies } from 'next-client-cookies';

/* Material UI button used in the screening and medical quizzes. */
export default function Button({ text, link, state, quiz = 'medical' }) {
  const cookies = useCookies();

  const setCookie = () => {
    if (!state) return; // exit early as no state to add to cookie

    const options = { expires: 7, sameSite: 'strict' }; // expires in one week
    let quizCookieAsString = cookies.get(quiz) ?? '{}'; // cookie is stored as string
    const quizCookie = JSON.parse(quizCookieAsString); // cookie as JSON object
    const key = Object.keys(state)[0]; // get name of state, e.g. 'firstName'
    quizCookie[key] = state[key]; // add state to cookie
    quizCookieAsString = JSON.stringify(quizCookie); // convert back to string
    cookies.set(quiz, quizCookieAsString, options); // cookie must be set as string
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
