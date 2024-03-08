import Hero from './(main)/home/hero';
import Process from './(main)/home/process';
import SalesPitch from './(main)/home/sales-pitch';
import FAQ from './(main)/home/faq';
import Closer from './(main)/home/closer';
import FullNavbar from '@/components/layout/full-navbar';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <main>
      <FullNavbar />
      <Hero />
      <Process />
      <SalesPitch />
      <FAQ />
      <Closer />
      <Footer />
    </main>
  );
}
