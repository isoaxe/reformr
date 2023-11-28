import Image from 'next/image';
import { blogTileData } from '@/util/data';

export default function IncidentalExercise() {
  const { date, title, image } = blogTileData[12];

  return (
    <main className="mx-auto flex max-w-lg flex-col px-4 text-xl md:max-w-7xl md:px-10 lg:text-2xl">
      <p className="text:lg py-8 text-center sm:text-xl md:py-16">
        {date} | Written by Benji
      </p>
      <h1 className="mb-8 text-center text-4xl font-semibold xs:text-5xl md:mb-16 md:text-6xl">
        {title}
      </h1>
      <div className="flex w-full flex-col items-center md:flex-row-reverse">
        <div className="mb-8 md:mb-0 md:ml-8 md:w-1/2">
          <p className="mb-6">
            If you’re trying to lose weight, cutting back on sugar is often one
            of the first things you’ll hear. Sugar is high in calories and has
            no nutritional value, so it’s no surprise that cutting back on sugar
            can be a quick way to cut calories and lose weight. One way that
            many people try to cut down on sugar is by drinking sugar-free
            drinks. But do these drinks actually help with weight loss?
          </p>
          <p>
            The short answer is yes, but there are some caveats to keep in mind.
            Here’s what you need to know about sugar-free drinks and weight
            loss.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src={image}
            alt="A measuring tape wrapped around a fork with a yellow background."
            className="z-0 object-cover"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </div>
    </main>
  );
}
