import Image from 'next/image';

/* This is the tile that represents an blog post. Article opened when clicked. */
export default function Thumbnail(props) {
  const { title, description, image, date } = props.data;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="relative flex aspect-video w-1/4 flex-col hover:cursor-pointer">
      <div className="absolute h-full w-full overflow-hidden rounded">
        <Image
          src={image}
          alt="A thumbnail image relating to the blog article."
          fill
          className="z-0 object-cover"
          sizes="100vw"
        />
        <div className="absolute h-full w-full bg-gradient-to-b from-transparent to-zinc-600 md:border-none"></div>
      </div>
      <div className="relative m-auto p-6 font-medium">
        <p>{formattedDate}</p>
        <h1 className="my-2 text-2xl">{title}</h1>
        <h2 className="text-xl">{description}</h2>
      </div>
    </div>
  );
}
