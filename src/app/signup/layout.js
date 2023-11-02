import FocusNavbar from '@/components/layout/focus-navbar';

export default function ScreeningLayout({ children }) {
  return (
    <>
      <FocusNavbar />
      <div className="mt-12 flex min-h-[calc(100vh-3rem)] items-center py-6 text-xl md:mt-16 md:min-h-[calc(100vh-4rem)] md:text-2xl xl:text-3xl">
        <div className="mx-auto flex w-full max-w-md px-4 xs:px-9 sm:max-w-6xl">
          {children}
        </div>
      </div>
    </>
  );
}
