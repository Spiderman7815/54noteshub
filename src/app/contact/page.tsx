import { ContactForm } from '@/components/ContactForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';
import { Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the 54NotesHub team. We\'d love to hear from you!',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-12 md:px-6 md:py-16 lg:py-20">
       <div className="text-center mb-12">
          <Mail className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions or feedback? Fill out the form below to get in touch.
          </p>
        </div>
      <Card>
        <CardHeader>
          <CardTitle>Send us a message</CardTitle>
          <CardDescription>We typically respond within 2-3 business days.</CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </div>
  );
}
