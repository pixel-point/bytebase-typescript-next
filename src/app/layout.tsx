'use client';

import { usePathname } from 'next/navigation';

import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';

import Route from '@/lib/route';

import '@/styles/main.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  let isDocs = false;
  if (pathname.startsWith(Route.DOCS)) {
    isDocs = true;
  }

  return (
    <html lang="en" className="h-full">
      <head />
      <body className="flex h-full flex-col">
        <Header isDocs={isDocs} />
        <main className="relative z-20 shrink-0 grow basis-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
