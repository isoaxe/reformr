import Button from '@/components/button';

/* Three sections of the homepage that comprise the product pitch. */
export default function Advantages() {
  return (
    <>
      <section className="flex flex-row">
        <div className="flex max-w-4xl flex-col">
          <h2 className="mb-8 text-2xl font-bold md:mb-16 md:text-3xl lg:text-4xl">
            Experience the next generation of weight loss.
          </h2>
          <p className="mb-4 text-lg font-light md:mb-8 md:text-xl lg:text-2xl">
            Reformr combines state-of-the-art prescription weight loss
            medications with personalised health coaching. Backed by the latest
            research, the Metabolic Reset Program will empower you to take
            control of your biology and achieve real, lasting results.
          </p>
          <p className="mb-8 text-lg font-light md:mb-16 md:text-xl lg:text-2xl">
            On average, Reformr members lose over twice as much weight compared
            with diet and exercise alone.
          </p>
          <Button text="Start Consult" link="/quiz" bgShade="light" />
        </div>
      </section>
    </>
  );
}
