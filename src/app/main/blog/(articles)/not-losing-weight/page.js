import Image from 'next/image';
import { blogTileData } from '@/util/data';

export default function IncidentalExercise() {
  const { date, title, image } = blogTileData[10];

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
          Losing weight can be a daunting task for many individuals, and often
          it can be frustrating to not see the desired results despite putting
          in a lot of effort. While there can be numerous reasons why someone
          may struggle to lose weight, there are certain common factors that can
          hinder progress. In this article, we will discuss the top 8 reasons
          why people fail to lose weight and provide tips on how to overcome
          these obstacles.
        </p>
        <div className="md:w-1/2">
          <Image
            src={image}
            alt="A slender woman holding a measuring tape around her waist."
            className="z-0 object-cover"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </div>
    </main>
  );
}
