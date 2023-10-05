import Hero from './home/hero';
import Process from './home/process';
import SalesPitch from './home/sales-pitch';
import FAQ from './home/faq';
import Closer from './home/closer';

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
