import Script from 'next/script';
import { cookies } from 'next/headers';
import { AuthProvider, ClientCookiesProvider } from '@/util/providers';
import { sohne } from '@/util/fonts';
import './globals.css';

export const metadata = {
  title: 'Reformr',
  description: 'Personalised medical weight loss in one simple subscription.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sohne.className}>
        <Script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        />
        <AuthProvider>
          <ClientCookiesProvider value={cookies().getAll()}>
            {children}
          </ClientCookiesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
