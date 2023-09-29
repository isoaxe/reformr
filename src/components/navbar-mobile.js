import NavLinks from './nav-links';

export default function MobileNavbar({ setOpen }) {
  return (
    <div className="fixed z-30 flex h-screen w-full flex-col justify-around bg-violet-600 px-9">
      <NavLinks setOpen={setOpen} />
    </div>
  );
}
