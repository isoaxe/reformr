import Button from '@/components/quiz/button';
import KeyPrompt from '@/components/quiz/key-prompt';
import Step from './step';
import { programOutlineData } from '@/util/data';

/* Just an explanation of the steps required in the process. */
export default function ProgramOutline() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col items-center">
      <h1 className="mb-4 text-center text-2xl font-semibold text-sky-600 sm:text-3xl">
        How our program works
      </h1>
      {programOutlineData.map((step, index) => (
        <Step key={index} {...step} number={index + 1} />
      ))}
      <Button text="Ok" link="./ws01-accept-terms" />
      <KeyPrompt />
    </main>
  );
}
