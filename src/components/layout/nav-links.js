import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks({ setOpen }) {
  const pathname = usePathname();

  const close = () => setOpen(false);

  // Link styles.
  const constant = ' h-full flex items-center mt-5 md:mt-0';
  const active = 'font-bold bg-primary text-cyan-200' + constant;
  const dormant =
    'font-normal hover:drop-shadow-light md:hover:pb-4 transition-all' +
    constant;

  return (
    <div className="flex h-40 w-full flex-col justify-between pb-1 pt-6 text-xl text-white md:h-full md:flex-row">
      <div className="flex h-80 flex-col md:h-full md:w-full md:max-w-xl md:flex-row md:justify-between md:pr-16">
        <h6 className={pathname === '/main/blog' ? active : dormant}>
          <Link href="/main/blog" onClick={close}>
            Learn
          </Link>
        </h6>
        <h6 className={pathname === '/signup/screening' ? active : dormant}>
          <Link href="/signup/screening" onClick={close}>
            Quiz
          </Link>
        </h6>
        <h6 className={pathname === '/main/careers' ? active : dormant}>
          <Link href="/main/careers" onClick={close}>
            Careers
          </Link>
        </h6>
        <h6 className={pathname === '/main/contact' ? active : dormant}>
          <Link href="/main/contact" onClick={close}>
            Contact
          </Link>
        </h6>
      </div>
      <h6 className={pathname === '/main/login' ? active : dormant}>
        <Link href="/main/login" onClick={close}>
          Login
        </Link>
      </h6>
    </div>
  );
}
