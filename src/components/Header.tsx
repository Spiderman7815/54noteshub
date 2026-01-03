

"use client";

import Link from 'next/link';
import { BookOpenText, Menu, X, BrainCircuit, Laptop } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from './ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import * as React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const courseComponents: { title: string; href: string; description: string, icon: React.FC<React.SVGProps<SVGSVGElement>> }[] = [
  {
    title: "Computer Science (CSE)",
    href: "/btech/cse",
    description:
      "Access notes for core computer science subjects like Data Structures, Algorithms, and Operating Systems.",
    icon: Laptop
  },
  {
    title: "CSE (AI & ML)",
    href: "/btech/csm",
    description:
      "Explore specialized notes for Artificial Intelligence, Machine Learning, Deep Learning, and more.",
    icon: BrainCircuit
  },
]


export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = React.useState(false);

  const NavLink = ({ href, label, className }: { href: string; label: string; className?: string }) => {
    const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
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
        <nav className="hidden items-center gap-1 md:flex">
         <NavigationMenu>
            <NavigationMenuList>
               {navLinks.slice(0,1).map((link) => {
                  const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                  return (
                    <NavigationMenuItem key={link.href}>
                      <Link href={link.href} legacyBehavior passHref>
                        <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), isActive ? 'font-bold text-primary' : 'text-muted-foreground')}>
                           <a>{link.label}</a>
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  )
                })}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(pathname.startsWith('/btech') && 'font-bold text-primary')}>Courses</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {courseComponents.map((component) => {
                      const Icon = component.icon;
                      return (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        icon={<Icon className="h-6 w-6 text-primary" />}
                      >
                        {component.description}
                      </ListItem>
                    )})}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
               {navLinks.slice(1).map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <NavigationMenuItem key={link.href}>
                       <Link href={link.href} legacyBehavior passHref>
                        <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), isActive ? 'font-bold text-primary' : 'text-muted-foreground')}>
                           <a>{link.label}</a>
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  )
                })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs p-0">
                <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between border-b p-4">
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
                    <nav className="mt-4 flex flex-col items-start space-y-1 p-4">
                        <NavLink href="/" label="Home" />
                        <p className="px-4 pt-2 pb-1 text-sm font-semibold text-muted-foreground">COURSES</p>
                        <NavLink href="/btech/cse" label="CSE" />
                        <NavLink href="/btech/csm" label="CSE (AI & ML)" />
                        <p className="px-4 pt-4 pb-1 text-sm font-semibold text-muted-foreground">SITE</p>
                        <NavLink href="/blog" label="Blog" />
                        <NavLink href="/about" label="About" />
                        <NavLink href="/contact" label="Contact" />
                    </nav>
                </div>
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">
                    Main navigation menu for 54NotesHub
                </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<typeof Link> & { icon: React.ReactNode, title: string }
>(({ className, title, children, icon, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href!}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-3">
             {icon}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

    
