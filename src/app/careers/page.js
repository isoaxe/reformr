import Image from 'next/image';
import Button from '@/components/button';
import womanWithPhone from '/public/images/woman-smiling-with-phone.jpeg';

export default function Careers() {
  return (
    <main>
      <section className="relative flex h-[80vh] items-center sm:h-screen md:h-[115vh] lg:h-[130vh] xl:h-[150vh] 2xl:h-[160vh]">
        <div className="absolute h-full w-full">
          <Image
            src={womanWithPhone}
            alt="A smiling woman looking at her phone with a neon background."
            fill
            className="z-0 object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative flex h-full w-fit max-w-xs flex-col justify-center px-4 text-black xs:ml-4 xs:max-w-sm sm:max-w-md ml:ml-8 ml:max-w-xl lg:ml-20 lg:max-w-2xl xl:ml-32 xl:max-w-3xl 2xl:max-w-4xl">
          <h1 className="text-3xl font-extrabold xs:text-4xl sm:text-5xl ml:text-6xl lg:text-7xl">
            We’re building better healthcare
          </h1>
          <p className="my-8 text-sm xs:text-base sm:my-16 sm:text-lg ml:text-xl lg:my-24 lg:text-2xl">
            Reformr creates frictionless digital experiences that democratise
            access to the latest evidence-based treatments.
          </p>
          <div className="w-fit md:pb-20 lg:pb-64 2xl:pb-96">
            <Button text="Contact Us" link="/contact" haloShade="light" />
          </div>
        </div>
      </section>
    </main>
  );
}
