import { BlogPosts, getBlogPosts } from '@/lib/blog';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Explore articles on study tips, career advice, and technology for B.Tech CSE students.',
};

export default function BlogPage() {
    const blogPosts = getBlogPosts();

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Blog
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Insights on studying, career paths, and the tech world for CSE students.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative h-48 w-full">
                        <Image
                            src={post.image.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </Link>
              <CardHeader>
                <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <Tag className="h-4 w-4" />
                    <span>{post.tags.join(', ')}</span>
                </div>
                <CardTitle className="line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                        {post.title}
                    </Link>
                </CardTitle>
                <CardDescription className="line-clamp-3">{post.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                </div>
                <Button asChild variant="ghost" size="sm" className="group">
                    <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
