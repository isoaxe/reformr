'use client';

import { useState, useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Link from 'next/link';
import Button from '@/components/quiz/button';

/* Accept Reformr terms and conditions. */
export default function AcceptTerms() {
  const [token, setToken] = useState(null);
  const [isVerified, setVerified] = useState(false);
  const captchaRef = useRef(null);

  function handleChange(value) {
    if (value) setToken(value);
  }

  useEffect(() => {
    setTimeout(() => captchaRef.current.execute(), 1000);
  }, [captchaRef]);

  useEffect(() => {
    if (token) {
      (async () => {
        const res = await fetch(`/api/captcha?token=${token}`);
        const json = await res.json();
        if (json.success) setVerified(true);
      })();
    }
  }, [token]);

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
      <ReCAPTCHA
        ref={captchaRef}
        size="invisible"
        badge="bottomright"
        sitekey="6LdcGLYoAAAAALiS3p1uTXU5979fEhDbF-yyhNda"
        onChange={handleChange}
      />
    </main>
  );
}
