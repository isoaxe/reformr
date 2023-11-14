'use client';

import { useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { Spiral as Hamburger } from 'hamburger-react';

export default function DropdownItem() {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="text-lg md:text-xl lg:text-2xl">
      <div
        onClick={() => setOpen(!isOpen)}
        className="flex w-full flex-row items-center rounded border border-slate-400 px-4 py-4 hover:cursor-pointer"
      >
        <BsFillPersonFill size={30} />
        <div className="flex w-full flex-row items-center justify-between">
          <h2 className="ml-4">Your Info</h2>
          <Hamburger
            size={25}
            distance="lg"
            toggled={isOpen}
            label="Animated icon to toggle expanded view."
          />
        </div>
      </div>
    </section>
  );
}
