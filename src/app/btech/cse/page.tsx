import { CseNotes } from '@/components/CseNotes';
import { notes } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CSE Notes',
  description: 'Find all your B.Tech Computer Science Engineering (CSE) notes, syllabus, and study materials here.',
};

export default function CsePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            CSE Notes & Materials
          </h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            All your B.Tech CSE resources in one place. Use the search bar to filter subjects instantly.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <CseNotes notes={notes} />
      </div>
    </div>
  );
}
