'use client';

import { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import { faqs } from '@/util/data';

/* The Frequently Asked Questions section of the homepage. */
export default function FAQ() {
  const [checked, setChecked] = useState(false);

  /* Single question with animated expansion. */
  const faq = ({ question, answer }) => (
    <div className="max-w-xl text-lg md:text-xl lg:text-2xl">
      <p onClick={() => setChecked(!checked)}>{question}</p>
      <Collapse in={checked}>
        {/* This is the answer that is initially hidden. */}
        {answer.map((paragraph, idx) => (
          <p className="font-light" key={idx}>
            {paragraph}
          </p>
        ))}
      </Collapse>
    </div>
  );

  return <section>{faq(faqs[0])}</section>;
}
