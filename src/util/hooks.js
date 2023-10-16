import { useEffect } from 'react';
import { useCookies } from 'next-client-cookies';

/* Checks if a provided key is on the cookie and saves to state if so. */
export function useCookieState(quiz, state, setState) {
  const cookies = useCookies();

  useEffect(() => {
    const quizCookieAsString = cookies.get(quiz);
    if (!quizCookieAsString) return; // exit early if no cookie
    const quizCookie = JSON.parse(quizCookieAsString);
    const existingState = quizCookie[state];
    if (existingState) setState(existingState);
  }, [cookies, quiz, state, setState]);
}
