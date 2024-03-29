import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import { TailwindIndicator } from '@/components/TailwindIndicator';
import { Inter } from 'next/font/google';

import { ReactNode } from 'react';

import { twMerge } from 'tailwind-merge';
import Script from 'next/script';

export const runtime = 'edge';

export const metadata: Metadata = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className='overflow-x-hidden'>
      <body className={twMerge(inter.className, 'overflow-x-hidden')}>
        <Script src='https://www.googletagmanager.com/gtag/js?id=G-W4GRB35MPB' />
        <Script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-W4GRB35MPB');
        `}</Script>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
