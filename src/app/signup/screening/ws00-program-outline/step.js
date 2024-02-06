import Image from 'next/image';

export default function Step({ title, image, description, number }) {
  return (
    <section className="mb-3 rounded border border-sky-400 p-2 sm:p-4">
      <div className="mb-2 flex flex-row items-center text-slate-700">
        <div className="flex aspect-square w-7 items-center justify-center rounded-full bg-slate-700">
          <div className="text-lg text-white">{number}</div>
        </div>
        <h1 className="ml-2 text-lg font-medium sm:text-xl">{title}</h1>
      </div>
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
