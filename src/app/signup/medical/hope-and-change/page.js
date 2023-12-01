'use client';

import Image from 'next/image';
import Button from '@/components/quiz/button';
import { useAuth, useRedirectNoUser } from '@/util/hooks';
import lightbulbInHand from '/public/images/hand-holding-lightbulb.jpg';

/* This is the intro to the second of three sections for the medical quiz. */
export default function HopeAndChange() {
  const { user } = useAuth();
  useRedirectNoUser(user);

  return (
    <main className="flex w-full max-w-5xl flex-col sm:flex-row">
      <div className="relative aspect-square sm:w-1/2">
        <Image
          src={lightbulbInHand}
          alt="The hand of a person holding a lightbulb."
          fill
          className="z-0 object-cover"
          sizes="24rem"
        />
      </div>
      <div className="flex aspect-square flex-col justify-center sm:w-1/2 sm:px-9">
        <p className="my-6">
          Less than 1% of people with obesity will achieve a normal BMI.
        </p>
        <p className="mb-8 font-semibold">We’re changing this.</p>
        <Button text="Continue" link="./wm08-how-healthy" />
      </div>
    </main>
  );
}
