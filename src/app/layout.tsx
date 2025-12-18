import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: '54NotesHub - High-Quality B.Tech CSE Notes',
    template: '%s | 54NotesHub',
  },
  description: 'Your one-stop destination for comprehensive B.Tech CSE notes, syllabus, and high-quality study materials. All resources are free and easy to access.',
  keywords: ['B.Tech CSE', 'Notes', 'Syllabus', 'Study Material', 'Engineering', 'Computer Science', 'Free Notes', 'Student Resources'],
  authors: [{ name: '54NotesHub Team' }],
  creator: '54NotesHub',
  publisher: '54NotesHub',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-body antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
