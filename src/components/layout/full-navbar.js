'use client';

import { useState, useEffect } from 'react';
import { Fade as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileNavbar from './navbar-mobile';
import NavLinks from './nav-links';
import { useScrollPosition } from '@/util/hooks';
import logo from 'public/images/text-logo-plain.png';

export default function FullNavbar() {
  const [isOpen, setOpen] = useState(false);
  const [isOpaque, setOpaque] = useState(false);
  const pathname = usePathname();

  const position = useScrollPosition();

  const close = () => setOpen(false);

  useEffect(() => {
    if (position < 50) setOpaque(false);
    else setOpaque(true);
  }, [position]);

  return (
    <>
      <div
        className={`fixed top-0 z-30 flex h-12 w-full flex-row justify-between bg-violet-500 px-4 transition xs:px-9 md:h-16 ${
          !isOpen && 'border-b-2 border-violet-800'
        } ${
          isOpaque
            ? 'border-opacity-100 bg-opacity-100'
            : 'border-opacity-0 bg-opacity-0'
        }`}
      >
        <div className="m-auto flex h-full w-full flex-row items-center justify-between">
          <Link
            href="/main/home"
            className={`mr-10 w-40 md:w-72 lg:mr-20 ${
              pathname !== '/main/home' && 'hover:opacity-60'
            }`}
            onClick={close}
          >
            <Image
              src={logo}
              alt="Plain monotone version of Reformr text logo."
              sizes="(max-width: 767px) 10rem, 18rem"
            />
          </Link>
          <div className="hidden h-full w-full md:flex">
            <NavLinks setOpen={setOpen} />
          </div>
          {/* Hide hamburger menu on large screens. */}
          <div className="md:hidden">
            <Hamburger
              size={32}
              distance="sm"
              toggled={isOpen}
              toggle={setOpen}
              label="Menu button for smaller screens"
              color="#fff"
            />
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'flex' : 'hidden'}`}>
        <MobileNavbar setOpen={setOpen} />
      </div>
    </>
  );
}
