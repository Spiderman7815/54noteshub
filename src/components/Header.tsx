"use client";

import Link from 'next/link';
import { BookOpenText, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from './ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import * as React from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = React.useState(false);

  const NavLink = ({ href, label, className }: { href: string; label: string; className?: string }) => {
    const isActive = pathname === href;
    return (
      <Link href={href} passHref>
        <SheetClose asChild>
          <Button
            variant="ghost"
            className={cn(
              'w-full justify-start text-base',
              isActive ? 'font-bold text-primary' : 'text-foreground/80',
              className
            )}
            onClick={() => setSheetOpen(false)}
          >
            {label}
          </Button>
        </SheetClose>
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-headline text-lg font-bold">
          <BookOpenText className="h-6 w-6 text-primary" />
          <span>54NotesHub</span>
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          {navLinks.slice(0, 3).map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <Button
                variant="ghost"
                className={cn(
                  'text-sm font-medium',
                  pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs p-4">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Main navigation menu for 54NotesHub
              </SheetDescription>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 font-headline text-lg font-bold" onClick={() => setSheetOpen(false)}>
                        <BookOpenText className="h-6 w-6 text-primary" />
                        <span>54NotesHub</span>
                    </Link>
                    <SheetClose asChild>
                        <Button variant="ghost" size="icon">
                            <X className="h-6 w-6" />
                        </Button>
                    </SheetClose>
                </div>
                <nav className="mt-8 flex flex-col items-start space-y-2">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} href={link.href} label={link.label} />
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
