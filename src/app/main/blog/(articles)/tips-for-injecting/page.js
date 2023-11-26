import Image from 'next/image';
import { blogTileData } from '@/util/data';
import saxendaPenClosed from '/public/images/blog/saxenda-pen-closed.png';

export default function TipsForInjecting() {
  const { date, title } = blogTileData[1];

  return (
    <main className="mx-auto flex max-w-7xl flex-col px-5 text-xl md:px-10 lg:text-2xl">
      <p className="text:lg py-8 text-center sm:text-xl md:py-16">
        {date} | Written by Greta Perry-Brooks
      </p>
      <h1 className="mb-8 text-center text-5xl font-semibold md:mb-16 md:text-6xl">
        {title}
      </h1>
      <div className="relative my-8 w-full max-w-lg self-center text-center">
        <Image
          src={saxendaPenClosed}
          alt="A Saxenda pen with the lid on."
          className="z-0 object-cover"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>
      <p className="my-8">
        Our partner doctors will always ensure to explain to you how to
        administer your prescription dose of Saxenda. Here is a step-by-step for
        reference, but always defer to your healthcare professional’s advice.
      </p>
      <p>
        If you’re after a prescription for Saxenda,{' '}
        <a href="/signup/screening" className="text-sky-700 underline">
          take our eligibility quiz now
        </a>
        .
      </p>
    </main>
  );
}
