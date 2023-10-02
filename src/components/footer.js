'use client';

import Image from 'next/image';
import logo from 'public/images/text-logo-coloured.png';

export default function Footer() {
  return (
    <footer className="px-9">
      <div className="flex flex-row">
        <section>
          <div className="w-64 md:w-80">
            <Image
              src={logo}
              alt="Coloured version of Reformr text logo."
              sizes="(max-width: 767px) 16rem, 20rem"
            />
          </div>
        </section>
      </div>
      <p className="my-10 text-center">
        © {new Date().getFullYear()} Reformr Health LLC. All rights reserved.
      </p>
    </footer>
  );
}
