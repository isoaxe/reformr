import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks({ setOpen }) {
  const pathname = usePathname();

  const close = () => setOpen(false);

  // Link styles.
  const constant = ' h-full flex items-center px-4';
  const active = 'font-bold bg-primary' + constant;
  const dormant = 'font-semibold' + constant;

  return (
    <div className="flex h-40 w-full flex-col justify-between text-xl md:h-full md:w-96 md:flex-row">
      <h6 className={pathname === '/quiz' ? active : dormant}>
        <Link href="/quiz" onClick={close}>
          Quiz
        </Link>
      </h6>
      <h6 className={pathname === '/contact' ? active : dormant}>
        <Link href="/contact" onClick={close}>
          Contact
        </Link>
      </h6>
      <h6 className={pathname === '/login' ? active : dormant}>
        <Link href="/login" onClick={close}>
          Login
        </Link>
      </h6>
    </div>
  );
}
