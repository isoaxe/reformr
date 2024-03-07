import Image from 'next/image';
import Button from '@/components/button';
import { blogTileData } from '@/util/data';
import needleCoin from '/public/images/blog/posts/10/saxenda-needle-with-coin-2.jpg';

export default function FearOfInjections() {
  const { date, title, image } = blogTileData[3];

  return (
    <main className="mx-auto flex max-w-lg flex-col px-4 text-xl md:max-w-7xl md:px-10 lg:text-2xl">
      <p className="text:lg py-8 text-center sm:text-xl md:py-16">
        {date} | Written by Benji
      </p>
      <h1 className="mb-8 text-center text-4xl font-semibold xs:text-5xl md:mb-16 md:text-6xl">
        {title}: why It’s not as scary as you think
      </h1>
      <div className="flex w-full flex-col items-center md:flex-row-reverse">
        <p className="mb-8 md:ml-12 md:w-1/2">
          Discover our professional guidance on administering{' '}
          <a href="https://www.saxenda.com" className="text-sky-700">
            Saxenda
          </a>{' '}
          injections, including tips on needle usage, injection sensations, and
          expert advice to ease any apprehension before your initial dosage.
        </p>
        <div className="md:w-1/2">
          <Image
            src={needleCoin}
            alt="A Saxenda pen showing it's tiny needle with a coin for scale"
            className="z-0 object-cover"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </div>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        How can Saxenda be administered?
      </h2>
      <p className="mt-8">
        This solution is exclusively administered through a pre-filled pen via a
        subcutaneous injection, which involves injecting it into the layer of
        fat located just beneath the skin.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        What is the size of needles used for Saxenda injections?
      </h2>
      <p className="my-8">
        The needles used for Saxenda injections are one of the thinnest and
        shortest needles available, at just 4mm long and 32-gauge thick. The
        higher the gauge number of a needle is, the thinner it is.
      </p>
      <div className="flex w-full flex-col items-center md:flex-row">
        <p className="mb-8 md:mb-0 md:mr-12 md:w-1/2">
          It is important to note that both the length and gauge of a needle can
          affect the level of discomfort during an injection. Due to the fact
          that Saxenda injections only need to be administered to the fatty
          layer beneath the skin, the needles used are both short and thin,
          making the injection process more comfortable than anticipated. We’ve
          included a photo with a Saxenda needle next to a New Zealand 20 cent
          coin, to provide a clearer idea of the needle’s size.
        </p>
        <div className="md:w-1/2">
          <Image
            src={image}
            alt="A Saxenda pen showing it's tiny needle with a coin for scale"
            className="z-0 object-cover"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </div>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        Does it hurt?
      </h2>
      <p className="my-8">
        Some people who have taken Saxenda report feeling nothing at all.
        Others, very mild discomfort. Typically, when the needle initially
        penetrates the skin, you may experience a slight pinching sensation.
        This is due to the nerves in the outer layer of our skin that send pain
        signals to our brains when stimulated by sharp objects. However, these
        nerves are significantly less present in the fatty layer just under the
        skin. This means that once the needle has entered this layer, the
        pinching should subside, and you are unlikely to experience any further
        discomfort during the administration of your dose.
      </p>
      <p>
        In comparison to other procedures, such as piercings, vaccinations, or
        finger-prick blood tests, injecting Saxenda is typically much more
        comfortable.
      </p>
      <p className="mt-16">
        If you’d like tips on administering your first dose of Saxenda, click
        here.
      </p>
      <p className="mt-8">
        If you live in New Zealand and you’re interested in discovering how
        Saxenda may be able to assist your weight loss journey, start by{' '}
        <a href="/signup/screening" className="text-sky-700">
          taking our free eligibility quiz
        </a>
        .
      </p>
      <div className="my-12 text-center">
        <Button text="Find out if you're eligible" link="/signup/screening" />
      </div>
    </main>
  );
}
