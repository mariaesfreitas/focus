import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Montserrat } from 'next/font/google';
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
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>Focus Consultoria</title>
        <meta name="description" content="Focus Consultoria Jurídica" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16557772849"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16557772849');
          `}
        </script>
      </head>
      <body className={`${inter.className} ${montserrat.className}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=AW-16557772849"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
