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
      <h2 className="mt-16 text-3xl font-semibold xs:text-4xl md:text-5xl">
        How Sleep Affects Weight Loss
      </h2>
      <p className="mt-8">
        Sleep plays a crucial role in regulating our hormones, metabolism, and
        appetite. When we don&apos;t get enough sleep, it can disrupt these
        processes, leading to changes in our hunger hormones and energy balance,
        which can ultimately affect our weight. Here are some ways sleep affects
        weight loss:
      </p>
      <h3 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        Hormone regulation
      </h3>
      <p className="mt-8">
        Sleep helps regulate the production of key hormones that play a role in
        weight loss, including leptin and ghrelin. Leptin is responsible for
        signaling the brain when we&apos;ve had enough to eat, while ghrelin
        stimulates hunger. When we don&apos;t get enough sleep, our leptin
        levels drop, and our ghrelin levels increase, leading to an increase in
        appetite and a tendency to overeat.
      </p>
      <h3 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        Metabolism
      </h3>
      <p className="mt-8">
        Sleep is essential for a healthy metabolism, which is the process by
        which our bodies convert food into energy. When we don&apos;t get enough
        sleep, our metabolism slows down, which can make it more difficult to
        burn calories and lose weight.
      </p>
      <h3 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        Energy levels
      </h3>
      <p className="mt-8">
        Lack of sleep can lead to decreased energy levels, making it more
        challenging to engage in physical activity and burn calories.
        Additionally, when we&apos;re tired, we&apos;re more likely to reach for
        sugary or high-calorie foods to give us a quick energy boost, leading to
        weight gain.
      </p>
    </main>
  );
}
