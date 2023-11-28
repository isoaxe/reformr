import Image from 'next/image';
import Button from '@/components/quiz/button';
import twoThumbsUp from '/public/images/two-thumbs-up.jpg';

/* This is the intro to the third and last section for the medical quiz. */
export default function HealthAndTreatment() {
  return (
    <main className="flex w-full max-w-5xl flex-col sm:flex-row">
      <div className="relative aspect-square sm:w-1/2">
        <Image
          src={twoThumbsUp}
          alt="Two male hands wearing surgical gloves giving a double thumbs up."
          fill
          className="z-0 object-cover"
          sizes="24rem"
        />
      </div>
      <div className="flex aspect-square flex-col justify-center sm:w-1/2 sm:px-9">
        <p className="my-6">
          Next, we’ll ask some questions about your physical and mental health
          so that our doctors can recommend the
          <span className="font-semibold"> best treatment possible</span>.
        </p>
        <Button text="Continue" link="./wm13-thyroid-activity" />
      </div>
    </main>
  );
}
