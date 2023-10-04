'use client';

import Button from '@/components/button';
import { TypeAnimation } from 'react-type-animation';

/* Hero section that the user first sees at the top of the homepage. */
export default function Hero() {
  const interval = 2000;

  return (
    <section className="relative h-[calc(100vh-3rem)] md:h-[calc(100vh-4rem)]">
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 h-full w-full object-cover"
        alt="Slow-motion video of a woman slowly exhaling whilst rolling her shoulders."
      >
        <source src="videos/home-hero.mp4" type="video/mp4" />
      </video>
      <div className="pt- relative flex h-full w-fit flex-col justify-center px-4 text-white drop-shadow-black xs:pl-12 lg:pl-32">
        <TypeAnimation
          sequence={[
            'TRANSFORMATIVE',
            interval,
            'SUSTAINABLE',
            interval,
            'PRECISION',
            interval,
            'EMPOWERING',
            interval,
            'PROVEN',
            interval,
            'CONVENIENT',
            interval,
            'POWERFUL',
            interval,
            'REVOLUTIONARY',
            interval,
          ]}
          speed={50}
          className="w-fit bg-gradient-to-l from-violet-300 to-violet-600 bg-clip-text text-4xl font-extrabold text-transparent xs:text-5xl md:text-6xl lg:text-7xl"
          repeat={Infinity}
        />
        <h1 className="mt-4 text-4xl font-extrabold xs:text-5xl md:text-6xl lg:text-7xl">
          weight loss
        </h1>
        <h2 className="my-8 mr-8 max-w-2xl text-xl font-bold leading-snug xs:text-2xl md:text-3xl lg:text-4xl">
          Prescription medication that addresses weight at a biological level.
        </h2>
        <div className="w-fit">
          <Button text="Check Eligibility" link="/quiz" bgShade="dark" />
        </div>
      </div>
    </section>
  );
}
