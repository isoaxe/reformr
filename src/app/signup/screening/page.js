import Image from 'next/image';
import Button from '@/components/quiz/button';
import KeyPrompt from '@/components/quiz/key-prompt';
import peaceSign from '/public/images/hand-peace-sign.png';

/* This is just the first intro page of the quiz and doesn't contain questions. */
export default function Screening() {
  return (
    <main className="flex w-full max-w-5xl flex-col sm:flex-row">
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
        <p>Kia Ora!</p>
        <p className="my-6">
          Answer a few simple questions to see if you’re eligible for the
          <span className="font-semibold"> Metabolic Reset Program.</span>
        </p>
        <Button text="Start" link="./screening/under-construction" />
        <KeyPrompt />
      </div>
    </main>
  );
}
