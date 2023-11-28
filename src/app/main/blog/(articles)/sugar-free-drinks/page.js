import Image from 'next/image';
import Button from '@/components/button';
import { blogTileData } from '@/util/data';

export default function IncidentalExercise() {
  const { date, title, image } = blogTileData[12];

  return (
    <main className="mx-auto flex max-w-lg flex-col px-4 text-xl md:max-w-7xl md:px-10 lg:text-2xl">
      <p className="text:lg py-8 text-center sm:text-xl md:py-16">
        {date} | Written by Benji
      </p>
      <h1 className="mb-8 text-center text-4xl font-semibold xs:text-5xl md:mb-16 md:text-6xl">
        {title}
      </h1>
      <div className="flex w-full flex-col items-center md:flex-row-reverse">
        <div className="mb-8 md:mb-0 md:ml-8 md:w-1/2">
          <p className="mb-6">
            If you’re trying to lose weight, cutting back on sugar is often one
            of the first things you’ll hear. Sugar is high in calories and has
            no nutritional value, so it’s no surprise that cutting back on sugar
            can be a quick way to cut calories and lose weight. One way that
            many people try to cut down on sugar is by drinking sugar-free
            drinks. But do these drinks actually help with weight loss?
          </p>
          <p>
            The short answer is yes, but there are some caveats to keep in mind.
            Here’s what you need to know about sugar-free drinks and weight
            loss.
          </p>
        </div>
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
        What are sugar-free drinks?
      </h2>
      <p className="my-8">
        Sugar-free drinks are beverages that are sweetened with artificial
        sweeteners instead of sugar. These sweeteners, which include aspartame,
        sucralose, and stevia, are much lower in calories than sugar, which
        makes them a popular choice for people who are trying to reduce their
        sugar intake.
      </p>
      <p>
        Common examples of sugar-free drinks include diet sodas, sugar-free
        energy drinks, and sugar-free sports drinks.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        How do sugar-free drinks help with weight loss?
      </h2>
      <p className="my-8">
        Sugar-free drinks can help with weight loss in a few different ways. For
        one, they are lower in calories than their sugary counterparts. For
        example, a regular can of soda can contain upwards of 150 calories,
        while a diet soda has virtually no calories.
      </p>
      <p>
        Drinking sugar-free drinks can also help you avoid consuming excess
        sugar, which can lead to weight gain. When you consume sugar, your body
        releases insulin to help regulate your blood sugar levels. Over time,
        consuming too much sugar can lead to insulin resistance, which can make
        it more difficult for your body to lose weight.
      </p>
      <p className="mt-8">
        Finally, sugar-free drinks can also help you stay hydrated, which is
        important for weight loss. Drinking enough water can help you feel full,
        which can help you avoid overeating.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        Are there any downsides to drinking sugar-free drinks?
      </h2>
      <p className="my-8">
        While sugar-free drinks can be a helpful tool for weight loss, they are
        not without their downsides. For one, some people find that drinking
        artificial sweeteners can cause them to crave more sugar. This can lead
        to overeating and weight gain.
      </p>
      <p>
        Additionally,{' '}
        <a
          href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4846275/"
          className="text-sky-700"
        >
          some studies
        </a>{' '}
        have suggested that consuming artificial sweeteners may be linked to
        negative health outcomes, such as an increased risk of type 2 diabetes
        and heart disease. However, more research is needed to fully understand
        these potential risks.
      </p>
      <p className="mt-8">
        Finally, it’s worth noting that some sugar-free drinks can still be high
        in calories. For example, some sugar-free energy drinks contain added
        calories from ingredients like caffeine and amino acids. Be sure to read
        nutrition labels carefully to avoid inadvertently consuming excess
        calories.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        The bottom line
      </h2>
      <p className="my-8">
        Sugar-free drinks can be a helpful tool for weight loss, but they should
        be consumed in moderation. While they can help you reduce your sugar
        intake and cut calories, it’s important to remember that they are not a
        magic solution for weight loss. A healthy diet and regular exercise are
        still the most effective ways to shed pounds and improve your overall
        health.
      </p>
      <p>
        If you’re interested to find out if{' '}
        <a href="https://reformr.co.nz" className="text-sky-700">
          Reformr
        </a>
        ’s metabolic reset programme might help augment your weight loss,{' '}
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
