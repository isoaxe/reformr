export default function Home() {
  return (
    <main>
      <section className="relative h-[calc(100vh-3rem)] md:h-[calc(100vh-4rem)]">
        <video
          autoPlay
          loop
          muted
          className="absolute z-0 h-full w-full object-cover"
          alt="Slow-motion video of a woman slowly exhaling whilst rolling her shoulders."
        >
          <source src="videos/home-hero.mp4" type="video/mp4" />
        </video>
      </section>
    </main>
  );
}
