'use client';

import { useState } from 'react';
import { Spiral as Hamburger } from 'hamburger-react';
import Collapse from '@mui/material/Collapse';

export default function DropdownItem({ text, icon, hidden }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="rounded border border-slate-400 px-4 py-3 text-lg md:text-xl lg:text-2xl">
      <div
        onClick={() => setOpen(!isOpen)}
        className="flex w-full flex-row items-center hover:cursor-pointer"
      >
        {icon}
        <div className="flex w-full flex-row items-center justify-between">
          <h2 className="ml-4 font-medium">{text}</h2>
          <Hamburger
            size={25}
            distance="lg"
            toggled={isOpen}
            label="Animated icon to toggle expanded view."
          />
        </div>
      </div>
      <Collapse in={isOpen}>
        {/* This part is initially hidden. */}
        <div className="mb-4 w-full border border-b-slate-400 pt-1"></div>
        {hidden}
      </Collapse>
    </section>
  );
}
