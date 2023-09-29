'use client';

import { useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react';
import MobileNavbar from './navbar-mobile';
import NavLinks from './nav-links';

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 z-30 flex h-16 w-full flex-row justify-between bg-violet-600 px-9 md:h-24">
        <div className="max-w-400 m-auto flex h-full w-full flex-row items-center justify-between">
          <div className="hidden h-full md:flex">
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
