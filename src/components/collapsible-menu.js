'use client';

import { useState } from 'react';
import { Spiral as Hamburger } from 'hamburger-react';
import Collapse from '@mui/material/Collapse';

/* A collapseable menu used in the FAQ section and careers page. */
export default function CollapsibleMenu({ data }) {
  const [isOpen, setOpen] = useState(new Array(data.length).fill(false));

  /* Single item with animated expansion. */
  const item = ({ visible, hidden }, dataIdx) => (
    <div className="max-w-2xl text-lg md:text-xl lg:text-2xl" key={dataIdx}>
      <div
        onClick={() => {
          const updatedState = new Array(data.length).fill(false);
          if (!isOpen[dataIdx]) updatedState[dataIdx] = true;
          setOpen(updatedState);
        }}
        className="my-1 flex w-fit flex-row rounded-lg bg-sky-200 px-4 py-2 hover:cursor-pointer"
      >
        <div className="w-12">
          <Hamburger
            size={25}
            distance="lg"
            toggled={isOpen[dataIdx]}
            label="Animated icon to show visible part expanding to reveal hidden part."
          />
        </div>
        <p className="py-2.5 pl-2 sm:py-2 lg:py-1.5">{visible}</p>
      </div>
      <Collapse in={isOpen[dataIdx]}>
        {/* This is the part that is initially hidden. */}
        {hidden.map((paragraph, idx) => (
          <p className="ml-6 py-2 font-light lg:ml-9" key={idx}>
            {paragraph}
          </p>
        ))}
      </Collapse>
    </div>
  );

  return (
    <div className="flex flex-col">
      {data.map((dataItem, index) => item(dataItem, index))}
    </div>
  );
}
