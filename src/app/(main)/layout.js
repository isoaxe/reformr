import FullNavbar from '@/components/layout/full-navbar';
import Footer from '@/components/layout/footer';

export default function MainLayout({ children }) {
  return (
    <>
      <FullNavbar />
      {children}
      <Footer />
    </>
  );
}
