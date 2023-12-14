import Image from 'next/image';
import Button from '@/components/button';
import { blogTileData } from '@/util/data';

export default function EmotionalEating() {
  const { date, title, image } = blogTileData[4];

  return (
    <main className="mx-auto flex max-w-lg flex-col px-4 text-xl md:max-w-7xl md:px-10 lg:text-2xl">
      <p className="text:lg py-8 text-center sm:text-xl md:py-16">
        {date} | Written by Greta Perry-Brooks
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
            alt="Several baskets of vegatables including carrots, cucumbers and chillis."
            className="z-0 object-cover"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </div>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        1. Recognise Your Triggers
      </h2>
      <p className="mt-8">
        The first step in managing emotional eating is to identify your
        triggers. What situations or emotions cause you to turn to food for
        comfort? For some, it may be stress at work, while for others, it could
        be feelings of loneliness. Once you identify your triggers, you can come
        up with alternative coping mechanisms.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        2. Practice Mindful Eating
      </h2>
      <p className="mt-8">
        Mindful eating is a powerful tool for managing emotional eating. It
        involves being present and fully engaged in the act of eating, paying
        attention to the colors, textures, and tastes of the food. When you eat
        mindfully, you become more aware of your hunger and fullness cues,
        making it easier to stop eating when you’re satisfied. Additionally,
        practicing mindfulness in other areas of your life, such as through
        meditation or yoga, can help you manage your emotions and reduce stress.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        3. Find Other Ways to Cope
      </h2>
      <p className="mt-8">
        One of the most effective ways to manage emotional eating is to find
        alternative coping mechanisms. For example, instead of reaching for a
        bag of chips when you’re feeling stressed, try going for a walk, calling
        a friend, or practicing deep breathing exercises. By finding healthier
        ways to cope with your emotions, you’ll be less likely to turn to food
        for comfort.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        4. Plan Ahead
      </h2>
      <p className="mt-8">
        Another strategy for managing emotional eating is to plan ahead. If you
        know you tend to overeat when you’re feeling anxious or bored, make sure
        to have healthy snacks on hand, such as fruit, vegetables, or nuts. By
        having healthy options readily available, you’ll be less likely to reach
        for junk food or sweets.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        5. Seek Support
      </h2>
      <p className="mt-8">
        Finally, seeking support from friends, family, or a therapist can be
        incredibly helpful in managing emotional eating. Talking to someone
        about your struggles with food can help you gain insight into your
        behavior and provide you with new coping strategies. Additionally,
        joining a support group or seeking professional help can provide you
        with the tools you need to break free from emotional eating for good.
      </p>
      <p className="mb-8 mt-16">
        In conclusion, emotional eating can be a challenging issue to overcome,
        but with these five strategies, you can start to manage your emotions
        and develop a healthier relationship with food. Remember to recognize
        your triggers, practice mindful eating, find other ways to cope, plan
        ahead, and seek support. With time, patience, and persistence, you can
        break free from emotional eating and achieve a happier, healthier life.
      </p>
      <p>
        If you’re interested in finding out how{' '}
        <a href="https://reformr.co.nz" className="text-sky-700">
          Reformr
        </a>
        ’s metabolic reset programme can assist you in your weight loss journey,{' '}
        <a href="/signup/screening" className="text-sky-700">
          take our free eligibility quiz
        </a>
        .
      </p>
      <div className="my-12 text-center">
        <Button text="Find out if you're eligible" link="/signup/screening" />
      </div>
    </main>
  );
}
