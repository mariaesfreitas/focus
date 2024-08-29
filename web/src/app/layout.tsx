import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Focus Consultoria',
  description: 'Focus Consultoria Jurídica',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Focus Consultoria</title>
        <meta name="description" content="Focus Consultoria Jurídica" />
      </Head>
      <body className={`${inter.className} ${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}
