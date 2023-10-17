import Navbar from '@/components/layout/full-navbar';
import Footer from '@/components/layout/footer';

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
