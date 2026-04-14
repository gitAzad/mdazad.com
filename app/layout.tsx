import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeProvider } from 'next-themes';
import ThemeStudioProvider from '@/components/ThemeStudioProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Md Azad | Senior Full Stack Engineer & Fintech Architect',
  description:
    'Architecting scalable fintech & enterprise solutions with Spring Boot & Next.js.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeStudioProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </ThemeStudioProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
