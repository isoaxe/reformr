import Hero from './hero';
import Process from './process';
import SalesPitch from './sales-pitch';
import FAQ from './faq';
import Closer from './closer';

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
