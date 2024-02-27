'use client';

import { useCookies } from 'next-client-cookies';
import Image from 'next/image';
import Button from '@/components/quiz/button';
import stethoscope from '/public/images/stethoscope.jpg';

/* User can proceed to account creation if they have a high BMI. */
export default function HighBmi() {
  const cookies = useCookies();

  return (
    <main className="flex flex-col sm:flex-row">
      <div className="relative aspect-square sm:w-1/2">
        <Image
          src={stethoscope}
          alt="A stethoscope attached to a smartphone with a light blue background."
          fill
          className="z-0 object-cover"
          sizes="24rem"
        />
      </div>
      <div className="flex aspect-square flex-col justify-center sm:w-1/2 sm:px-9">
        <p>Thanks for taking the time to complete this quiz.</p>
        <p className="my-6">
          You have a BMI of {cookies.get('bmi')} and may be eligible for the
          Reformr weight loss program.
        </p>
        <Button text="Create Account" link="/signup/create-account" />
      </div>
    </main>
  );
}
