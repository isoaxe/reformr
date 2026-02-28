'use client';

import { useCookies } from 'next-client-cookies';
import Image from 'next/image';
import Button from '@/components/quiz/button';

/* User will be asked some medical questions to determine eligibility. */
/* This page is currently not used. We only have the low-BMI and high-BMI paths. */
export default function MidBmi() {
  const cookies = useCookies();

  return (
    <main className="flex flex-col sm:flex-row">
      <div className="relative aspect-square sm:w-1/2">
        <Image
          src="/images/hand-peace-sign.png"
          alt="A hand making a peace sign with a yellow background."
          fill
          className="z-0 object-cover"
          sizes="24rem"
        />
      </div>
      <div className="flex aspect-square flex-col justify-center sm:w-1/2 sm:px-9">
        <p>Thanks for taking the time to complete this quiz.</p>
        <p className="my-6">
          You have a BMI of {cookies.get('bmi')}, so we will need to ask some
          additional questions to determine your eligibility for the Reformr
          weight loss program.
        </p>
        <Button text="More Questions" link="/medical" />
      </div>
    </main>
  );
}
