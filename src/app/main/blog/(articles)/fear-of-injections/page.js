import Image from 'next/image';
import Button from '@/components/button';
import { blogTileData } from '@/util/data';
import needleCoin1 from '/public/images/blog/tiles/saxenda-needle-with-coin.jpg';
import needleCoin2 from '/public/images/blog/posts/10/saxenda-needle-with-coin-2.jpg';

export default function FearOfInjections() {
  const { date, title } = blogTileData[3];

  return (
    <main className="mx-auto flex max-w-lg flex-col px-4 text-xl md:max-w-7xl md:px-10 lg:text-2xl">
      <p className="text:lg py-8 text-center sm:text-xl md:py-16">
        {date} | Written by Benji
      </p>
      <h1 className="mb-8 text-center text-4xl font-semibold xs:text-5xl md:mb-16 md:text-6xl">
        {title}: why It&apos;s not as scary as you think
      </h1>
      <div className="mb-8 flex w-full flex-col items-center md:flex-row-reverse">
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
            src={needleCoin2}
            alt="A Saxenda pen showing it's tiny needle with a coin for scale"
            className="z-0 object-cover"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </div>
    </main>
  );
}
