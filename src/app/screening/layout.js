export default function ScreeningLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col justify-center text-xl md:text-2xl xl:text-3xl">
      <div className="mx-auto flex w-full max-w-md flex-col px-4 xs:px-9 sm:max-w-6xl">
        {children}
      </div>
    </div>
  );
}
