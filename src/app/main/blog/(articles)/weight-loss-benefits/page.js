import Image from 'next/image';
import Button from '@/components/button';
import { blogTileData } from '@/util/data';

export default function WeightLossBenefits() {
  const { date, title, image } = blogTileData[6];

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
          Losing weight can have a wide range of benefits, both physical and
          psychological. Here are some of the most significant benefits of
          weight loss.
        </p>
        <div className="md:w-1/2">
          <Image
            src={image}
            alt="A group of smiling women cycling along a tree-lined road."
            className="z-0 object-cover"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </div>
      <h2 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        1. Improved overall health
      </h2>
      <p className="mt-8">
        Losing weight can lead to improvements in many aspects of physical
        health, including reduced risk of heart disease, stroke, type 2
        diabetes, high blood pressure, and certain types of cancer.
      </p>
      <h2 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        2. Better sleep
      </h2>
      <p className="mt-8">
        Carrying extra weight can increase the risk of sleep apnea and other
        sleep disorders, which can lead to poor sleep quality and daytime
        fatigue. Losing weight can improve sleep quality and duration. If you
        want to learn more about this, we have an article on weight loss and
        sleep.
      </p>
      <h2 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        3. Increased energy levels
      </h2>
      <p className="mt-8">
        Carrying extra weight can also lead to feelings of sluggishness and
        fatigue. Losing weight can lead to increased energy levels and a greater
        sense of vitality.
      </p>
      <h2 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        4. Improved mobility
      </h2>
      <p className="mt-8">
        Extra weight can put stress on the joints, leading to pain and limited
        mobility. Losing weight can reduce this stress and make it easier to
        move around and perform physical activities.
      </p>
      <h2 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        5. Boosted self-esteem
      </h2>
      <p className="mt-8">
        Losing weight can improve body image and self-esteem, leading to
        increased confidence and a more positive outlook on life.
      </p>
      <h2 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        6. Reduced stress and anxiety
      </h2>
      <p className="mt-8">
        Carrying extra weight can also lead to increased stress and anxiety.
        Losing weight can help reduce these feelings and improve overall mental
        health.
      </p>
      <h2 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        7. Lower healthcare costs
      </h2>
      <p className="mt-8">
        By improving overall health and reducing the risk of chronic diseases,
        losing weight can also lead to lower healthcare costs over time.
      </p>
      <h2 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        8. Longer lifespan
      </h2>
      <p className="mt-8">
        Studies have shown that losing weight can increase lifespan and reduce
        the risk of premature death.
      </p>
      <h2 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        9. Improved fertility
      </h2>
      <p className="mt-8">
        Obesity can affect fertility in both men and women. Losing weight can
        increase fertility and improve the chances of a successful pregnancy.
      </p>
      <h2 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        10. Better quality of life
      </h2>
      <p className="mt-8">
        Ultimately, losing weight can lead to a better quality of life, with
        increased physical health, emotional well-being, and overall
        satisfaction.
      </p>
      <p className="mb-8 mt-16">
        It is important to note that losing weight should always be approached
        in a healthy and sustainable way, with a focus on making long-term
        lifestyle changes rather than quick fixes. Consulting with a healthcare
        professional and developing a personalized plan can help ensure a safe
        and effective approach to weight loss. With dedication and persistence,
        the benefits of weight loss can be transformative and life-changing.
      </p>
      <p>
        If you’re interested in finding out how{' '}
        <a href="https://reformr.co.nz" className="text-sky-700">
          Reformr
        </a>
        ’s metabolic reset programme can help you achieve your weight loss
        goals,{' '}
        <a href="/signup/screening" className="text-sky-700">
          take our eligibility quiz
        </a>
        .
      </p>
      <div className="my-12 text-center">
        <Button text="Find out if you're eligible" link="/signup/screening" />
      </div>
    </main>
  );
}
