'use client';

import { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import { faqs } from '@/util/data';

/* The Frequently Asked Questions section of the homepage. */
export default function FAQ() {
  const initialFaqState = new Array(faqs.length).fill(false);
  const [isOpen, setOpen] = useState(initialFaqState);

  /* Single question with animated expansion. */
  const faq = ({ question, answer }, index) => (
    <div className="max-w-xl text-lg md:text-xl lg:text-2xl">
      <p
        onClick={() => {
          const updatedState = initialFaqState;
          updatedState[index] = true;
          setOpen(updatedState);
        }}
      >
        {question}
      </p>
      <Collapse in={isOpen[index]}>
        {/* This is the answer that is initially hidden. */}
        {answer.map((paragraph, idx) => (
          <p className="font-light" key={idx}>
            {paragraph}
          </p>
        ))}
      </Collapse>
    </div>
  );

  return (
    <section>
      {faqs.map((singleFaqData, index) => faq(singleFaqData, index))}
    </section>
  );
}
