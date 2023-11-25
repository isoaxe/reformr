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
      <h2 className="mt-16 text-4xl font-medium md:text-5xl">
        What actually is Saxenda?
      </h2>
      <p className="my-8">
        <a href="https://www.saxenda.com" className="text-sky-700 underline">
          Saxenda
        </a>{' '}
        is a once-daily injectable Glucagon-Like Peptide-1 Receptor Agonist, or
        GLP-1 for short.
      </p>
      <p>
        GLP-1s are a class of medications that first hit the market in 2005, and
        now there are a number of GLP-1 medications on the market, including{' '}
        <a href="https://www.ozempic.com" className="text-sky-700 underline">
          Ozempic
        </a>
        ,{' '}
        <a href="https://www.trulicity.com" className="text-sky-700 underline">
          Trulicity
        </a>
        , and Saxenda. GLP-1’s were initially and still are being used for
        managing Type 2 Diabetes. Interestingly, it was found that all these
        people with diabetes were not only succeeding with better blood sugar
        control, but they were also losing weight.
      </p>
    </main>
  );
}
