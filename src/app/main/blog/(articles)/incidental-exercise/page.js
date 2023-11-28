import Image from 'next/image';
import Button from '@/components/button';
import { blogTileData } from '@/util/data';
import exerciseClass from '/public/images/blog/posts/5/exercise-class.jpg';

export default function IncidentalExercise() {
  const { date, title, image } = blogTileData[8];

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
            src={image}
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
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        Benefits of Exercise
      </h2>
      <p className="mt-8">
        Regular exercise is crucial for maintaining good health and well-being.
        It has several benefits, including:
      </p>
      <h3 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        1. Improves Physical Health
      </h3>
      <p className="mt-8">
        Exercise is known to improve cardiovascular health, increase muscle
        strength, improve balance and coordination, and reduce the risk of
        chronic diseases such as diabetes, high blood pressure, and obesity.
      </p>
      <h3 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        2. Improves Mental Health
      </h3>
      <p className="mt-8">
        Exercise is also essential for improving mental health. It helps reduce
        stress, anxiety, and depression, and improves overall mood.
      </p>
      <h3 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        3. Increases Energy Levels
      </h3>
      <p className="mt-8">
        Regular exercise boosts energy levels and reduces fatigue. It also
        improves sleep quality, leading to better overall health.
      </p>
      <h3 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        4. Boosts Immune System
      </h3>
      <p className="mt-8">
        Exercise is known to boost the immune system and reduce the risk of
        diseases.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        How much exercise should one be doing?
      </h2>
      <div className="mt-8 flex w-full flex-col items-center md:flex-row-reverse">
        <p className="mb-8 md:ml-8 md:w-1/2">
          The{' '}
          <a
            href="https://www.heart.org/en/healthy-living/fitness/fitness-basics/aha-recs-for-physical-activity-in-adults"
            className="text-sky-700"
          >
            American Heart Association
          </a>{' '}
          recommends at least 150 minutes of moderate-intensity aerobic activity
          per week or 75 minutes of vigorous-intensity aerobic activity per
          week. Additionally, they suggest adding muscle-strengthening
          activities two or more days per week.
        </p>
        <div className="md:w-1/2">
          <Image
            src={exerciseClass}
            alt="A group of people exercising in a yard."
            className="z-0 object-cover"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </div>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        Seven ways to increase incidental exercise in your day:
      </h2>
      <h3 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        1. Walking
      </h3>
      <p className="mt-8">
        Walking is a simple yet effective way to increase physical activity. You
        can walk to the grocery store, walk to work, or even take a short walk
        during your lunch break. Walking is a low-impact exercise that can help
        improve cardiovascular health, strengthen muscles, and burn calories.
      </p>
      <h3 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        2. Taking the Stairs
      </h3>
      <p className="mt-8">
        Taking the stairs instead of the elevator is a great way to incorporate
        incidental exercise into your day. It helps improve leg strength,
        cardiovascular health, and burns calories.
      </p>
      <h3 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        3. Standing and Stretching
      </h3>
      <p className="mt-8">
        Standing and stretching periodically throughout the day is an easy way
        to break up long periods of sitting. It helps improve posture, reduces
        back pain, and improves blood flow to the muscles.
      </p>
      <h3 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        4. Household Chores
      </h3>
      <p className="mt-8">
        Doing household chores such as vacuuming, washing dishes, or gardening
        can help increase physical activity. These activities can help burn
        calories, improve cardiovascular health, and increase muscle strength.
      </p>
      <h3 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        5. Active Commuting
      </h3>
      <p className="mt-8">
        If possible, consider biking, walking, or running to work or school.
        This can help improve cardiovascular health, reduce stress, and increase
        physical activity levels.
      </p>
      <h3 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        6. Taking Active Breaks
      </h3>
      <p className="mt-8">
        Instead of taking a coffee or snack break, consider taking an active
        break. You can take a quick walk or stretch, do some push-ups, or
        jumping jacks. These activities can help break up long periods of
        sitting and increase physical activity levels.
      </p>
      <h3 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        7. Joining Group Activities
      </h3>
      <p className="mt-8">
        Joining group activities such as dance classes, sports teams, or hiking
        groups is a great way to increase incidental exercise. Group activities
        not only provide social benefits but also help increase physical
        activity levels and improve overall health.
      </p>
      <p className="mb-8 mt-16">
        Starting an exercise routine can be challenging, and it&apos;s essential
        to be kind to yourself. Don&apos;t beat yourself up if you miss a
        workout or if it takes longer than expected to see progress. Celebrate
        the small victories and remember that any exercise is better than none.
      </p>
      <p>
        If you are looking for innovative ways to augment your weight loss
        journey. Start by taking{' '}
        <a href="https://reformr.co.nz" className="text-sky-700">
          Reformr
        </a>
        ’s metabolic reset program eligibility quiz.
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
