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
    <div className="relative flex aspect-video w-1/4 flex-col rounded">
      <div className="absolute h-full w-full">
        <Image
          src={image}
          alt="A thumbnail image relating to the blog article."
          fill
          className="z-0 object-cover"
          sizes="100vw"
        />
      </div>
      <div className="relative">
        <p>{formattedDate}</p>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
    </div>
  );
}
