import './globals.css';
import { TailwindIndicator } from '@/components/TailwindIndicator';
import { ThemeProvider } from '@/components/ThemeProvider';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import type { ReactNode } from 'react';

import Script from 'next/script';
import { twMerge } from 'tailwind-merge';

export const runtime = 'edge';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden" suppressHydrationWarning>
      <body className={twMerge(inter.className, 'overflow-x-hidden')}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-W4GRB35MPB" />
        <Script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-W4GRB35MPB');
        `}</Script>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
