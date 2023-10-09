export default function ScreeningLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col justify-center text-xl md:text-2xl xl:text-3xl">
      {children}
    </div>
  );
}
