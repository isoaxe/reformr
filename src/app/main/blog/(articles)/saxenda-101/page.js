import Image from 'next/image';
import Button from '@/components/button';
import { blogTileData } from '@/util/data';
import saxendaPenClosed from '/public/images/blog/saxenda-pen-closed.jpg';

export default function Saxenda101() {
  const { date } = blogTileData[0];

  return (
    <main className="flex flex-col items-center">
      <p className="text:lg py-8 sm:text-xl md:py-16">
        {date} | Written by Luke Perry
      </p>
      <h1 className="mb-8 text-5xl font-semibold md:text-6xl">Saxenda 101</h1>
      <div className="mb-8 flex w-full flex-col md:mb-16 md:flex-row">
        <div className="relative mx-5 aspect-video md:mx-10 md:w-1/2">
          <Image
            src={saxendaPenClosed}
            alt="A Saxenda pen with the lid on."
            fill
            className="z-0 object-cover"
            sizes="100vw"
          />
        </div>
        <div className="my-auto ml-5 mt-5 flex h-full flex-col text-xl md:ml-0 md:mr-5 lg:text-2xl xl:text-3xl">
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
      <Button
        text="Find out if you're eligible"
        link="/signup/screening"
        haloShade="light"
      />
    </main>
  );
}
