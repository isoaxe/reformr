'use client';

import { AiOutlineInstagram as Instagram } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import { INSTAGRAM } from '@/util/urls';

export default function Footer() {
  const linkStyle = 'mt-3 hover:text-violet-600 font-light transition';

  return (
    <footer className="relative bg-slate-100 px-4 pt-8 xs:px-9">
      <div className="flex flex-col justify-between text-xl md:flex-row lg:text-2xl">
        <section className="mb-10 flex flex-col items-center md:mb-0">
          <div className="mb-5 w-64 max-w-full sm:w-80">
            <Image
              src="/images/text-logo-coloured.png"
              width={320}
              height={80}
              alt="Coloured version of Reformr text logo."
              sizes="(max-width: 639px) 16rem, 20rem"
            />
          </div>
          <div className="flex flex-col items-center">
            <a
              href={INSTAGRAM}
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram
                size={50}
                className="mb-4 fill-slate-700 transition hover:fill-violet-600"
              />
            </a>
          </div>
        </section>
        <section className="flex flex-col justify-between xs:flex-row md:ml-8 md:justify-start">
          <div className="mr-8 flex flex-col md:mr-12 lg:mr-28">
            <h4 className="font-semibold">Support</h4>
            <Link href="/contact" className={linkStyle}>
              Contact Us
            </Link>
            <Link href="/contact" className={linkStyle}>
              Customer Support
            </Link>
            <a href="/#faq" className={linkStyle}>
              FAQs
            </a>
          </div>
          <div className="mt-8 flex flex-col xs:mt-0">
            <h4 className="font-semibold">Resources</h4>
            <Link href="/blog" className={linkStyle}>
              Knowledge Hub
            </Link>
            <Link href="/privacy-policy" className={linkStyle}>
              Privacy Policy
            </Link>
            <Link href="/tos" className={linkStyle}>
              Terms of Service
            </Link>
          </div>
        </section>
      </div>
      <p className="py-10 text-center font-light">
        © {new Date().getFullYear()} Reformr Health LLC. All rights reserved.
      </p>
    </footer>
  );
}
