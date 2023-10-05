'use client';

import { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import { faqs } from '@/util/data';
import Button from '@/components/button';

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
    <section className="mx-auto my-20 flex max-w-7xl flex-col justify-between px-4 xs:px-9 sm:flex-row lg:my-32 ">
      <div className="mb-5 flex w-full shrink-0 flex-row items-center justify-between sm:mb-0 sm:w-44 sm:flex-col sm:items-start sm:justify-start md:w-52">
        <h2 className="text-5xl font-extrabold md:text-6xl lg:text-7xl">
          FAQs
        </h2>
        <div className="flex flex-col">
          <h3 className="mb-2 text-lg sm:mb-6 sm:mt-16 md:text-xl lg:text-2xl">
            Other Questions?
          </h3>
          <Button text="Contact Us" link="/contact" bgShade="light" />
        </div>
      </div>
      <div className="flex flex-col">
        {faqs.map((singleFaqData, index) => faq(singleFaqData, index))}
      </div>
    </section>
  );
}
