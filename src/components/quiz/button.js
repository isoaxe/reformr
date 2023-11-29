'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Button as MuiButton } from '@mui/material';
import { useCookies } from 'next-client-cookies';
import { setQuizCookie } from '@/util/helpers';
import { useKeyPress } from '@/util/hooks';

/* Material UI button used in the screening and medical quizzes. */
export default function Button(props) {
  const { text, link, state, isDisabled, quiz = 'medical' } = props;
  const cookies = useCookies();
  const router = useRouter();

  /* Sets cookie and navigates to next page if input is valid. */
  const handleClick = useCallback(() => {
    if (isDisabled) return; // don't set cookie if button is disabled

    setQuizCookie(quiz, state, cookies);
    router.push(link);
  }, [link, state, cookies, isDisabled, quiz, router]);

  useKeyPress(handleClick);

  return (
    <MuiButton
      variant="outlined"
      className="w-fit text-lg md:text-xl"
      onClick={handleClick}
      disabled={isDisabled}
    >
      {text}
    </MuiButton>
  );
}
