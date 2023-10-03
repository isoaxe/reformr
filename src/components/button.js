import Link from 'next/link';

export default function Button({ text, link }) {
  return (
    <Link href={link}>
      <button className="rounded-lg border-2 border-violet-900 bg-violet-600 px-6 py-3 text-2xl font-medium transition hover:bg-violet-700 hover:drop-shadow-white">
        {text}
      </button>
    </Link>
  );
}
