import Button from '@/components/quiz/button';
import KeyPrompt from '@/components/quiz/key-prompt';
import Step from './step';
import { programOutlineData } from '@/util/data';

/* Just an explanation of the steps required in the process. */
export default function ProgramOutline() {
  return (
    <main className="flex w-full max-w-3xl flex-col">
      <h1>How our program works</h1>
      {programOutlineData.map((step, index) => (
        <Step key={index} {...step} />
      ))}
      <Button text="Lets Go" link="./ws01-accept-terms" />
      <KeyPrompt />
    </main>
  );
}
