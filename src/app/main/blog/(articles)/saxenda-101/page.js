import Image from 'next/image';
import Button from '@/components/button';
import { blogTileData } from '@/util/data';
import saxendaPenClosed from '/public/images/blog/tiles/saxenda-pen-closed.jpg';
import scaleStudyArticle from '/public/images/blog/posts/13/scale-study-article.png';
import weightLossGraph from '/public/images/blog/posts/13/weight-loss-graph.png';

export default function Saxenda101() {
  const { date, title } = blogTileData[0];

  return (
    <main className="mx-auto flex max-w-lg flex-col px-4 text-xl md:max-w-7xl md:px-10 lg:text-2xl">
      <p className="text:lg py-8 text-center sm:text-xl md:py-16">
        {date} | Written by Luke Perry
      </p>
      <h1 className="mb-8 text-center text-4xl font-semibold md:mb-16 md:text-6xl xl:text-5xl">
        {title}
      </h1>
      <div className="mb-8 flex w-full flex-col md:mb-16 md:flex-row">
        <div className="relative aspect-video md:w-1/2">
          <Image
            src={saxendaPenClosed}
            alt="A Saxenda pen with the lid on."
            fill
            className="z-0 object-cover"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
        <div className="my-auto mt-5 flex h-full flex-col md:ml-5 md:mt-0">
          <p>What is Saxenda?</p>
          <p className="my-3 lg:my-6 xl:my-8">
            Perhaps you’ve heard about it in the media?
          </p>
          <p>Perhaps you known someone taking it?</p>
          <p className="my-3 lg:my-6 xl:my-8">
            In this blog, we’re going to unpack all things Saxenda.
          </p>
          <p>So, lets get into it.</p>
        </div>
      </div>
      <div className="text-center">
        <Button
          text="Find out if you're eligible"
          link="/signup/screening"
          haloShade="light"
        />
      </div>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        What actually is Saxenda?
      </h2>
      <p className="my-8">
        <a href="https://www.saxenda.com" className="text-sky-700">
          Saxenda
        </a>{' '}
        is a once-daily injectable Glucagon-Like Peptide-1 Receptor Agonist, or
        GLP-1 for short.
      </p>
      <p>
        GLP-1s are a class of medications that first hit the market in 2005, and
        now there are a number of GLP-1 medications on the market, including{' '}
        <a href="https://www.ozempic.com" className="text-sky-700">
          Ozempic
        </a>
        ,{' '}
        <a href="https://www.trulicity.com" className="text-sky-700">
          Trulicity
        </a>
        , and Saxenda. GLP-1’s were initially and still are being used for
        managing Type 2 Diabetes. Interestingly, it was found that all these
        people with diabetes were not only succeeding with better blood sugar
        control, but they were also losing weight.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        How does Saxenda work?
      </h2>
      <p className="mt-8">
        GLP-1 is a hormone that is naturally created by the body. When Saxenda
        is used, we essentially increase the amount of GLP-1 hormone that is in
        the body in order to boost the effects of what GLP-1 does in the body.
        Very broadly, GLP-1 reduces blood sugars and acts in the brain to reduce
        your craving of food and your food-seeking behaviours. This in turn,
        helps us to manage our weight.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        Does Saxenda have side effects?
      </h2>
      <p className="my-8">
        Saxenda is safe, but like all medications, there are common side effects
        that one might encounter. The most common are: nausea, vomiting,
        diarrhoea or constipation. For managing these, check out our other
        articles- link.
      </p>
      <p className="mb-8">
        There are less common side effects to be aware of and look out for.
        These include: low blood sugar, pancreatitis, gallbladder problems,
        thyroid problems, kidney impairment, depression & suicidal thoughts.
      </p>
      <p>
        Anyone taking these medications should speak with their doctor to ensure
        the treatment is correct for you.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        How is Saxenda administered?
      </h2>
      <p className="mt-8">
        The injection can be placed under the skin in various locations. Often,
        people choose the waist, thigh or upper arm.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        Why all the excitement?
      </h2>
      <p className="my-8">
        <a
          href="https://www.nejm.org/doi/full/10.1056/nejmoa1411892"
          className="text-sky-700"
        >
          The SCALE Study
        </a>{' '}
        was a large double-blind, randomised controlled study that looked at the
        evidence for Saxenda in weight loss in individuals with Obesity.
      </p>
      <p>
        All patients received counselling on lifestyle modifications which
        included following a diet that was 500 calories less than they burnt
        each day.
      </p>
      <p className="my-8">
        Amazingly, the group that took Saxenda lost weight and kept the weight
        off over the year long study. Staggeringly, they lost, on average, 8% of
        their total body weight!
      </p>
      <p>
        And if it couldn’t get any better, participants also experienced
        reductions in blood sugars, lipids (cholesterol), insulin resistance,
        and blood pressure. All key factors in overall health!{' '}
      </p>
      <p className="my-8">
        The results of this study were published in the prestigious publication
        New England Journal of Medicine (NEJM).
      </p>
      <div className="relative w-full">
        <Image
          src={scaleStudyArticle}
          alt="The medical study document relating to Saxenda."
          sizes="100vw"
        />
      </div>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        How much does it cost?
      </h2>
      <p className="my-8">
        Reformr’s metabolic reset program is a comprehensive package that
        includes medication, doctor & pharmacist support and coaching.
      </p>
      <p>The total costs for most patients is close to $16 a day.</p>
      <p className="mt-8">
        With the prices of food, especially compared to take-outs, many patients
        report significant savings from their reduction in appetite.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        Who can use Saxenda?
      </h2>
      <p className="my-8">
        Eligibility is determined through a consult with your doctor,
        alternatively{' '}
        <a href="https://reformr.co.nz" className="text-sky-700">
          Reformr
        </a>{' '}
        offers free online consultations to help discover if Saxenda might be
        right for you.
      </p>
      <p>
        In essence, anyone who is clinically obese may be able to access this
        treatment. If you’re overweight and have weight-related medical
        problems, you may be eligible.
      </p>
      <p className="mt-8">
        Your doctor will ensure there are no other medical conditions or
        medications you are taking which might impact upon the suitability for
        Saxenda.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        How long does the treatment last?
      </h2>
      <p className="my-8">
        Your clinician will keep track of your progress over the first 12 weeks.
        Treatment continues on if you’ve experienced a five percent weight loss
        of your initial weight.
      </p>
      <p>On average, the programme lasts between nine and twelve months.</p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        What role does diet play?
      </h2>
      <p className="my-8">
        Diet as part of an overall healthy lifestyle remains integral to healthy
        weight loss. Many patients find adherence to a healthy diet easier as a
        consequence of their reduction in appetite.
      </p>
      <p>
        In general, a diet that is low in unhealthy fats and sugars and
        processed foods is recommended. Instead a diet with plenty of grains,
        fresh fruits and vegetables is best.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        How long until I see results?
      </h2>
      <div className="my-12 flex w-full flex-col items-center md:flex-row">
        <div className="relative md:w-1/2">
          <Image
            src={weightLossGraph}
            alt="A graph showing weight loss progress against a control over 56 weeks."
            className="z-0 object-cover"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
        <p className="mt-12 md:mb-10 md:ml-12 md:w-1/2">
          Typically, patients start to see weight loss within the first couple
          of weeks. As you can see from{' '}
          <a
            href="https://www.nejm.org/doi/full/10.1056/nejmoa1411892"
            className="text-sky-700"
          >
            the SCALE study
          </a>
          , weight loss was most pronounced in the first 8 weeks but continued
          steadily for the duration of the study.
        </p>
      </div>
      <p>
        Ultimately each person’s situation is unique and by chatting to your
        doctor you can get a better if idea of what results you can expect to
        see.
      </p>
      <h2 className="mt-16 text-3xl font-medium xs:text-4xl md:text-5xl">
        I&apos;m interested! What next?
      </h2>
      <p className="my-8">
        If you are interested in losing weight, Saxenda may be able to help as
        part of an programme that focuses on a healthy lifestyle.
      </p>
      <p>
        Saxenda is a safe, effective and evidence-based treatment which is why
        at{' '}
        <a href="https://reformr.co.nz" className="text-sky-700">
          Reformr
        </a>{' '}
        we are excited to include it as part of our metabolic reset programme. A
        company and 100% owned by doctor clinical-scientists.
      </p>
      <p className="mt-8">
        Want to see if you&apos;re eligible?{' '}
        <a href="/signup/screening" className="text-sky-700">
          Take our quiz
        </a>{' '}
        to find out today.
      </p>
      <div className="my-12 text-center">
        <Button text="Get Started!" link="/signup/screening" haloShade="dark" />
      </div>
    </main>
  );
}
