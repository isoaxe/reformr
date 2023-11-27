import Image from 'next/image';
import Button from '@/components/button';
import { blogTileData } from '@/util/data';
import nutsAndDates from '/public/images/blog/tiles/nuts-and-dates.jpg';

export default function IntermittentFasting() {
  const { date, title } = blogTileData[7];

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
          Intermittent fasting is a dietary pattern that involves alternating
          periods of fasting and non-fasting. This approach to eating has gained
          popularity in recent years due to its potential health benefits and
          its simplicity compared to traditional diets.
        </p>
        <div className="md:w-1/2">
          <Image
            src={nutsAndDates}
            alt="A plan view of three small bowls of nuts and dates."
            className="z-0 object-cover"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </div>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        The Science Behind Intermittent Fasting
      </h2>
      <p className="my-8">
        Intermittent fasting works by limiting the time frame in which one
        consumes food, which can lead to a reduction in overall calorie intake.
        This can result in weight loss and improvements in metabolic health
        markers such as blood sugar levels and insulin sensitivity.
      </p>
      <p>
        There are several different types of intermittent fasting, including
        alternate-day fasting, where one alternates between days of normal
        eating and days of consuming fewer calories, and time-restricted eating,
        where one eats during a limited time window each day, typically 8-10
        hours.
      </p>
      <p className="mt-8">
        During a period of fasting, the body begins to rely on stored energy
        sources such as fat for fuel instead of glucose. This can result in a
        state of ketosis, where the body produces ketones, which are a type of
        molecule that can be used as an energy source for the brain and body.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        4 Potential Benefits of Intermittent Fasting
      </h2>
      <h3 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        1. Weight Loss
      </h3>
      <p className="mt-8">
        Intermittent fasting can lead to weight loss due to a reduction in
        overall calorie intake.{' '}
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/28537332"
          className="text-sky-700"
        >
          Studies
        </a>{' '}
        have shown that intermittent fasting can be effective just like
        traditional calorie restriction for weight loss, with{' '}
        <a
          href="https://www.ahajournals.org/doi/10.1161/JAHA.122.026484"
          className="text-sky-700"
        >
          some studies
        </a>{' '}
        even suggesting that it may be more effective.
      </p>
      <h3 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        2. Improved Metabolic Health
      </h3>
      <p className="mt-8">
        Intermittent fasting{' '}
        <a
          href="https://www.nia.nih.gov/news/research-intermittent-fasting-shows-health-benefits"
          className="text-sky-700"
        >
          has been shown
        </a>{' '}
        to improve blood sugar control and insulin sensitivity, which can help
        prevent and manage type 2 diabetes. It may also lead to improvements in
        other markers of metabolic health, such as cholesterol levels and blood
        pressure.
      </p>
      <h3 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        3. Reduced Inflammation
      </h3>
      <p className="mt-8">
        Intermittent fasting has been shown to reduce inflammation in the body,
        which can be beneficial for a variety of health conditions, including
        arthritis and autoimmune diseases.
      </p>
      <h3 className="mt-12 text-2xl font-medium xs:text-3xl md:text-4xl">
        4. Longevity
      </h3>
      <p className="mt-8">
        <a
          href="https://onlinelibrary.wiley.com/doi/full/10.1111/joim.13530"
          className="text-sky-700"
        >
          Some animal studies
        </a>{' '}
        have suggested that intermittent fasting may increase lifespan and
        improve age-related health outcomes, though more research is needed in
        humans to confirm these findings.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        Considerations When Trying Intermittent Fasting
      </h2>
      <p className="my-8">
        While intermittent fasting can be an effective and healthy approach to
        eating, there are some considerations to keep in mind when trying this
        approach.
      </p>
      <p>
        <span className="font-semibold underline">Individual Variability:</span>{' '}
        Intermittent fasting may not be suitable for everyone, as individual
        responses to fasting can vary. It is important to consult with a
        healthcare professional before starting intermittent fasting, especially
        if you have a history of disordered eating or any medical conditions.
      </p>
      <p className="my-8">
        <span className="font-semibold underline">Hunger and Cravings:</span>{' '}
        Fasting can lead to feelings of hunger and cravings, which may be
        challenging to manage, especially in the beginning stages. It is
        important to listen to your body and eat when you feel hungry to avoid
        overeating during your feeding periods.
      </p>
      <p>
        <span className="font-semibold underline">Nutrient Deficiencies:</span>{' '}
        If not done correctly, intermittent fasting can lead to nutrient
        deficiencies, especially if one is not consuming a balanced diet during
        their feeding periods. It is important to ensure that you are getting
        adequate nutrition and consuming a variety of nutrient-dense foods.
      </p>
      <p className="my-8">
        Intermittent fasting is a dietary approach that involves alternating
        periods of fasting and non-fasting. This approach can lead to weight
        loss, improved metabolic health, reduced inflammation, and potentially
        even increased lifespan. However, it is important to consider individual
        variability, hunger and cravings, and nutrient deficiencies when trying
        intermittent fasting. Consulting with a healthcare professional and
        listening to your body can help ensure a safe and effective approach to
        this eating pattern.
      </p>
      <p>
        If you’re interested to find out if{' '}
        <a href="https://reformr.co.nz" className="text-sky-700">
          Reformr
        </a>
        ’s metabolic reset programme can help you to achieve, healthy, sustained
        weight loss,{' '}
        <a href="/signup/screening" className="text-sky-700">
          take our eligibility quiz today
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
