import NavLinks from './nav-links';

export default function MobileNavbar({ setOpen }) {
  return (
    <div className="fixed bottom-0 z-30 flex h-[calc(100vh-64px)] w-full flex-col justify-around bg-violet-600 px-9">
      <NavLinks setOpen={setOpen} />
    </div>
  );
}
