import type { Metadata } from 'next';
import { BookOpenCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the mission of 54NotesHub to provide free and accessible study materials for B.Tech CSE students.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="space-y-8">
        <div className="text-center">
          <BookOpenCheck className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            About 54NotesHub
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Our mission is to make education accessible for everyone.
          </p>
        </div>
        <div className="prose prose-lg mx-auto max-w-none text-foreground dark:prose-invert prose-headings:font-headline prose-a:text-primary prose-strong:text-foreground">
          <h2>Our Mission</h2>
          <p>
            At 54NotesHub, our primary goal is to empower B.Tech Computer Science Engineering (CSE) students by providing them with high-quality, organized, and easily accessible study materials. We understand the challenges students face when searching for reliable notes, syllabi, and resources. Our platform was created to solve this problem by centralizing everything a CSE student needs in one convenient place.
          </p>
          <h2>Why We Started</h2>
          <p>
            The idea for 54NotesHub was born from our own experiences as students. We spent countless hours searching for notes, often finding them scattered across different platforms, incomplete, or of poor quality. We believe that every student deserves access to the best resources without the hassle. By curating and organizing notes for each subject, we aim to save you time and help you focus on what truly matters: learning.
          </p>
          <h2>What We Offer</h2>
          <p>
            54NotesHub is designed to be your go-to resource for B.Tech CSE studies. We offer:
          </p>
          <ul>
            <li><strong>Comprehensive Notes:</strong> Detailed notes for various CSE subjects, covering the entire syllabus.</li>
            <li><strong>Easy Access:</strong> All notes are hosted on Google Drive, allowing for quick previews and direct downloads.</li>
            <li><strong>User-Friendly Interface:</strong> A clean, minimal, and fast-loading website that is easy to navigate on any device.</li>
            <li><strong>Free for Everyone:</strong> We are committed to keeping our resources free for all students.</li>
          </ul>
          <h2>Our Commitment</h2>
          <p>
            We are dedicated to continuously improving 54NotesHub. Our team is always working to add new resources, update existing materials, and enhance the user experience. We believe in the power of education and are proud to support the next generation of engineers on their academic journey.
          </p>
        </div>
      </div>
    </div>
  );
}
