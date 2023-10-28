import { useState, useEffect, useContext } from 'react';
import { useCookies } from 'next-client-cookies';
import {
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  confirmPasswordReset,
  onAuthStateChanged,
} from 'firebase/auth';
import { authContext } from './context';
import { auth } from './firebase';

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

/* Hook for child components to get the auth object and re-render when it changes. */
export const useAuth = () => useContext(authContext);

/* Provider hook that creates auth object and handles state. */
export function useAuthProvider() {
  const [user, setUser] = useState(null);

  /* Wrap any Firebase methods we want to use making sure to save the user to state. */
  async function login(email, password) {
    const response = await signInWithEmailAndPassword(auth, email, password);
    setUser(response.user);
    return response.user;
  }

  async function logout() {
    await signOut(auth);
    setUser(null);
  }

  async function sendPasswordResetEmail(email) {
    await sendPasswordResetEmail(auth, email);
    return true;
  }

  async function confirmPasswordReset(code, password) {
    await confirmPasswordReset(auth, code, password);
    return true;
  }

  /* Subscribe to user on mount. */
  useEffect(() => {
    function unsubscribe() {
      onAuthStateChanged(auth, (user) => {
        if (user) setUser(user);
        else setUser(null);
      });
    }

    /* Cleanup subscription on unmount. */
    return () => unsubscribe();
  }, [setUser]);

  /* Return the user object and auth methods. */
  return {
    user,
    login,
    logout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}
