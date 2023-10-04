import Link from 'next/link';

export default function Button({ text, link }) {
  return (
    <Link href={link}>
      <button className="rounded-lg border-2 border-violet-900 bg-violet-600 px-4 py-2 text-xl font-medium transition hover:bg-violet-700 hover:drop-shadow-white md:px-6 md:py-3 md:text-2xl">
        {text}
      </button>
    </Link>
  );
}
