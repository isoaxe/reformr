import { useEffect } from 'react';
import { useCookies } from 'next-client-cookies';

export function useCookieState(quiz, state, setState) {
  const cookies = useCookies();

  useEffect(() => {
    const quizCookieAsString = cookies.get(quiz);
    const quizCookie = JSON.parse(quizCookieAsString);
    const existingState = quizCookie[state];
    if (existingState) setState(existingState);
  }, [cookies, quiz, state, setState]);
}
