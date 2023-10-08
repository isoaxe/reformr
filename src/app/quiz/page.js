import Image from 'next/image';
import peaceSign from '/public/images/hand-peace-sign.png';

/* This is just the first intro page of the quiz and doen't contain questions. */
export default function Quiz() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto flex max-w-6xl flex-row">
        <div className="relative aspect-square w-1/2 px-4 xs:px-9">
          <Image
            src={peaceSign}
            alt="A hand making a peace sign with a yellow background."
            fill
            className="z-0 object-cover"
            sizes="24rem"
          />
        </div>
      </div>
    </main>
  );
}
