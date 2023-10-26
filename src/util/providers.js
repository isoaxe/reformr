'use client';

import { CookiesProvider } from 'next-client-cookies';
import { useAuthProvider } from '@/util/hooks';
import { authContext } from '@/util/context';

/* Allow any client component to access cookies. */
export const ClientCookiesProvider = (props) => <CookiesProvider {...props} />;

/* Makes auth object available to any child component that calls useAuth(). */
export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
