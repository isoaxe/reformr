import Image from 'next/image';
import Button from '@/components/button';
import vial from '/public/images/vial.jpg';
import dna from '/public/images/dna.jpg';
import labLady from '/public/images/lab-lady.png';

/* Three sections of the homepage that comprise the product pitch. */
export default function Advantages() {
  const BulletPoint = ({ text }) => (
    <div className="my-1 flex flex-row items-start lg:my-2">
      <div className="mr-2 mt-3 aspect-square h-1.5 rounded-full border border-black lg:mt-3.5"></div>
      <p className="text-lg font-light md:text-xl lg:text-2xl">{text}</p>
    </div>
  );

  return (
    <>
      <section className="flex flex-col-reverse items-center justify-center bg-sky-200 px-4 py-20 xs:px-9 lg:flex-row lg:py-32">
        <div className="mr-8 mt-12 flex max-w-2xl flex-col items-center lg:mt-0 lg:max-w-lg lg:items-start xl:mr-32 2xl:mr-56 2xl:max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold md:mb-16 md:text-3xl lg:text-4xl">
            Experience the next generation of weight loss
          </h2>
          <p className="mb-4 text-lg font-light md:mb-8 md:text-xl lg:text-2xl">
            Reformr combines state-of-the-art prescription weight loss
            medications with personalised health coaching. Backed by the latest
            research, the Metabolic Reset Program will empower you to take
            control of your biology and achieve real, lasting results.
          </p>
          <p className="mb-8 text-lg font-light md:mb-16 md:text-xl lg:text-2xl">
            On average, Reformr members{' '}
            <span className="font-semibold">
              lose over twice as much weight
            </span>{' '}
            compared with diet and exercise alone.
          </p>
          <Button text="Start Consult" link="/quiz" bgShade="light" />
        </div>
        <div className="relative aspect-square w-full max-w-md rounded-full shadow-2xl lg:max-w-lg">
          <Image
            src={vial}
            alt="Close-up of a vial being held by a lab technician in the background."
            fill
            className="z-0 rounded-full object-cover"
            sizes="32rem"
          />
        </div>
      </section>
      <section className="flex flex-col-reverse items-center justify-center px-4 py-20 xs:px-9 lg:flex-row-reverse lg:py-32">
        <div className="ml-8 mt-12 flex max-w-2xl flex-col items-center lg:mt-0 lg:max-w-lg lg:items-start xl:ml-32 2xl:ml-56 2xl:max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold md:mb-16 md:text-3xl lg:text-4xl">
            Cutting-edge medications
          </h2>
          <p className="mb-8 text-lg font-light md:mb-16 md:text-xl lg:text-2xl">
            Discover how GLP-1 medications like{' '}
            <span className="font-semibold">Saxenda (liraglutide)</span> are
            being used as{' '}
            <span className="font-semibold">powerful weight loss tools</span>{' '}
            that are revolutionising how hundreds of thousands of people are
            losing weight.
          </p>
          <Button text="Begin Assessment" link="/quiz" bgShade="light" />
        </div>
        <div className="relative aspect-square w-full max-w-md rounded-full shadow-2xl lg:max-w-lg">
          <Image
            src={dna}
            alt="Stylised graphic of a DNA strand with blue hue."
            fill
            className="z-0 rounded-full object-cover"
            sizes="32rem"
          />
        </div>
      </section>
      <section className="flex flex-col-reverse items-center justify-center bg-pink-200 px-4 py-20 xs:px-9 lg:flex-row lg:py-32">
        <div className="mr-8 mt-12 flex max-w-2xl flex-col items-center lg:mt-0 lg:max-w-lg lg:items-start xl:mr-32 2xl:mr-56 2xl:max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold md:mb-16 md:text-3xl lg:text-4xl">
            More than just weight loss
          </h2>
          <p className="mb-1 text-lg font-light md:text-xl lg:text-2xl">
            Reformr members can expect a range of potential physical and mental
            health benefits including:
          </p>
          <div className="mb-8 ml-6 self-start md:mb-16 lg:ml-8">
            <BulletPoint text="Improved metabolic health." />
            <BulletPoint text="Reduced cardiovascular risk factors like cholesterol." />
            <BulletPoint text="Reversal of fatty liver." />
            <BulletPoint text="Improvements in depression, anxiety, and quality of life." />
          </div>
          <Button text="Knowledge Centre" link="/blog" bgShade="light" />
        </div>
        <div className="relative aspect-square w-full max-w-md rounded-full shadow-2xl lg:max-w-lg">
          <Image
            src={labLady}
            alt="A smiling woman in a lab with her arms crossed."
            fill
            className="z-0 rounded-full object-cover"
            sizes="32rem"
          />
        </div>
      </section>
    </>
  );
}
