import Image from 'next/image';
import manGrinning from '/public/images/man-grinning.jpeg';

/* Final section of homepage that acts as a closing statement to the pitch. */
export default function Closer() {
  return (
    <section className="h-screen">
      <div className="absolute h-full w-full">
        <Image
          src={manGrinning}
          alt="A short-haired man grinning widely."
          fill
          className="z-0 object-cover"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
