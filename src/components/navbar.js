'use client';

import { useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import MobileNavbar from './navbar-mobile';
import NavLinks from './nav-links';
import logo from 'public/images/text-logo-plain.png';

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 z-30 flex h-16 w-full flex-row justify-between bg-violet-600 px-9 md:h-24">
        <div className="max-w-400 m-auto flex h-full w-full flex-row items-center justify-between">
          <Link href="/">
            <div className="mr-10 w-32 md:w-44">
              <Image
                src={logo}
                alt="Plain monotone version of Reformr text logo."
                sizes="(max-width: 767px) 8rem, 11rem"
              />
            </div>
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
