import FocusNavbar from '@/components/layout/focus-navbar';

export default function ScreeningLayout({ children }) {
  return (
    <>
      <FocusNavbar />
      <div className="flex min-h-screen items-center text-xl md:text-2xl xl:text-3xl">
        <div className="mx-auto flex w-full max-w-md px-4 xs:px-9 sm:max-w-6xl">
          {children}
        </div>
      </div>
    </>
  );
}
