'use client';

import { useCookies } from 'next-client-cookies';
import Image from 'next/image';
import Button from '@/components/quiz/button';
import peaceSign from '/public/images/hand-peace-sign.png';

/* Assessment ends if the user has a low BMI and they return to homepage. */
export default function LowBmi() {
  const cookies = useCookies();

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
          Based on your BMI of {cookies.get('bmi')}, the Reformr weight loss
          program is unsuitable for you.
        </p>
        <Button text="Return Home" link="/main/home" />
      </div>
    </main>
  );
}
