import Image from 'next/image';
import { blogTileData } from '@/util/data';
import saxendaPenClosed from '/public/images/blog/saxenda-pen-closed.png';

export default function TipsForInjecting() {
  const { date, title } = blogTileData[1];

  return (
    <main className="mx-auto flex max-w-7xl flex-col px-5 text-xl md:px-10 lg:text-2xl">
      <p className="text:lg py-8 text-center sm:text-xl md:py-16">
        {date} | Written by Greta Perry-Brooks
      </p>
      <h1 className="mb-8 text-center text-5xl font-semibold md:mb-16 md:text-6xl">
        {title}
      </h1>
      <div className="relative my-8 w-full max-w-lg self-center text-center">
        <Image
          src={saxendaPenClosed}
          alt="A Saxenda pen with the lid on."
          className="z-0 object-cover"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>
      <p className="my-8">
        Our partner doctors will always ensure to explain to you how to
        administer your prescription dose of Saxenda. Here is a step-by-step for
        reference, but always defer to your healthcare professional’s advice.
      </p>
      <p>
        If you’re after a prescription for Saxenda,{' '}
        <a href="/signup/screening" className="text-sky-700 underline">
          take our eligibility quiz now
        </a>
        .
      </p>
      <h2 className="mt-16 text-4xl font-medium md:text-5xl">
        Where should I inject Saxenda?
      </h2>
      <p className="mt-8">
        <a href="https://www.saxenda.com" className="text-sky-700 underline">
          Saxenda
        </a>{' '}
        injections can be administered in the upper arm, abdomen, or front of
        the thigh. Most users find that injecting into the abdomen is more
        comfortable. The optimal spot on your stomach is below your belly button
        and above your hipline. Unlike other injectable medications, there is no
        need to rotate injection sites with Saxenda, although you may want to
        switch up locations for your own comfort. If you discover a site that is
        more suitable for you, feel free to continue using it.
      </p>
      <h2 className="mt-16 text-4xl font-medium md:text-5xl">
        How should I position myself?
      </h2>
      <p className="my-8">
        Feelings of nervousness, particularly when it comes to injections, can
        often cause lightheadedness or nausea, as our bodies attempt to warn us
        of potential danger. Reclining and putting your body into a relaxed
        position during the administration process of Saxenda can help alleviate
        some of these nervous feelings and sensations.
      </p>
      <p>
        Ensure that everything you need is within reach, and that you have a
        clear view of the injection site, typically the abdomen. After
        administering the dose, continue reclining for a short while to allow
        yourself time to calm down before congratulating yourself for
        successfully overcoming a daunting task.
      </p>
      <h2 className="mt-16 text-4xl font-medium md:text-5xl">
        How do I administer Saxenda?
      </h2>
      <p className="my-8">
        Once you have selected your injection site and have reclined yourself
        into a relaxed position, you are ready to administer your dose of
        Saxenda. Always wash your hands before administering your dose.
      </p>
    </main>
  );
}
