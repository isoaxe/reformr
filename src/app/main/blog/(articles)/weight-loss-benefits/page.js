import Image from 'next/image';
import { blogTileData } from '@/util/data';
import cyclists from '/public/images/blog/tiles/smiling-cyclists.jpg';

export default function WeightLossBenefits() {
  const { date, title } = blogTileData[6];

  return (
    <main className="mx-auto flex max-w-lg flex-col px-4 text-xl md:max-w-7xl md:px-10 lg:text-2xl">
      <p className="text:lg py-8 text-center sm:text-xl md:py-16">
        {date} | Written by Greta Perry-Brooks
      </p>
      <h1 className="mb-8 text-center text-4xl font-semibold xs:text-5xl md:mb-16 md:text-6xl">
        {title}
      </h1>
      <div className="mb-8 flex w-full flex-col items-center md:flex-row-reverse">
        <p className="mb-8 md:ml-8 md:w-1/2">
          Losing weight can have a wide range of benefits, both physical and
          psychological. Here are some of the most significant benefits of
          weight loss.
        </p>
        <div className="md:w-1/2">
          <Image
            src={cyclists}
            alt="A group of smiling women cycling along a tree-lined road."
            className="z-0 object-cover"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </div>
    </main>
  );
}
