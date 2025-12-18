import type { Metadata } from 'next';
import { FileText } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for using the 54NotesHub website.',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="space-y-8">
        <div className="text-center">
          <FileText className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        <div className="prose prose-lg mx-auto max-w-none text-foreground dark:prose-invert prose-headings:font-headline prose-a:text-primary prose-strong:text-foreground">
          <h2>1. Agreement to Terms</h2>
          <p>
            By using our website, 54NotesHub (the "Site"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the Site.
          </p>
          
          <h2>2. Intellectual Property Rights</h2>
          <p>
            The content on the Site, including text, graphics, and logos, is the property of 54NotesHub and is protected by copyright laws. The study materials provided are for personal, non-commercial use only.
          </p>

          <h2>3. Acceptable Use</h2>
          <p>
            You agree not to use the Site for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the Site in any way that could damage the Site, the services, or the general business of 54NotesHub.
          </p>
          <ul>
            <li>You further agree not to use the Site to harass, abuse, or threaten others or otherwise violate any person's legal rights.</li>
            <li>You further agree not to violate any intellectual property rights of the Site or any third party.</li>
          </ul>

          <h2>4. External Links</h2>
          <p>
            The Site provides links to Google Drive for accessing study materials. We are not responsible for the content or availability of these external resources. We do not endorse and are not responsible or liable for any content, advertising, products, or other materials on or available from such sites or resources.
          </p>

          <h2>5. Disclaimer of Warranties</h2>
          <p>
            The Site is provided on an "as is" and "as available" basis. 54NotesHub makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            In no event shall 54NotesHub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Site, even if 54NotesHub or a 54NotesHub authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of our operating jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>

          <h2>8. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us via our <Link href="/contact">contact page</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
