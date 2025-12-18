import type { Metadata } from 'next';
import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Disclaimer for 54NotesHub. Understand the terms of use for the information provided on our website.',
};

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="space-y-8">
        <div className="text-center">
          <AlertTriangle className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Disclaimer
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        <div className="prose prose-lg mx-auto max-w-none text-foreground dark:prose-invert prose-headings:font-headline prose-a:text-primary prose-strong:text-foreground">
          <h2>General Information</h2>
          <p>
            The information provided by 54NotesHub ("we," "us," or "our") on this website is for general informational and educational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
          </p>
          
          <h2>Educational Content</h2>
          <p>
            The study materials, notes, and resources available on 54NotesHub are intended to supplement, not replace, formal education and course materials. They are curated from various sources and contributed by students and educators. While we strive to provide high-quality and accurate materials, we do not guarantee their correctness or suitability for any specific academic requirement. Students should always consult their official course syllabus and instructors for definitive information.
          </p>

          <h2>External Links Disclaimer</h2>
          <p>
            The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site.
          </p>

          <h2>Fair Use Disclaimer</h2>
          <p>
            The materials on this website are provided for educational and informational purposes. We believe this constitutes a 'fair use' of any such copyrighted material as provided for in section 107 of the US Copyright Law. If you wish to use copyrighted material from this site for purposes of your own that go beyond 'fair use,' you must obtain permission from the copyright owner.
          </p>

          <h2>No Professional Advice</h2>
          <p>
            The information is provided for educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. The use or reliance of any information contained on this site is solely at your own risk.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Disclaimer, you can contact us via our <Link href="/contact">contact page</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
