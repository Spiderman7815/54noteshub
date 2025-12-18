import type { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import { notes } from '@/lib/data';
import { Map } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sitemap',
  description: 'A complete sitemap of 54NotesHub, helping you navigate through all our pages and resources.',
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

export default function SitemapPage() {
    const blogPosts = getBlogPosts();

    return (
        <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16 lg:py-20">
            <div className="space-y-12">
                <div className="text-center">
                    <Map className="mx-auto h-12 w-12 text-primary" />
                    <h1 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Sitemap
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Find your way around 54NotesHub.
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
                    <h2 className="font-headline text-2xl font-semibold">CSE Notes</h2>
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
    );
}
