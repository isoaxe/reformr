import Image from 'next/image';
import Button from '@/components/button';
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
            width={800}
            height={600}
          />
        </div>
      </div>
      <h2 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        1. Improves Physical Health
      </h2>
      <p className="mt-8">
        Exercise is known to improve cardiovascular health, increase muscle
        strength, improve balance and coordination, and reduce the risk of
        chronic diseases such as diabetes, high blood pressure, and obesity.
      </p>
      <h2 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        2. Poor nutrition
      </h2>
      <p className="mt-8">
        A healthy and balanced diet is essential for weight loss. Many people
        make the mistake of restricting their calorie intake and focusing solely
        on the number on the scale. However, it is equally important to consume
        a nutritious and well-balanced diet. Processed foods, sugary drinks, and
        snacks can hinder weight loss progress. It is important to focus on
        eating whole foods, including fruits, vegetables, lean proteins, and
        whole grains.
      </p>
      <h2 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        3. Lack of physical activity
      </h2>
      <p className="mt-8">
        Physical activity is a crucial component of weight loss. While diet
        plays a significant role, exercise can accelerate weight loss and
        improve overall health. Many people struggle to incorporate physical
        activity into their daily routine, but it is essential to establish a
        regular exercise routine to achieve weight loss goals. It can be as
        simple as taking a brisk walk, jogging, cycling, or doing any form of
        physical activity that you enjoy.
      </p>
      <h2 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        4. Underlying medical conditions
      </h2>
      <p className="mt-8">
        Underlying medical conditions such as hypothyroidism, PCOS, or sleep
        apnea can make it challenging to lose weight. These conditions can slow
        down metabolism and make it difficult to burn calories. It is essential
        to{' '}
        <a href="/signup/screening" className="text-sky-700">
          consult a healthcare professional
        </a>{' '}
        to determine if any underlying medical condition may be hindering weight
        loss progress.
      </p>
      <h2 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        5. Stress{' '}
      </h2>
      <p className="mt-8">
        Stress can have a significant impact on weight loss progress. When you
        are stressed, your body releases cortisol, which can lead to weight
        gain. Stress can also lead to emotional eating, which can hinder weight
        loss progress. It is essential to practice stress-reducing techniques
        such as meditation, deep breathing, or yoga to manage stress levels.
      </p>
      <h2 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        6. Unrealistic goals
      </h2>
      <p className="mt-8">
        Setting unrealistic weight loss goals can lead to disappointment and
        frustration. It is essential to set achievable goals and celebrate small
        milestones along the way. It is important to remember that weight loss
        is a journey and requires time, patience, and consistency.
      </p>
      <h2 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        7. Lack of accountability
      </h2>
      <p className="mt-8">
        Accountability is crucial for weight loss success. Many people struggle
        to hold themselves accountable and often give up when they do not see
        the desired results. It is essential to have a support system, whether
        it be a friend, family member, or a healthcare professional, to hold you
        accountable and provide support and motivation.
      </p>
      <h2 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        8. You need prescription medication
      </h2>
      <p className="mt-8">
        Some people have tried it all and nothing works. There are a lot of
        reasons why this may be the case. If you feel like exploring other
        options,{' '}
        <a href="/signup/screening" className="text-sky-700">
          take our quiz now
        </a>{' '}
        .
      </p>
      <p className="mb-8 mt-16">
        Losing weight can be challenging, but it is essential to identify and
        overcome the common obstacles that hinder progress. Consistency,
        nutrition, physical activity, underlying medical conditions, sleep,
        stress, unrealistic goals, and accountability are crucial factors to
        consider when working towards weight loss goals.
      </p>
      <p>
        If you are one of the many people who have struggle to lose weight,{' '}
        <a href="https://reformr.co.nz" className="text-sky-700">
          Reformr
        </a>
        ’s metabolic reset programme may be suitable for you.
      </p>
      <div className="my-12 text-center">
        <Button text="Find out if you're eligible" link="/signup/screening" />
      </div>
    </main>
  );
}
