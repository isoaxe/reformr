import NavLinks from './nav-links';

export default function MobileNavbar({ setOpen }) {
  return (
    <div className="fixed top-0 z-20 flex h-screen w-full flex-col bg-violet-500 px-9">
      <NavLinks setOpen={setOpen} />
    </div>
  );
}
