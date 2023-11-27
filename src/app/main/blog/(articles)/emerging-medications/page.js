import Image from 'next/image';
import { blogTileData } from '@/util/data';

export default function EmergingMedications() {
  const { date, title, image } = blogTileData[9];

  return (
    <main className="mx-auto flex max-w-lg flex-col px-4 text-xl md:max-w-7xl md:px-10 lg:text-2xl">
      <p className="text:lg py-8 text-center sm:text-xl md:py-16">
        {date} | Written by Luke Perry
      </p>
      <h1 className="mb-8 text-center text-4xl font-semibold xs:text-5xl md:mb-16 md:text-6xl">
        {title}
      </h1>
      <div className="flex w-full flex-col items-center md:flex-row-reverse">
        <p className="mb-8 md:ml-8 md:w-1/2">
          Obesity is a major public health concern, as it is associated with
          numerous health problems, including type 2 diabetes, cardiovascular
          disease, and certain types of cancer. While lifestyle changes such as
          a healthy diet and exercise are recommended for weight loss, some
          individuals may benefit from medications that can aid in their weight
          loss journey. In recent years, there have been several new medications
          being used for weight loss, including tirzepatide, semaglutide, and
          dulaglutide.
        </p>
        <div className="md:w-1/2">
          <Image
            src={image}
            alt="A pharmacist reaching for a box of medication on a shelf."
            className="z-0 object-cover"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </div>
    </main>
  );
}
