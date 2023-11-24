import Link from 'next/link';
import Image from 'next/image';

/* This is the tile that represents an blog post. Article opened when clicked. */
export default function Tile(props) {
  const { title, description, image, date, slug } = props.data;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="w-full max-w-md md:w-1/2 xl:w-1/3 2xl:w-1/4">
      <Link href={`/main/blog/${slug}`}>
        <div className="group relative flex w-full flex-col p-2 transition hover:scale-[.98] hover:cursor-pointer">
          <div className="relative aspect-video w-full overflow-hidden rounded">
            <Image
              src={image}
              alt="A thumbnail image relating to the blog article."
              fill
              className="z-0 object-cover transition-all group-hover:scale-[1.15]"
              sizes="100vw"
            />
            <div className="absolute h-full w-full bg-gradient-to-b from-transparent to-zinc-600 md:border-none"></div>
          </div>
          <div className="absolute flex h-full flex-col justify-center p-6 font-medium">
            <p className="text-sm xs:text-base">{formattedDate}</p>
            <h1 className="my-2 text-lg xs:text-2xl">{title}</h1>
            <h2 className="text-base xs:text-xl">{description}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}
