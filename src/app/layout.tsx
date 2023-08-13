import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import { TailwindIndicator } from '@/components/TailwindIndicator';
import { Inter } from 'next/font/google';

import { ReactNode } from 'react';

import { twMerge } from 'tailwind-merge';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className='overflow-x-hidden'>
      <body className={twMerge(inter.className, 'overflow-x-hidden')}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
