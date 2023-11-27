import Image from 'next/image';
import { blogTileData } from '@/util/data';
import penOpen from '/public/images/blog/posts/11/ozempic-pen-open-vert.jpg';

export default function Ozempic101() {
  const { date, title } = blogTileData[2];

  return (
    <main className="mx-auto flex max-w-lg flex-col px-4 text-xl md:max-w-7xl md:px-10 lg:text-2xl">
      <p className="text:lg py-8 text-center sm:text-xl md:py-16">
        {date} | Written by Benji
      </p>
      <h1 className="mb-8 text-center text-4xl font-semibold xs:text-5xl md:mb-16 md:text-6xl">
        {title}
      </h1>
      <div className="mb-8 flex w-full flex-col items-center md:flex-row">
        <p className="mb-8 md:mb-0 md:mr-8 md:mt-0 md:w-1/2 lg:mr-16">
          A Beginner&apos;s Guide to Ozempic (Semaglutide): Understanding its
          Role in Weight Loss Treatment and Administration
        </p>
        <div className="md:w-1/2">
          <Image
            src={penOpen}
            alt="An open Ozempic pen."
            className="z-0 object-cover"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </div>
    </main>
  );
}
