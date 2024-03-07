import Image from 'next/image';
import Button from '@/components/button';
import { blogTileData } from '@/util/data';

export default function EmergingMedications() {
  const { date, title, image } = blogTileData[9];

  return (
    <main className="mx-auto flex max-w-lg flex-col px-4 text-xl md:max-w-7xl md:px-10 lg:text-2xl">
      <p className="text:lg py-8 text-center sm:text-xl md:py-16">
        {date} | Written by Luke Perry
      </p>
      <h1 className="mb-8 text-center text-4xl font-semibold xs:text-5xl md:mb-16 md:text-6xl">
        {title}
      </h1>
      <div className="flex w-full flex-col items-center md:flex-row-reverse">
        <p className="mb-8 md:ml-8 md:w-1/2">
          Obesity is a major public health concern, as it is associated with
          numerous health problems, including type 2 diabetes, cardiovascular
          disease, and certain types of cancer. While lifestyle changes such as
          a healthy diet and exercise are recommended for weight loss, some
          individuals may benefit from medications that can aid in their weight
          loss journey. In recent years, there have been several new medications
          being used for weight loss, including tirzepatide, semaglutide, and
          dulaglutide.
        </p>
        <div className="md:w-1/2">
          <Image
            src={image}
            alt="A pharmacist reaching for a box of medication on a shelf."
            className="z-0 object-cover"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </div>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        Tirzepatide
      </h2>
      <p className="mt-8">
        Tirzepatide is a new medication that has shown promise in promoting
        weight loss. It is a once-weekly injection that combines three hormones
        - glucagon-like peptide-1 (GLP-1), gastric inhibitory peptide (GIP), and
        glucagon receptor agonist (GRA) - to help regulate appetite, glucose
        levels, and body weight. The medication has been shown to result in
        significant weight loss, with some clinical trials showing patients
        losing up to 20% of their initial body weight. In addition, it has been
        shown to improve glycemic control, blood pressure, and cholesterol
        levels.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        Semaglutide
      </h2>
      <p className="mt-8">
        Semaglutide is another GLP-1 receptor agonist medication that has
        recently been approved for weight loss. It is a once-weekly injection
        that has been shown to result in significant weight loss, with some
        clinical trials showing patients losing up to 15% of their initial body
        weight. Semaglutide works by regulating appetite, reducing food intake,
        and promoting feelings of fullness. It has also been shown to improve
        glycemic control, blood pressure, and cholesterol levels.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        Dulaglutide
      </h2>
      <p className="mt-8">
        Dulaglutide is another GLP-1 receptor agonist medication that has been
        used for the treatment of type 2 diabetes. It is a once-weekly injection
        that has been shown to result in modest weight loss, with some clinical
        trials showing patients losing up to 3% of their initial body weight.
        Dulaglutide works by regulating appetite, reducing food intake, and
        promoting feelings of fullness. It has also been shown to improve
        glycemic control, blood pressure, and cholesterol levels.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        Comparing the Medications
      </h2>
      <p className="my-8">
        While all three medications have been shown to result in weight loss,
        there are some differences between them. Tirzepatide has been shown to
        result in the greatest weight loss, with some clinical trials showing
        patients losing up to 20% of their initial body weight. Semaglutide has
        also been shown to result in significant weight loss, with some clinical
        trials showing patients losing up to 15% of their initial body weight.
        Dulaglutide has been shown to result in modest weight loss, with some
        clinical trials showing patients losing up to 3% of their initial body
        weight.
      </p>
      <p>
        In addition, the medications have different dosing schedules.
        Tirzepatide is a once-weekly injection, while semaglutide is also a
        once-weekly injection. Dulaglutide is also a once-weekly injection, but
        it is typically used for the treatment of type 2 diabetes rather than
        weight loss specifically.
      </p>
      <p className="mb-16 mt-8">
        It is important to note that all three medications have potential side
        effects, including nausea, vomiting, diarrhea, and hypoglycemia. It is
        important to discuss any potential side effects with your healthcare
        provider.
      </p>
      <p>
        Tirzepatide, semaglutide, and dulaglutide are new medications that have
        shown promise in promoting weight loss. While lifestyle changes such as
        a healthy diet and exercise are still recommended for weight loss, these
        medications may be useful for individuals who have struggled to lose
        weight through these methods alone.
      </p>
      <p className="my-8">
        Here at{' '}
        <a href="https://reformr.co.nz" className="text-sky-700">
          Reformr
        </a>
        , we strongly believe that obesity is not a choice. We believe that
        obesity is a metabolic disease with a metabolic solution.
      </p>
      <p>
        We are excited about the emerging therapeutic options in the area of
        evidence-based weight loss.
      </p>
      <p className="mt-16">
        If you would like to find out if you might be eligible for{' '}
        <a href="https://reformr.co.nz" className="text-sky-700">
          Reformr
        </a>
        ’s metabolic reset programme, start by{' '}
        <a href="/signup/screening" className="text-sky-700">
          taking our eligibility quiz
        </a>
        .
      </p>
      <div className="my-12 text-center">
        <Button text="Find out if you're eligible" link="/signup/screening" />
      </div>
    </main>
  );
}
