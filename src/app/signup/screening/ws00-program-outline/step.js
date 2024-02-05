import Image from 'next/image';

export default function Step({ title, image, description }) {
  return (
    <section>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="relative aspect-square sm:w-1/2">
        <Image
          src={image}
          alt={title}
          fill
          className="z-0 object-cover"
          sizes="24rem"
        />
      </div>
    </section>
  );
}
