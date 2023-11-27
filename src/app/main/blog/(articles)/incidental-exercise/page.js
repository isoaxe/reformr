import Image from 'next/image';
import { blogTileData } from '@/util/data';
import sunflower from '/public/images/blog/tiles/woman-with-sunflowers.jpg';

export default function IncidentalExercise() {
  const { date, title } = blogTileData[8];

  return (
    <main className="mx-auto flex max-w-lg flex-col px-4 text-xl md:max-w-7xl md:px-10 lg:text-2xl">
      <p className="text:lg py-8 text-center sm:text-xl md:py-16">
        {date} | Written by Benji
      </p>
      <h1 className="mb-8 text-center text-4xl font-semibold xs:text-5xl md:mb-16 md:text-6xl">
        {title}: 7 fun and easy ways to move more every day
      </h1>
      <div className="flex w-full flex-col items-center md:flex-row-reverse">
        <p className="mb-8 md:ml-8 md:w-1/2">
          In today&apos;s sedentary lifestyle, where we spend most of our day
          sitting in front of screens, incorporating exercise into our daily
          routine has become more critical than ever.
        </p>
        <div className="md:w-1/2">
          <Image
            src={sunflower}
            alt="A smiling woman with arms outstretched by a field of sunflowers."
            className="z-0 object-cover"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </div>
      <p className="my-8">
        Any weight loss program, such as the one{' '}
        <a href="https://reformr.co.nz" className="text-sky-700">
          Reformr
        </a>{' '}
        offers, is most effective alongside lifestyle changes. Incidental
        exercise is an easy and effective way to increase physical activity
        without dedicating time specifically for exercise.{' '}
      </p>
      <p>
        Incidental exercise refers to the physical activity that we do as part
        of our daily activities, such as walking to the grocery store, taking
        the stairs instead of the elevator, or even just standing up and
        stretching periodically throughout the day. In this essay, we will
        discuss seven ways to increase incidental exercise in your day, the
        benefits of exercise, and how much exercise one should be doing.
      </p>
    </main>
  );
}
