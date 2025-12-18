import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, BookText, PenTool, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');

  return (
    <div className="flex flex-col">
      <section className="relative w-full bg-background pt-12 md:pt-24 lg:pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                 <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  Your Ultimate Study Partner for B.Tech CSE
                </div>
                <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to 54NotesHub
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Access a comprehensive, meticulously organized library of B.Tech CSE syllabus, high-quality notes, and valuable study materials—all completely free and designed for your success.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="group">
                  <Link href="/btech/cse">
                    Explore Notes
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <Link href="/blog">
                        Visit The Blog
                    </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-96">
              {heroImage && (
                 <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    data-ai-hint={heroImage.imageHint}
                    fill
                    className="rounded-xl object-cover"
                    priority
                  />
              )}
            </div>
          </div>
        </div>
      </section>
      
      <section id="features" className="w-full bg-muted/40 py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose 54NotesHub?</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        We are committed to providing the best tools and resources to help you excel in your engineering journey. Our platform is built by students, for students.
                    </p>
                </div>
            </div>
            <div className="mx-auto mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="flex flex-col">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <BookText className="h-8 w-8 text-primary" />
                        <CardTitle>Comprehensive & Curated Notes</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">Access high-quality, well-organized notes covering the entire B.Tech CSE syllabus. We save you time from searching, so you can focus on learning effectively.</p>
                    </CardContent>
                </Card>
                 <Card className="flex flex-col">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <PenTool className="h-8 w-8 text-primary" />
                        <CardTitle>Valuable Blog Content</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">Read insightful articles on proven study strategies, career guidance for the tech industry, and emerging technology trends to keep you ahead of the curve.</p>
                    </CardContent>
                </Card>
                 <Card className="flex flex-col">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Search className="h-8 w-8 text-primary" />
                        <CardTitle>Easy-to-Find Resources</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">Our powerful and intuitive search feature lets you instantly find the exact notes and materials you need for any subject, anytime, anywhere.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      <section id="cta" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-4 px-4 text-center md:px-6">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Elevate Your Studies?</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Dive into our extensive collection of notes and start learning today. It's 100% free and always will be. Join a community of dedicated learners.
            </p>
            <Button asChild size="lg" className="group mt-4">
                <Link href="/btech/cse">
                    Start Learning Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
