'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/util/hooks';
import { auth } from '@/util/firebase';

export default function NavLinks({ setOpen }) {
  const [navPath, setNavPath] = useState('/main/login');
  const [navText, setNavText] = useState('Login');
  const [userType, setUserType] = useState('patient');
  const pathname = usePathname();
  const { user } = useAuth();

  const close = () => setOpen(false);

  // Link styles.
  const constant = ' h-full flex items-center mt-10 md:mt-0';
  const active = 'font-bold bg-primary text-cyan-200' + constant;
  const dormant = 'hover:text-cyan-200' + constant;

  useEffect(() => {
    if (!user) {
      setNavText('Login');
      setNavPath('/main/login');
      return;
    }

    const name = user.displayName?.split(' ')[0]; // first name only
    if (pathname.includes('dashboard')) setNavText('Greetings, ' + name);
    else setNavText('My Account');
    setNavPath(`/main/dashboard/${userType}`);
  }, [user, pathname, userType]);

  useEffect(() => {
    if (!user) return;

    async function getUserType() {
      const tokenRes = await auth.currentUser.getIdTokenResult();
      const role = await tokenRes.claims.role;
      if (role) setUserType(role);
      else setUserType('patient');
    }

    getUserType();
  }, [user]);

  return (
    <div className="flex h-40 w-full flex-col justify-between text-xl text-white md:h-full md:flex-row lg:text-2xl">
      <div className="flex h-80 flex-col pt-10 md:h-full md:w-full md:max-w-xl md:flex-row md:justify-between md:pr-16 md:pt-0">
        <h6 className={pathname === '/main/blog' ? active : dormant}>
          <Link href="/main/blog" onClick={close}>
            Learn
          </Link>
        </h6>
        <h6 className={pathname === '/signup/screening' ? active : dormant}>
          <Link href="/signup/screening" onClick={close}>
            Quiz
          </Link>
        </h6>
        <h6 className={pathname === '/main/careers' ? active : dormant}>
          <Link href="/main/careers" onClick={close}>
            Careers
          </Link>
        </h6>
        <h6 className={pathname === '/main/contact' ? active : dormant}>
          <Link href="/main/contact" onClick={close}>
            Contact
          </Link>
        </h6>
      </div>
      <h6
        className={
          pathname === '/main/login' || pathname.includes('dashboard')
            ? active
            : dormant
        }
      >
        <Link href={navPath} onClick={close} className="w-32">
          {navText}
        </Link>
      </h6>
    </div>
  );
}
