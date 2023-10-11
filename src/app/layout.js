import { cookies } from 'next/headers';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { ClientCookiesProvider } from './providers';
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
        <ClientCookiesProvider value={cookies().getAll()}>
          {children}
        </ClientCookiesProvider>
        <Footer />
      </body>
    </html>
  );
}
