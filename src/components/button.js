import Link from 'next/link';

export default function Button({ text, link }) {
  return (
    <Link href={link}>
      <button className="rounded bg-cyan-400 px-4 py-2 text-xl font-medium text-white transition hover:bg-cyan-500 hover:bg-opacity-80 md:px-6 md:py-3 md:text-2xl">
        {text}
      </button>
    </Link>
  );
}
