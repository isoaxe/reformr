'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/quiz/button';
import { useFreshCookie } from '@/util/hooks';
import peaceSign from '/public/images/hand-peace-sign.png';

/* User can proceed to account creation if they have a high BMI. */
export default function HighBmi() {
  const [bmi, setBmi] = useState(null);

  useFreshCookie('bmi', setBmi);

  return (
    <main className="flex flex-col sm:flex-row">
      <div className="relative aspect-square sm:w-1/2">
        <Image
          src={peaceSign}
          alt="A hand making a peace sign with a yellow background."
          fill
          className="z-0 object-cover"
          sizes="24rem"
        />
      </div>
      <div className="flex aspect-square flex-col justify-center sm:w-1/2 sm:px-9">
        <p>Thanks for taking the time to complete this quiz.</p>
        <p className="my-6">
          You have a BMI of {bmi} and are eligible for the Reformr weight loss
          program.
        </p>
        <Button text="Create Account" link="/account" />
      </div>
    </main>
  );
}
