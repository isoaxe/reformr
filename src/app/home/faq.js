'use client';

import { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import { faqs } from '@/util/data';

/* The Frequently Asked Questions section of the homepage. */
export default function FAQ() {
  const initialFaqState = new Array(faqs.length).fill(false);
  const [isOpen, setOpen] = useState(initialFaqState);

  /* Single question with animated expansion. */
  const faq = ({ question, answer }, faqIdx) => (
    <div className="max-w-2xl text-lg md:text-xl lg:text-2xl" key={faqIdx}>
      <p
        onClick={() => {
          const updatedState = initialFaqState;
          if (!isOpen[faqIdx]) updatedState[faqIdx] = true;
          setOpen(updatedState);
        }}
        className="my-1 w-fit rounded-lg bg-sky-200 px-4 py-2 hover:cursor-pointer"
      >
        {question}
      </p>
      <Collapse in={isOpen[faqIdx]}>
        {/* This is the answer that is initially hidden. */}
        {answer.map((paragraph, idx) => (
          <p className="ml-6 py-2 font-light lg:ml-9" key={idx}>
            {paragraph}
          </p>
        ))}
      </Collapse>
    </div>
  );

  return (
    <section className="my-20 flex flex-row lg:my-32">
      <div className="flex flex-col">
        {faqs.map((singleFaqData, index) => faq(singleFaqData, index))}
      </div>
    </section>
  );
}
