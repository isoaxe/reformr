import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks({ setOpen }) {
  const pathname = usePathname();

  const close = () => setOpen(false);

  // Link styles.
  const constant = ' h-full flex items-center px-4';
  const active = 'font-bold bg-primary' + constant;
  const dormant =
    'font-normal hover:text-white hover:pb-4 transition-all' + constant;

  return (
    <div className="flex h-40 w-full flex-col justify-between pt-6 text-xl md:h-full md:flex-row">
      <div className="flex h-80 flex-col md:h-full md:flex-row">
        <h6 className={pathname === '/blog' ? active : dormant}>
          <Link href="/blog" onClick={close}>
            Learn
          </Link>
        </h6>
        <h6 className={pathname === '/quiz' ? active : dormant}>
          <Link href="/quiz" onClick={close}>
            Quiz
          </Link>
        </h6>
        <h6 className={pathname === '/careers' ? active : dormant}>
          <Link href="/careers" onClick={close}>
            Careers
          </Link>
        </h6>
        <h6 className={pathname === '/contact' ? active : dormant}>
          <Link href="/contact" onClick={close}>
            Contact
          </Link>
        </h6>
      </div>
      <h6 className={pathname === '/login' ? active : dormant}>
        <Link href="/login" onClick={close}>
          Login
        </Link>
      </h6>
    </div>
  );
}
