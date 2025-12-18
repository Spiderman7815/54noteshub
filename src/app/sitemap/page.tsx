import type { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import { notes } from '@/lib/data';
import { Map } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sitemap',
  description: 'A complete sitemap of 54NotesHub, helping you navigate through all our high-quality pages, blog posts, and CSE resources.',
};

const mainPages = [
    { url: '/', title: 'Home' },
    { url: '/about', title: 'About Us' },
    { url: '/contact', title: 'Contact' },
    { url: '/blog', title: 'Blog' },
    { url: '/btech', title: 'B.Tech Courses' },
    { url: '/btech/cse', title: 'B.Tech CSE Notes' },
];

const legalPages = [
    { url: '/privacy-policy', title: 'Privacy Policy' },
    { url: '/terms', title: 'Terms of Service' },
    { url: '/disclaimer', title: 'Disclaimer' },
];

const siteUrl = 'https://54noteshub.netlify.app';


export default function SitemapPage() {
    const blogPosts = getBlogPosts();

    const sitemapSchema = {
      '@context': 'https://schema.org',
      '@type': 'Sitemap',
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': `${siteUrl}/sitemap`
      },
      'url': `${siteUrl}/sitemap.xml`
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(sitemapSchema) }}
            />
            <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16 lg:py-20">
                <div className="space-y-12">
                    <div className="text-center">
                        <Map className="mx-auto h-12 w-12 text-primary" />
                        <h1 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                            Sitemap
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Find your way around 54NotesHub. An overview of all our content to help you and search engines navigate the site.
                        </p>
                         <p className="mt-2 text-sm text-muted-foreground">
                           For a machine-readable version, see our <Link href="/sitemap.xml" className="text-primary underline">XML Sitemap</Link>.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                        <div className="space-y-6">
                            <h2 className="font-headline text-2xl font-semibold">Main Pages</h2>
                            <ul className="space-y-3">
                                {mainPages.map(page => (
                                    <li key={page.url}>
                                        <Link href={page.url} className="text-primary hover:underline">
                                            {page.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            
                            <h2 className="mt-8 font-headline text-2xl font-semibold">Legal</h2>
                            <ul className="space-y-3">
                                {legalPages.map(page => (
                                    <li key={page.url}>
                                        <Link href={page.url} className="text-primary hover:underline">
                                            {page.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h2 className="font-headline text-2xl font-semibold">Blog Posts</h2>
                            <ul className="space-y-3">
                                {blogPosts.map(post => (
                                    <li key={post.slug}>
                                        <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">
                                            {post.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="font-headline text-2xl font-semibold">CSE Notes & Subjects</h2>
                        <p className="text-muted-foreground">All subject notes are available on the main CSE Notes page. Here is a quick list for your convenience.</p>
                        <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                            {notes.map(note => (
                                <li key={note.id}>
                                    <Link href="/btech/cse" className="text-primary hover:underline">
                                        {note.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </>
    );
}
