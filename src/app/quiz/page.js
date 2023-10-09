import Image from 'next/image';
import peaceSign from '/public/images/hand-peace-sign.png';
import { Button } from '@mui/material';

/* This is just the first intro page of the quiz and doen't contain questions. */
export default function Quiz() {
  return (
    <main className="flex min-h-screen flex-col justify-center">
      <section className="mx-auto flex w-full max-w-md flex-col sm:max-w-6xl sm:flex-row">
        <div className="relative aspect-square sm:w-1/2">
          <Image
            src={peaceSign}
            alt="A hand making a peace sign with a yellow background."
            fill
            className="z-0 object-cover"
            sizes="24rem"
          />
        </div>
        <div className="flex aspect-square flex-col justify-center px-4 text-xl sm:w-1/2 md:px-9 md:text-2xl xl:text-3xl">
          <p>Kia Ora!</p>
          <p className="my-6">
            Answer a few simple questions to see if you&apos;re eligible for the
            Metabolic Reset Program.
          </p>
          <Button variant="outlined" className="w-fit text-lg md:text-xl">
            Start
          </Button>
        </div>
      </section>
    </main>
  );
}
