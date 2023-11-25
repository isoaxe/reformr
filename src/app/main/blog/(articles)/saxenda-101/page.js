import Image from 'next/image';
import Button from '@/components/button';
import { blogTileData } from '@/util/data';
import saxendaPenClosed from '/public/images/blog/saxenda-pen-closed.jpg';

export default function Saxenda101() {
  const { date } = blogTileData[0];

  return (
    <main className="mx-auto flex max-w-7xl flex-col px-5 text-xl md:px-10 lg:text-2xl">
      <p className="text:lg py-8 text-center sm:text-xl md:py-16">
        {date} | Written by Luke Perry
      </p>
      <h1 className="mb-8 text-center text-5xl font-semibold md:mb-16 md:text-6xl">
        Saxenda 101
      </h1>
      <div className="mb-8 flex w-full flex-col md:mb-16 md:flex-row">
        <div className="relative aspect-video md:w-1/2">
          <Image
            src={saxendaPenClosed}
            alt="A Saxenda pen with the lid on."
            fill
            className="z-0 object-cover"
            sizes="100vw"
          />
        </div>
        <div className="my-auto mt-5 flex h-full flex-col md:ml-5 md:mt-0">
          <p>What is Saxenda?</p>
          <p className="my-3 lg:my-6 xl:my-8">
            Perhaps you’ve heard about it in the media?
          </p>
          <p>Perhaps you known someone taking it?</p>
          <p className="my-3 lg:my-6 xl:my-8">
            In this blog, we’re going to unpack all things Saxenda.
          </p>
          <p>So, lets get into it.</p>
        </div>
      </div>
      <div className="text-center">
        <Button
          text="Find out if you're eligible"
          link="/signup/screening"
          haloShade="light"
        />
      </div>
    </main>
  );
}
