import Image from 'next/image';
import Button from '@/components/button';
import vial from '/public/images/vial.jpg';

/* Three sections of the homepage that comprise the product pitch. */
export default function Advantages() {
  return (
    <>
      <section className="flex flex-col-reverse items-center justify-center bg-sky-200 px-4 py-20 xs:px-9 lg:flex-row lg:py-32">
        <div className="mr-4 mt-12 flex max-w-2xl flex-col items-center lg:mt-0 lg:max-w-lg lg:items-start xl:mr-32 2xl:mr-56 2xl:max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold md:mb-16 md:text-3xl lg:text-4xl">
            Experience the next generation of weight loss.
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
    </>
  );
}
