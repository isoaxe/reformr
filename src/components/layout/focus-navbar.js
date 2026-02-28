import Image from 'next/image';
import Link from 'next/link';

export default function FocusNavbar() {
  return (
    <div className="fixed top-0 z-30 flex h-12 w-full items-center justify-center border-b-2 border-violet-800 bg-violet-500 md:h-16">
      <Link href="/" className="w-32 hover:opacity-60 md:w-44">
        <Image
          src="/images/text-logo-plain.png"
          width={176}
          height={44}
          alt="Plain monotone version of Reformr text logo."
          sizes="(max-width: 767px) 8rem, 11rem"
        />
      </Link>
    </div>
  );
}
