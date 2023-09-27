import { Montserrat, Work_Sans } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const work = Work_Sans({
  variable: '--font-work-sans',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Reformr',
  description: 'Personalised medical weight loss in one simple subscription.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${work.variable}`}>
        {children}
      </body>
    </html>
  );
}
