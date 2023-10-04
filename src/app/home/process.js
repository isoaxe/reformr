import Image from 'next/image';
import stage1 from '/public/images/stage-1.png';

/* Section that outlines the stages in the process shown on the homepage. */
export default function Process() {
  /* Sub-component to show the current stage of the process */
  function Stage({ title, image, description }) {
    return (
      <div className="my-10 flex w-full flex-col font-light xs:w-72 md:my-20 lg:w-96">
        <h3 className="text-center text-lg md:text-xl lg:text-2xl">{title}</h3>
        <div className="relative my-6 aspect-square w-full">
          <Image
            src={image}
            alt="Graphic showing the current stage of the process being described."
            fill
            className="z-0 object-cover"
            sizes="18rem"
          />
        </div>
        <p className="text-lg md:text-xl lg:text-2xl">{description}</p>
      </div>
    );
  }

  return (
    <section className="my-10 px-4 md:my-28">
      <h2 className="text-center text-xl md:text-2xl lg:text-3xl">
        Personalised medical weight loss. One simple subscription.
      </h2>
      <div>
        <Stage
          title="1. Online Assessment"
          image={stage1}
          description="Take our quiz, then have a free consultation with one of our qualified Kiwi doctors and receive a personalised weight loss plan."
        />
      </div>
    </section>
  );
}
