import Link from 'next/link';
import Button from '@/components/quiz/button';
import KeyPrompt from '@/components/quiz/key-prompt';

/* Accept Reformr terms and conditions. */
export default function AcceptTerms() {
  return (
    <main className="mx-auto max-w-4xl">
      <p className="mb-6">
        By proceeding, you acknowledge you have read and agree with our{' '}
        <Link href="/tos" target="_blank" className="text-sky-700">
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link href="/privacy-policy" target="_blank" className="text-sky-700">
          Privacy Policy
        </Link>
        .
      </p>
      <Button text="Ok" link="./ws02-first-name" />
      <KeyPrompt />
    </main>
  );
}
