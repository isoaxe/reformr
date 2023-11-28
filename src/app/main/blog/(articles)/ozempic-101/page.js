import Image from 'next/image';
import Button from '@/components/button';
import { blogTileData } from '@/util/data';
import penOpen from '/public/images/blog/posts/11/ozempic-pen-open-vert.jpg';

export default function Ozempic101() {
  const { date, title } = blogTileData[2];

  return (
    <main className="mx-auto flex max-w-lg flex-col px-4 text-xl md:max-w-7xl md:px-10 lg:text-2xl">
      <p className="text:lg py-8 text-center sm:text-xl md:py-16">
        {date} | Written by Benji
      </p>
      <h1 className="mb-8 text-center text-4xl font-semibold xs:text-5xl md:mb-16 md:text-6xl">
        {title}
      </h1>
      <div className="flex w-full flex-col items-center md:flex-row">
        <p className="mb-8 text-2xl md:mb-0 md:mr-8 md:w-1/2 lg:mr-16 lg:text-3xl">
          A Beginner’s Guide to Ozempic (Semaglutide): Understanding its Role in
          Weight Loss Treatment and Administration
        </p>
        <div className="md:w-1/2">
          <Image
            src={penOpen}
            alt="An open Ozempic pen."
            className="z-0 object-cover"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </div>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        Looking for a game-changing solution to tackle type 2 diabetes or weight
        loss? Look no further!
      </h2>
      <p className="mt-8">
        <a href="https://www.ozempic.com" className="text-sky-700">
          Ozempic
        </a>{' '}
        is a widely acclaimed medication. Initially used to treat type 2
        diabetes, Ozempic is now creating ripples as an effective weight loss
        treatment. The secret? It promotes insulin production, suppresses
        appetite, and slows down digestion. In this article, discover the
        science behind Ozempic’s success as a weight loss treatment and its
        potential benefits that can turn your life around.{' '}
        <a href="https://reformr.co.nz" className="text-sky-700">
          Reformr
        </a>{' '}
        prescribes the same type of medication to our members to aid their
        weight loss journey. If this sounds like something you want to try, see
        if you’re eligible{' '}
        <a href="/signup/screening" className="text-sky-700">
          here
        </a>
        .
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        How does it work?
      </h2>
      <p className="my-8">
        <a href="https://www.ozempic.com" className="text-sky-700">
          Ozempic
        </a>{' '}
        is a brand name for the drug called{' '}
        <a
          href="https://www.mayoclinic.org/drugs-supplements/semaglutide-subcutaneous-route/description/drg-20406730"
          className="text-sky-700"
        >
          semaglutide
        </a>
        . Ozempic mimics GLP-1, which is a naturally-occurring hormone in our
        bodies. By doing this, Ozempic stimulates the production of insulin,
        suppresses appetite and slows down digestion. Because of this, it is
        both an effective type 2 diabetes medication, as well as an effective
        weight-loss treatment.
      </p>
      <p>
        In weight loss, Ozempic works by controlling hunger, reducing food
        cravings and slowing digestion. The boost of GLP-1 signals our brain
        that our stomach is full, which reduces hunger and urges to eat. The
        delay of digestion makes us feel fuller for longer, and minimises hunger
        pangs.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        How much weight will I lose?
      </h2>
      <p className="mt-8">
        Research indicates that Ozempic can result in significant weight loss.{' '}
        <a
          href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2796491"
          className="text-sky-700"
        >
          One study
        </a>{' '}
        witnessed their semaglutide users lose a whopping 11% of their body
        weight in only 6 months. In{' '}
        <a
          href="https://www.nejm.org/doi/full/10.1056/NEJMoa2032183"
          className="text-sky-700"
        >
          another clinical trial
        </a>{' '}
        with over 1900 patients, those who took Ozempic for 68 weeks shed 15%
        body weight, compared to only 2.4% body weight lost in the control
        group. Everyone’s different, but a lot of people have had really great
        results using semaglutide.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        Are there any side effects?
      </h2>
      <p className="my-8">
        Ozempic is a very safe medication, but can cause some mild side effects.
        The most common of these include nausea, diarrhoea, vomiting and
        constipation. These typically subside within a few weeks of use. Ozempic
        has been associated with pancreatitis and thyroid tumours, but these are
        very uncommon.
      </p>
      <p className="font-medium">
        Are you interested in discovering whether Ozempic is right for you?{' '}
        <a href="/signup/screening" className="text-sky-700">
          Take our eligibility quiz now
        </a>{' '}
        and see how{' '}
        <a href="https://reformr.co.nz" className="text-sky-700">
          Reformr
        </a>{' '}
        can help you on your weight loss journey.
      </p>
      <div className="my-20 text-center">
        <Button
          text="Find out if you're eligible"
          link="/signup/screening"
          haloShade="dark"
        />
      </div>
    </main>
  );
}
