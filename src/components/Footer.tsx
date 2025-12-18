import Link from 'next/link';
import { BookOpenText } from 'lucide-react';

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms' },
  { href: '/adsense-check', label: 'AdSense Check' },
];

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
            <Link href="/" className="flex items-center gap-2 font-headline text-lg font-bold">
              <BookOpenText className="h-6 w-6 text-primary" />
              <span>54NotesHub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} 54NotesHub. All rights reserved.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-end">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
