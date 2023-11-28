import Image from 'next/image';
import { blogTileData } from '@/util/data';

export default function IncidentalExercise() {
  const { date, title, image } = blogTileData[11];

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
          Calorie restriction is a common method used for weight loss. However,
          many people find themselves hitting a plateau where they no longer see
          results, despite continuing to restrict their calorie intake. If
          you’re in this situation, it can be frustrating and discouraging. In
          this article, we will explore five reasons why calorie restriction may
          not be working for your weight loss goals.
        </p>
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
