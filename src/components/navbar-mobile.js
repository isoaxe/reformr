import NavLinks from './nav-links';

export default function MobileNavbar({ setOpen }) {
  return (
    <div className="fixed bottom-0 z-30 flex h-[calc(100vh-48px)] w-full flex-col bg-violet-500 px-9">
      <NavLinks setOpen={setOpen} />
    </div>
  );
}
