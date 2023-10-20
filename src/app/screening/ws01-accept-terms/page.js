'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/quiz/button';
import Captcha from '@/components/captcha';

/* Accept Reformr terms and conditions. */
export default function AcceptTerms() {
  const [isVerified, setVerified] = useState(false);

  return (
    <main className="mx-auto max-w-4xl">
      <p className="mb-6">
        By proceeding, you acknowledge you have read and agree with our{' '}
        <Link
          href="/main/tos"
          target="_blank"
          className="text-blue-700 underline"
        >
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link
          href="/main/privacy-policy"
          target="_blank"
          className="text-blue-700 underline"
        >
          Privacy Policy
        </Link>
        .
      </p>
      <Button text="Ok" link="/screening/ws02-first-name" />
      <Captcha setVerified={setVerified} />
    </main>
  );
}
