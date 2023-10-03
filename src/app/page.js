'use client';

import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  const interval = 2000;

  return (
    <main>
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
        <div className="relative flex flex-col pl-32 pt-72 text-white drop-shadow-black">
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
            className="text-7xl font-extrabold"
            repeat={Infinity}
          />
          <h1 className="mb-8 mt-4 text-7xl font-extrabold">weight loss</h1>
          <h2 className="max-w-2xl text-4xl font-bold leading-snug">
            Prescription medication that addresses weight at a biological level.
          </h2>
        </div>
      </section>
    </main>
  );
}
