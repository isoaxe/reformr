import Link from 'next/link';

export default function Button({ text, link, bgShade = 'light' }) {
  return (
    <Link href={link}>
      <button
        className={`rounded-lg border-2 border-violet-900 bg-violet-600 px-4 py-2 text-xl font-medium text-white transition hover:bg-violet-700 hover:text-teal-100 md:px-6 md:py-3 md:text-2xl ${
          bgShade === 'light'
            ? 'hover:drop-shadow-black'
            : 'hover:drop-shadow-white'
        }`}
      >
        {text}
      </button>
    </Link>
  );
}
