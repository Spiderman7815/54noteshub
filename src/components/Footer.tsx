import Link from 'next/link';
import { BookOpenText } from 'lucide-react';
import { Button } from './ui/button';

const mainLinks = [
  { href: '/btech', label: 'Courses' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/disclaimer', label: 'Disclaimer' },
];

const utilityLinks = [
    { href: '/sitemap', label: 'Sitemap' },
    { href: '/adsense-check', label: 'AdSense Check' },
]

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-start gap-4 md:col-span-1">
                 <Link href="/" className="flex items-center gap-2 font-headline text-lg font-bold">
                    <BookOpenText className="h-6 w-6 text-primary" />
                    <span>54NotesHub</span>
                </Link>
                <p className="max-w-xs text-sm text-muted-foreground">
                    The ultimate resource hub for B.Tech CSE students.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-3">
                <div>
                    <h3 className="font-semibold text-foreground">Navigation</h3>
                    <ul className="mt-4 space-y-2">
                    {mainLinks.map((link) => (
                        <li key={link.href}>
                        <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                            {link.label}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-foreground">Legal</h3>
                    <ul className="mt-4 space-y-2">
                    {legalLinks.map((link) => (
                        <li key={link.href}>
                        <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                            {link.label}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>
                 <div>
                    <h3 className="font-semibold text-foreground">Utilities</h3>
                    <ul className="mt-4 space-y-2">
                    {utilityLinks.map((link) => (
                        <li key={link.href}>
                        <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                            {link.label}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
        <div className="mt-12 border-t pt-8">
             <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} 54NotesHub. All Rights Reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
