'use client';

import { useRouter } from 'next/navigation';
import { Button as MuiButton } from '@mui/material';
import { useCookies } from 'next-client-cookies';
import { setQuizCookie } from '@/util/helpers';

/* Material UI button used in the screening and medical quizzes. */
export default function Button(props) {
  const { text, link, state, isDisabled, quiz = 'medical' } = props;
  const cookies = useCookies();
  const router = useRouter();

  /* Sets cookie and navigates to next page if input is valid. */
  function handleClick() {
    if (isDisabled) return; // don't set cookie if button is disabled

    setQuizCookie(quiz, state, cookies);
    router.push(link);
  }

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
