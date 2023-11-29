import Image from 'next/image';
import Button from '@/components/quiz/button';
import KeyPrompt from '@/components/quiz/key-prompt';
import womanOnRock from '/public/images/woman-on-rock.jpg';

/* This is the intro to the first of three sections for the medical quiz. */
export default function DeepDive() {
  return (
    <main className="flex w-full max-w-5xl flex-col sm:flex-row">
      <div className="relative aspect-square sm:w-1/2">
        <Image
          src={womanOnRock}
          alt="A female hiker with her back to the camera looking out across a valley."
          fill
          className="z-0 object-cover"
          sizes="24rem"
        />
      </div>
      <div className="flex aspect-square flex-col justify-center sm:w-1/2 sm:px-9">
        <p className="my-6">
          Let’s dive a bit deeper into your weight loss journey.
        </p>
        <Button text="Continue" link="./wm01-what-motivates-you" />
        <KeyPrompt />
      </div>
    </main>
  );
}
