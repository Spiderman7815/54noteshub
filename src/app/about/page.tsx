import type { Metadata } from 'next';
import { BookOpenCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the mission, vision, and the team behind 54NotesHub. Our goal is to provide free, high-quality, and accessible study materials for B.Tech CSE students worldwide.',
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
            Our mission is to democratize education by making high-quality study resources accessible to every engineering student.
          </p>
        </div>
        <div className="prose prose-lg mx-auto max-w-none text-foreground dark:prose-invert prose-headings:font-headline prose-a:text-primary prose-strong:text-foreground">
          <h2>Our Core Mission</h2>
          <p>
            At 54NotesHub, our primary goal is to empower Bachelor of Technology (B.Tech) Computer Science Engineering (CSE) students by providing them with a centralized hub of high-quality, organized, and easily accessible study materials. We understand the significant challenges students face when searching for reliable and comprehensive notes, official syllabi, and other crucial resources. Our platform was created to solve this problem, consolidating everything a CSE student needs to excel into one convenient, user-friendly location.
          </p>
          <h2>The Story Behind Our Start</h2>
          <p>
            The idea for 54NotesHub was born from our own firsthand experiences as engineering students. We spent countless hours navigating a fragmented digital landscape, searching for notes that were often scattered across different platforms, incomplete, outdated, or of poor quality. We believe that every student, regardless of their background, deserves access to the best possible resources without financial barriers or frustrating searches. By meticulously curating and organizing notes for each subject, we aim to save you valuable time and help you focus on what truly matters: deep learning and understanding.
          </p>
          <h2>What We Offer: Your Academic Toolkit</h2>
          <p>
            54NotesHub is meticulously designed to be your go-to resource throughout your B.Tech CSE studies. We are more than just a notes repository; we are a complete academic toolkit offering:
          </p>
          <ul>
            <li><strong>Comprehensive, Syllabus-Aligned Notes:</strong> Detailed and structured notes for a wide array of CSE subjects, carefully aligned with common university curricula to ensure relevance and completeness.</li>
            <li><strong>Instant, Seamless Access:</strong> All our notes are hosted on Google Drive, allowing for lightning-fast previews and direct, one-click downloads without any hassle.</li>
            <li><strong>Valuable Original Content:</strong> Our blog features in-depth articles on study techniques, career guidance, and technology trends written to help you succeed beyond the classroom.</li>
            <li><strong>Optimized User Experience:</strong> We've built a clean, minimal, and fast-loading website that is a pleasure to navigate on any device, be it your laptop, tablet, or smartphone.</li>
            <li><strong>A Commitment to Free Education:</strong> We are fundamentally committed to our "free for everyone" promise. Our goal is to break down financial barriers to education.</li>
          </ul>
          <h2>Our Unwavering Commitment</h2>
          <p>
            We are passionately dedicated to the continuous improvement and expansion of 54NotesHub. Our team is constantly working behind the scenes to add new resources, update existing materials to reflect the latest curriculum changes, and enhance the overall user experience. We believe in the transformative power of education and are proud to support the next generation of engineers, developers, and innovators on their academic journey. Your success is our success.
          </p>
        </div>
      </div>
    </div>
  );
}
