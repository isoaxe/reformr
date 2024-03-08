import Hero from './(main)/home/hero';
import Process from './(main)/home/process';
import SalesPitch from './(main)/home/sales-pitch';
import FAQ from './(main)/home/faq';
import Closer from './(main)/home/closer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Process />
      <SalesPitch />
      <FAQ />
      <Closer />
    </main>
  );
}
