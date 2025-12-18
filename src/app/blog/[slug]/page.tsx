import { getBlogPost, getBlogPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Calendar, Tag } from 'lucide-react';
import Link from 'next/link';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) {
    return {};
  }
  return {
    title: post.title,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <article className="prose prose-lg mx-auto max-w-none text-foreground dark:prose-invert prose-headings:font-headline prose-a:text-primary prose-strong:font-semibold prose-strong:text-foreground prose-img:rounded-xl">
        <div className="space-y-4 not-prose">
            <div className="relative mb-8 h-72 w-full md:h-96">
                <Image
                    src={post.image.imageUrl}
                    alt={post.title}
                    fill
                    className="rounded-xl object-cover"
                    priority
                />
            </div>
          <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground">
             <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            </div>
             <div className="flex items-center gap-2">
                <Tag className="h-5 w-5" />
                <span>{post.tags.join(', ')}</span>
            </div>
          </div>
        </div>

        {/* This is a simplified way to render markdown content. For a real app, you would use a library like 'react-markdown'. */}
        <div dangerouslySetInnerHTML={{ __html: post.content.replace(/##(.*?)\n/g, '<h2>$1</h2>').replace(/###(.*?)\n/g, '<h3>$1</h3>').replace(/-\s(.*?)\n/g, '<li>$1</li>').replace(/(\n<li>)/g, '<ul><li>').replace(/(<\/li>\n)(?!<li>)/g, '</li></ul>') }} />

        <div className="mt-12 border-t pt-8 text-center not-prose">
            <Link href="/blog" className="text-primary hover:underline">
                &larr; Back to Blog
            </Link>
        </div>
      </article>
    </div>
  );
}
