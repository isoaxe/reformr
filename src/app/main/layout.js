import FullNavbar from '@/components/layout/full-navbar';
import Footer from '@/components/layout/footer';

export default function MainLayout({ children }) {
  return (
    <div className="mt-12 md:mt-16">
      <FullNavbar />
      {children}
      <Footer />
    </div>
  );
}
