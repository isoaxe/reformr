import { useState, useEffect, useContext } from 'react';
import { useCookies } from 'next-client-cookies';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { authContext } from './context';
import { auth } from './firebase';

/* Checks if a provided key is on the cookie and saves to state if so. */
export function useCookieState(quiz, stateName, setState, delay = 0) {
  const cookies = useCookies();

  useEffect(() => {
    /* Optional delay before execution if initial state requires calculation. */
    setTimeout(() => {
      const quizCookieAsString = cookies.get(quiz);
      if (!quizCookieAsString) return; // exit early if no cookie
      const quizCookie = JSON.parse(quizCookieAsString);
      const existingState = quizCookie[stateName];
      if (existingState) setState(existingState);
    }, delay);
  }, [cookies, quiz, stateName, setState, delay]);
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

  /* Set the user when authenticated, remove when not. */
  useEffect(() => {
    function setUserOnAuthChange() {
      onAuthStateChanged(auth, (user) => {
        if (user) setUser(user);
        else setUser(null);
      });
    }

    setUserOnAuthChange();
  }, []);

  /* Return the user object and auth methods. */
  return {
    user,
    login,
    logout,
  };
}

/* Runs callback function when Enter key is pressed. */
export function useKeyPress(callback) {
  useEffect(() => {
    function handleKey(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        callback();
      }
    }

    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [callback]);
}
