import Link from 'next/link';
import QuizButton from '@/components/quiz/button';

/* Accept Reformr terms and conditions. */
export default function AcceptTerms() {
  return (
    <main className="flex min-h-screen flex-col justify-center">
      <section className="mx-auto flex w-full max-w-md flex-col px-4 text-xl xs:px-9 sm:max-w-6xl md:text-2xl xl:text-3xl">
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
        <QuizButton text="Ok" link="/screening/ws02-first-name" />
      </section>
    </main>
  );
}
