'use client';

import { useState } from 'react';
import Collapse from '@mui/material/Collapse';

/* The Frequently Asked Questions section of the homepage. */
export default function FAQ() {
  const [checked, setChecked] = useState(false);

  /* Single question with animated expansion. */
  const faq = (question, answer) => (
    <div className="max-w-xl text-lg md:text-xl lg:text-2xl">
      <p onClick={() => setChecked(!checked)}>{question}</p>
      <Collapse in={checked}>
        {/* This is the answer that is initially hidden. */}
        <p className="font-light">{answer}</p>
      </Collapse>
    </div>
  );

  return (
    <section>
      {faq(
        'You can read more about Saxenda including how it works, how effective it is, and its side effects here.',
        'The Reformr Metabolic Reset Program includes a monthly supply of liraglutide (Saxenda). Saxenda is the only GLP-1 medication approved for the treatment of obesity in New Zealand.'
      )}
    </section>
  );
}
