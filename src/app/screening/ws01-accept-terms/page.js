import Link from 'next/link';
import Button from '@/components/quiz/button';

/* Accept Reformr terms and conditions. */
export default function AcceptTerms() {
  return (
    <main className="max-w-4xl self-center">
      <p className="mb-6">
        By proceeding, you acknowledge you have read and agree with our{' '}
        <Link href="/tos" target="_blank" className="text-blue-700 underline">
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link
          href="/privacy-policy"
          target="_blank"
          className="text-blue-700 underline"
        >
          Privacy Policy
        </Link>
        .
      </p>
      <Button text="Ok" link="/screening/ws02-first-name" />
    </main>
  );
}
