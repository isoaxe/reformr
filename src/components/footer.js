'use client';

import { AiOutlineInstagram as Instagram } from 'react-icons/ai';
import Image from 'next/image';
import { INSTAGRAM } from '@/util/urls';
import logo from 'public/images/text-logo-coloured.png';

export default function Footer() {
  return (
    <footer className="px-9">
      <div className="flex flex-row">
        <section>
          <div className="mb-5 w-64 md:w-80">
            <Image
              src={logo}
              alt="Coloured version of Reformr text logo."
              sizes="(max-width: 767px) 16rem, 20rem"
            />
          </div>
          <a
            href={INSTAGRAM}
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={50} className="transition hover:fill-violet-600" />
          </a>
        </section>
      </div>
      <p className="my-10 text-center">
        © {new Date().getFullYear()} Reformr Health LLC. All rights reserved.
      </p>
    </footer>
  );
}
