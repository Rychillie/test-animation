import { LayoutTransition, Nav, Providers } from '@/components';
import '@/styles/globals.css';
import c from 'clsx';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export interface RootLayoutProps {
  children: ReactNode;
}

const animation = {
  initial: { opacity: 0, y: -15, height: '100%' },
  animate: {
    opacity: 1,
    y: 0,
    height: 'auto',
    transition: { delay: 0.1, duration: 0.1 }
  },
  exit: { opacity: 0, y: 15, height: '100%' }
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={c('scroll-smooth antialiased', GeistMono.variable, GeistSans.variable)}
      suppressHydrationWarning
    >
      <body className="overflow-x-hidden text-sm text-primary dark:bg-primary dark:text-primary-dark md:text-base lg:text-base">
        <Providers>
          <Nav />
          <main className="mx-auto min-h-full max-w-3xl pb-page-bottom-mobile pt-page-top-mobile md:pb-page-bottom md:pt-page-top">
            <LayoutTransition
              initial={animation.initial}
              animate={animation.animate}
              exit={animation.exit}
            >
              {children}
            </LayoutTransition>
          </main>
        </Providers>
      </body>
    </html>
  );
}
