import Image from 'next/image';
import Button from '@/components/button';
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
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        Your body has adapted to the reduced calorie intake
      </h2>
      <p className="mt-8">
        When you start restricting calories, your body goes into survival mode
        and slows down your metabolism to conserve energy. This adaptation can
        make it harder to lose weight over time, as your body becomes more
        efficient at using the limited calories you are consuming. To break
        through this plateau, you may need to change up your calorie intake or
        switch to a different weight loss method altogether.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        You’re not eating enough protein
      </h2>
      <p className="mt-8">
        Protein is essential for maintaining muscle mass and keeping your
        metabolism functioning properly. If you’re not consuming enough protein
        while restricting calories, your body may start to break down muscle
        tissue for energy. This can lead to a slower metabolism and reduced
        weight loss. Aim to include protein-rich foods in every meal and snack
        to help maintain muscle mass and keep your metabolism firing.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        You’re not getting enough sleep
      </h2>
      <p className="mt-8">
        Lack of sleep can interfere with weight loss by disrupting hormones that
        regulate appetite and metabolism. When you don’t get enough sleep, your
        body produces more of the hunger hormone ghrelin and less of the satiety
        hormone leptin, which can lead to overeating and weight gain. Aim for at
        least seven to eight hours of sleep per night to help support your
        weight loss efforts.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        You’re not tracking your calorie intake accurately
      </h2>
      <p className="mt-8">
        It’s easy to underestimate the number of calories you’re consuming,
        especially when eating out or snacking on packaged foods. Keep track of
        what you eat and how many calories you’re consuming to ensure you’re
        staying within your daily calorie budget. Use a food diary or a
        calorie-tracking app to help you stay on track.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        You’re not getting enough physical activity
      </h2>
      <p className="mb-16 mt-8">
        While calorie restriction is an important part of weight loss, it’s not
        the only factor. Incorporating regular physical activity into your
        routine can help boost your metabolism, burn calories, and support
        weight loss. Aim for at least 30 minutes of moderate-intensity exercise
        most days of the week to help break through your weight loss plateau.
      </p>
      <p>
        If you’ve hit a plateau in your weight loss journey despite calorie
        restriction, its important to remember that there are many factors that
        can affect weight loss. By addressing these common reasons for a
        plateau, such as a slow metabolism, insufficient protein intake, lack of
        sleep, inaccurate tracking of calorie intake, and inadequate physical
        activity, you can break through your weight loss plateau and achieve
        your goals. Remember to always prioritize a healthy and sustainable
        approach to weight loss, and seek professional guidance if necessary.
      </p>
      <p className="mt-8">
        If you’re interested to find out if{' '}
        <a href="https://reformr.co.nz" className="text-sky-700">
          Reformr
        </a>
        ’s metabolic reset programme might help you break through you’re
        plateau,{' '}
        <a href="/signup/screening" className="text-sky-700">
          take our eligibility quiz
        </a>
        .
      </p>
      <div className="my-12 text-center">
        <Button
          text="Find out if you're eligible"
          link="/signup/screening"
          haloShade="dark"
        />
      </div>
    </main>
  );
}
