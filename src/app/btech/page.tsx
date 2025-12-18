import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Laptop } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'B.Tech Courses',
  description: 'Explore Bachelor of Technology branches and find your study materials.',
};

export default function BTechPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">B.Tech Branches</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Select your branch to access notes and study materials.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-12 grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-1 md:gap-12 lg:max-w-5xl">
        <Link href="/btech/cse">
          <Card className="group transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-accent p-3">
                  <Laptop className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <CardTitle>Computer Science Engineering (CSE)</CardTitle>
                  <CardDescription>The only branch currently available.</CardDescription>
                </div>
              </div>
              <ArrowRight className="h-6 w-6 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
            </CardHeader>
            <CardContent>
              <p>Access a wide range of notes, syllabus, and materials for all Computer Science Engineering subjects.</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
