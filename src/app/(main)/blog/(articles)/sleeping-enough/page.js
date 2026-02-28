import Image from 'next/image';
import Button from '@/components/button';
import { blogTileData } from '@/util/data';

export default function SleepingEnough() {
  const { date, title, image } = blogTileData[5];

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
          It’s the act of eating to cope with emotions such as stress, anxiety,
          boredom, or sadness. Emotional eating can lead to weight gain, guilt,
          and shame, and can often feel like a never-ending cycle. In this blog
          post, we’ll explore five strategies for managing emotional eating so
          you can break free from this harmful cycle and find a healthier
          relationship with food.
        </p>
        <div className="md:w-1/2">
          <Image
            src={image}
            alt="A woman in full makeup pretending to sleep on a bed."
            className="z-0 object-cover"
            sizes="(max-width: 767px) 100vw, 50vw"
            width={800}
            height={600}
          />
        </div>
      </div>
      <h2 className="mt-16 text-3xl font-semibold xs:text-4xl md:text-5xl">
        How Sleep Affects Weight Loss
      </h2>
      <p className="mt-8">
        Sleep plays a crucial role in regulating our hormones, metabolism, and
        appetite. When we don’t get enough sleep, it can disrupt these
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
        signaling the brain when we’ve had enough to eat, while ghrelin
        stimulates hunger. When we don’t get enough sleep, our leptin levels
        drop, and our ghrelin levels increase, leading to an increase in
        appetite and a tendency to overeat.
      </p>
      <h3 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        Metabolism
      </h3>
      <p className="mt-8">
        Sleep is essential for a healthy metabolism, which is the process by
        which our bodies convert food into energy. When we don’t get enough
        sleep, our metabolism slows down, which can make it more difficult to
        burn calories and lose weight.
      </p>
      <h3 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        Energy levels
      </h3>
      <p className="mt-8">
        Lack of sleep can lead to decreased energy levels, making it more
        challenging to engage in physical activity and burn calories.
        Additionally, when we’re tired, we’re more likely to reach for sugary or
        high-calorie foods to give us a quick energy boost, leading to weight
        gain.
      </p>
      <div className="mt-16 flex w-full flex-col items-center md:flex-row-reverse">
        <div className="mb-8 md:mb-0 md:ml-8 md:w-1/2">
          <h3 className="text-2xl font-semibold xs:text-3xl md:text-4xl">
            5 Tips for Improving Sleep Habits for Weight Loss
          </h3>
          <p className="mt-8">
            Now that we understand the importance of sleep for weight loss, here
            are some tips on how to improve your sleep habits to promote weight
            loss:
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/blog/posts/8/baby-yawning.jpg"
            alt="A baby wearing a hat and yawning beside a teddy in a bed."
            className="z-0 object-cover"
            sizes="(max-width: 767px) 100vw, 50vw"
            width={800}
            height={600}
          />
        </div>
      </div>
      <h3 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        1. Aim for 7-8 hours of sleep per night
      </h3>
      <p className="mt-8">
        Most adults require 7-8 hours of sleep per night to function optimally.
        Make sleep a priority by setting a regular bedtime and waking up time,
        and try to stick to it even on weekends.
      </p>
      <h3 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        2. Create a relaxing sleep environment
      </h3>
      <p className="mt-8">
        Create a peaceful sleep environment by keeping your bedroom cool, dark,
        and quiet. Use comfortable bedding and pillows, and remove any
        distractions such as TVs or computers.
      </p>
      <h3 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        3. Avoid caffeine and alcohol
      </h3>
      <p className="mt-8">
        Avoid consuming caffeine and alcohol before bedtime, as they can disrupt
        sleep and affect hormone levels.
      </p>
      <h3 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        4. Establish a bedtime routine
      </h3>
      <p className="mt-8">
        Establish a relaxing bedtime routine to signal your body that it’s time
        for sleep. This could include taking a warm bath, reading a book, or
        listening to calming music.
      </p>
      <h3 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        5. Limit screen time before bed
      </h3>
      <p className="mt-8">
        Avoid using electronic devices such as phones or computers before bed,
        as the blue light can interfere with sleep and disrupt hormone
        production.
      </p>
      <p className="mb-8 mt-16">
        Getting adequate sleep is crucial for weight loss, as it affects our
        hormones, metabolism, and appetite. By prioritising sleep and making
        simple changes to improve sleep habits, we can promote weight loss and
        improve our overall health and well-being. Remember to aim for 7-8 hours
        of sleep per night, create a relaxing sleep environment, avoid caffeine
        and alcohol, establish a bedtime routine, and limit screen time before
        bed. With these tips, you’ll be on your way to better sleep and better
        weight loss results.
      </p>
      <p>
        If you’re interested to see if{' '}
        <a href="https://reformr.co.nz" className="text-sky-700">
          Reformr
        </a>
        ’s metabolic reset programme can help you in your weight loss journey,{' '}
        <a href="/signup/screening" className="text-sky-700">
          take our free eligibility quiz
        </a>
        .
      </p>
      <div className="my-12 text-center">
        <Button text="See if you're eligible" link="/signup/screening" />
      </div>
    </main>
  );
}
