'use client';

import Link from 'next/link';
import { Button as MuiButton } from '@mui/material';
import { useCookies } from 'next-client-cookies';
import { setQuizCookie } from '@/util/helpers';

/* Material UI button used in the screening and medical quizzes. */
export default function Button(props) {
  const { text, link, state, isDisabled, quiz = 'medical' } = props;
  const cookies = useCookies();

  function setCookie() {
    if (isDisabled) return; // don't set cookie if button is disabled

    setQuizCookie(quiz, state, cookies);
  }

  return (
    <Link
      href={link}
      className={`w-fit ${isDisabled ? 'pointer-events-none' : ''}`}
      disabled
    >
      <MuiButton
        variant="outlined"
        className="text-lg md:text-xl"
        onClick={setCookie}
        disabled={isDisabled}
      >
        {text}
      </MuiButton>
    </Link>
  );
}
