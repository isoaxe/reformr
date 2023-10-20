import { useState, useEffect } from 'react';
import { useCookies } from 'next-client-cookies';

/* Checks if a provided key is on the cookie and saves to state if so. */
export function useCookieState(quiz, stateName, setState) {
  const cookies = useCookies();

  useEffect(() => {
    const quizCookieAsString = cookies.get(quiz);
    if (!quizCookieAsString) return; // exit early if no cookie
    const quizCookie = JSON.parse(quizCookieAsString);
    const existingState = quizCookie[stateName];
    if (existingState) setState(existingState);
  }, [cookies, quiz, stateName, setState]);
}

/* Keep checking for a fresh cookie and stop when found. */
export function useFreshCookie(stateName, setState) {
  const [staleCookie, setStaleCookie] = useState(true);
  const cookies = useCookies();

  useEffect(() => {
    if (staleCookie) {
      const oldState = cookies.get(stateName);
      const interval = setInterval(() => {
        const newState = cookies.get(stateName);
        if (oldState !== newState) {
          setState(newState);
          setStaleCookie(false);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [stateName, setState, cookies, staleCookie]);
}
