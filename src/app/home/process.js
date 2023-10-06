import Image from 'next/image';
import Button from '@/components/button';
import stage1 from '/public/images/stage-1.png';
import stage2 from '/public/images/stage-2.png';
import stage3 from '/public/images/stage-3.png';

/* Section that outlines the stages in the process shown on the homepage. */
export default function Process() {
  /* Sub-component to show the current stage of the process */
  function Stage({ title, image, description }) {
    return (
      <div className="mx-3 my-10 flex w-full flex-col xs:w-72 md:my-20 lg:w-96">
        <h3 className="text-center text-lg font-light md:text-xl lg:text-2xl">
          {title}
        </h3>
        <div className="min-w-60 relative my-6 aspect-square w-full rounded-lg shadow-lg">
          <Image
            src={image}
            alt="Graphic showing the current stage of the process being described."
            fill
            className="z-0 object-cover"
            sizes="(max-width: 429px) 18rem, 24rem"
          />
        </div>
        <p className="text-lg font-extralight md:text-xl lg:text-2xl">
          {description}
        </p>
      </div>
    );
  }

  return (
    <section className="my-10 flex flex-col items-center px-4 md:my-28">
      <h2 className="text-xl md:text-2xl lg:text-3xl">
        Personalised medical weight loss. One simple subscription.
      </h2>
      <div className="m-auto flex w-full max-w-[100rem] flex-wrap justify-around md:flex-nowrap">
        <Stage
          title="1. Online Assessment"
          image={stage1}
          description="Take our quiz, then have a free consultation with one of our qualified Kiwi doctors and receive a personalised weight loss plan."
        />
        <Stage
          title="2. Medication Ships"
          image={stage2}
          description="Your state-of-the-art weight loss medication arrives in discreet packaging."
        />
        <Stage
          title="3. Ongoing Care"
          image={stage3}
          description="Your doctor will monitor your progress and make changes to your treatment as needed."
        />
      </div>
      <Button text="Take Quiz" link="/quiz" haloShade="dark" />
    </section>
  );
}
