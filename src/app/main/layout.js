import FullNavbar from '@/components/layout/full-navbar';
import Footer from '@/components/layout/footer';

export default function MainLayout({ children }) {
  return (
    <div>
      <FullNavbar />
      {children}
      <Footer />
    </div>
  );
}
