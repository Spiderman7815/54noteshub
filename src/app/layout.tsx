import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const siteUrl = 'https://54noteshub.netlify.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '54NotesHub - High-Quality B.Tech CSE Notes & Resources',
    template: '%s | 54NotesHub',
  },
  description: 'Your one-stop destination for comprehensive B.Tech CSE notes, syllabus, and high-quality study materials. All resources are free, easy to access, and updated regularly.',
  keywords: ['B.Tech CSE', 'Notes', 'Syllabus', 'Study Material', 'Engineering', 'Computer Science', 'Free Notes', 'Student Resources', 'Career Guidance', 'Study Tips'],
  authors: [{ name: '54NotesHub Team', url: `${siteUrl}/about` }],
  creator: '54NotesHub',
  publisher: '54NotesHub',
  openGraph: {
    title: '54NotesHub - High-Quality B.Tech CSE Notes & Resources',
    description: 'The ultimate resource hub for B.Tech Computer Science Engineering students.',
    url: siteUrl,
    siteName: '54NotesHub',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '54NotesHub - High-Quality B.Tech CSE Notes & Resources',
    description: 'The ultimate resource hub for B.Tech Computer Science Engineering students.',
  },
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': `${siteUrl}/rss.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '54NotesHub',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`, // Assuming you will have a logo at this path
    sameAs: [], // Add social media links here
  };

  const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: '54NotesHub',
      url: siteUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/btech/cse?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
  };


  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <meta name="google-site-verification" content="g1G3rQVd3ADd7FQy_3450PomNORIs3PUKBccTijzXz0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2240851636269075"
          crossOrigin="anonymous" strategy="afterInteractive"></Script>
      </head>
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
