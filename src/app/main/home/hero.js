'use client';

import { TypeAnimation } from 'react-type-animation';
import { PiCaretDownLight } from 'react-icons/pi';
import PlayBgVideo from '@/components/play-bg-video';
import TrustBox from '@/components/trustpilot';
import Button from '@/components/button';
import { useDeviceType } from '@/util/hooks';

/* Hero section that the user first sees at the top of the homepage. */
export default function Hero() {
  const interval = 2000;
  const deviceType = useDeviceType();

  return (
    <section className="relative h-[88vh]">
      <PlayBgVideo
        className="fixed z-0 h-full w-full object-cover"
        videoSrc="../videos/home-hero.mp4"
        altText="Slow-motion video of a woman slowly exhaling whilst rolling her shoulders."
      />
      <div className="relative flex h-full w-full flex-col justify-center bg-blue-600 bg-opacity-20 px-4 text-white xs:pl-12 lg:pl-32">
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
          className="text-4xl font-extrabold text-white xs:text-5xl md:text-6xl lg:text-7xl"
          repeat={Infinity}
        />
        <h1 className="mt-4 text-4xl font-extrabold xs:text-5xl md:text-6xl lg:text-7xl">
          weight loss
        </h1>
        <h2 className="my-8 mr-8 max-w-2xl text-xl font-bold leading-snug xs:text-2xl md:text-3xl lg:text-4xl">
          Prescription medication that addresses weight at a biological level.
        </h2>
        <div className="w-fit">
          <Button text="Take the Quiz" link="/signup/screening" />
        </div>
        <div className="-ml-20 mt-6 w-96">
          <TrustBox />
        </div>
        <PiCaretDownLight
          size={50}
          className={`absolute bottom-0 left-0 mx-auto animate-bounce ${
            deviceType === 'Desktop' ? 'right-4' : 'right-0'
          }`}
        />
        <div className="absolute bottom-0 right-0 h-0 w-0 border-l-[50vw] border-r-[50vw] border-t-[3rem] border-l-slate-200 border-r-slate-200 border-t-transparent md:border-t-[6rem]">
          {/* Overlay at the bottom of the video to create triangular shape. */}
        </div>
      </div>
    </section>
  );
}
