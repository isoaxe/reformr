import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { sohne } from '@/util/fonts';
import './globals.css';

export const metadata = {
  title: 'Reformr',
  description: 'Personalised medical weight loss in one simple subscription.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sohne.className} mt-12 md:mt-16`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
