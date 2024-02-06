import Image from 'next/image';

export default function Step({ title, image, description }) {
  return (
    <section className="mb-3 rounded border border-sky-400 p-2 sm:p-4">
      <h1 className="mb-2 text-lg font-medium text-slate-700 sm:text-xl">
        {title}
      </h1>
      <div className="flex flex-row items-center">
        <div className="relative aspect-square w-28">
          <Image
            src={image}
            alt={title}
            fill
            className="z-0 rounded object-cover"
            sizes="24rem"
          />
        </div>
        <p className="ml-2 w-full text-base font-thin sm:ml-4 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
