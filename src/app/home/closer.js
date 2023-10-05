import Image from 'next/image';
import Button from '@/components/button';
import manGrinning from '/public/images/man-grinning.jpeg';

/* Final section of homepage that acts as a closing statement to the pitch. */
export default function Closer() {
  return (
    <section className="flex h-screen items-center">
      <div className="absolute h-full w-full">
        <Image
          src={manGrinning}
          alt="A short-haired man grinning widely."
          fill
          className="z-0 object-cover"
          sizes="100vw"
        />
      </div>
      <div className="flex h-full w-fit flex-col justify-center px-4 text-black drop-shadow-light xs:pl-8 sm:pl-12 lg:pl-32">
        <h1 className="text-4xl font-extrabold xs:text-5xl md:text-6xl lg:text-7xl">
          Peace of mind.
        </h1>
        <div className="max-w-4xl py-6 xs:text-lg md:text-xl lg:text-2xl">
          <p className="py-4 xs:py-6">
            <span className="font-medium italic">tiaki koe</span>
            <span className="font-light"> / look after yourself</span>
          </p>
          <p className="py-4 xs:py-6">
            Experience the peace of mind that comes with comprehensive care led
            by our independent and registered Kiwi doctors.
          </p>
          <p className="py-4 xs:py-6">
            The <span className="font-semibold">Metabolic Reset Program</span>{' '}
            uses the latest breakthrough weight loss medications that have been
            approved by the NZ Government. Saxenda, which forms the basis of our
            program, has been proven safe and effective for use in medical
            weight management.
          </p>
          <p className="py-4 xs:py-6">
            Learn more about how Reformr can help you{' '}
            <span className="font-semibold">
              lose 10-15% of your body weight in the first 12 months.
            </span>
          </p>
        </div>
        <div className="w-fit">
          <Button text="Get Started" link="/quiz" bgShade="dark" />
        </div>
      </div>
    </section>
  );
}
