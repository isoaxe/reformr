import Image from 'next/image';
import Button from '@/components/button';
import { blogTileData } from '@/util/data';
import womanSleeping from '/public/images/blog/tiles/woman-sleeping.jpg';

export default function TipsForInjecting() {
  const { date, title } = blogTileData[5];

  return (
    <main className="mx-auto flex max-w-lg flex-col px-4 text-xl md:max-w-7xl md:px-10 lg:text-2xl">
      <p className="text:lg py-8 text-center sm:text-xl md:py-16">
        {date} | Written by Luke Perry
      </p>
      <h1 className="mb-8 text-center text-4xl font-semibold xs:text-5xl md:mb-16 md:text-6xl">
        {title}
      </h1>
      <div className="flex w-full flex-col items-center md:flex-row-reverse">
        <p className="mb-8 md:mb-0 md:ml-8 md:w-1/2">
          Emotional eating is a common issue that many people struggle with.
          It&apos;s the act of eating to cope with emotions such as stress,
          anxiety, boredom, or sadness. Emotional eating can lead to weight
          gain, guilt, and shame, and can often feel like a never-ending cycle.
          In this blog post, we&apos;ll explore five strategies for managing
          emotional eating so you can break free from this harmful cycle and
          find a healthier relationship with food.
        </p>
        <div className="md:w-1/2">
          <Image
            src={womanSleeping}
            alt="A woman in full makeup pretending to sleep on a bed."
            className="z-0 object-cover"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </div>
    </main>
  );
}
