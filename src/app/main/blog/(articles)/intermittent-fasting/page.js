import Image from 'next/image';
import Button from '@/components/button';
import { blogTileData } from '@/util/data';
import nutsAndDates from '/public/images/blog/tiles/nuts-and-dates.jpg';

export default function IntermittentFasting() {
  const { date, title } = blogTileData[7];

  return (
    <main className="mx-auto flex max-w-lg flex-col px-4 text-xl md:max-w-7xl md:px-10 lg:text-2xl">
      <p className="text:lg py-8 text-center sm:text-xl md:py-16">
        {date} | Written by Greta Perry-Brooks
      </p>
      <h1 className="mb-8 text-center text-4xl font-semibold xs:text-5xl md:mb-16 md:text-6xl">
        {title}
      </h1>
      <div className="flex w-full flex-col items-center md:flex-row-reverse">
        <p className="mb-8 md:ml-8 md:w-1/2">
          Intermittent fasting is a dietary pattern that involves alternating
          periods of fasting and non-fasting. This approach to eating has gained
          popularity in recent years due to its potential health benefits and
          its simplicity compared to traditional diets.
        </p>
        <div className="md:w-1/2">
          <Image
            src={nutsAndDates}
            alt="A plan view of three small bowls of nuts and dates."
            className="z-0 object-cover"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </div>
    </main>
  );
}
