import Image from 'next/image';
import womanWithPhone from '/public/images/woman-smiling-with-phone.jpeg';

export default function Careers() {
  return (
    <main>
      <section className="relative flex h-[80vh] items-center sm:h-screen md:h-[115vh] lg:h-[130vh] xl:h-[150vh] 2xl:h-[160vh]">
        <div className="absolute h-full w-full">
          <Image
            src={womanWithPhone}
            alt="A smiling woman looking at her phone with a neon background."
            fill
            className="z-0 object-cover"
            sizes="100vw"
          />
        </div>
      </section>
    </main>
  );
}
