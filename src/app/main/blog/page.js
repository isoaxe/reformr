import Image from 'next/image';
import Button from '@/components/button';
import Tile from './tile';
import { blogTileData } from '@/util/data';
import doctor from '/public/images/cartoon-doctor.jpg';

export default function Blog() {
  return (
    <main>
      <section className="relative flex h-screen justify-end">
        <div className="absolute -top-[3rem] h-screen w-full md:-top-[4rem]">
          <Image
            src={doctor}
            alt="A smiling cartoon doctor with hand outstretched."
            fill
            className="z-0 object-cover object-right-top"
            sizes="100vw"
          />
        </div>
        <div className="relative flex h-screen w-fit max-w-xl flex-col justify-center px-4 pb-20 text-white xs:mr-4 lg:mr-10 xl:max-w-2xl 2xl:mr-40">
          <h1 className="text-6xl font-extrabold ml:text-7xl lg:text-8xl">
            Learning Hub
          </h1>
          <p className="mt-8 text-2xl font-medium ml:mt-10 ml:text-3xl lg:text-4xl">
            <span className="font-extrabold text-sky-700 drop-shadow-light">
              Level up{' '}
            </span>
            your knowledge with these articles written and curated by doctors.
          </p>
          <p className="my-12 text-lg font-semibold ml:my-16 ml:text-xl lg:text-2xl">
            Curious about weight loss injections?
          </p>
          <Button
            text="Take the Quiz"
            link="/signup/screening"
            haloShade="light"
          />
        </div>
      </section>
      <section className="mx-5 flex flex-wrap justify-center">
        {blogTileData.map((tileData, index) => (
          <Tile data={tileData} key={index} />
        ))}
      </section>
    </main>
  );
}
