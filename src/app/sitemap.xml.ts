import { getBlogPosts } from '@/lib/blog';
import { MetadataRoute } from 'next';

const siteUrl = 'https://54noteshub.netlify.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages = [
    '/',
    '/about',
    '/contact',
    '/blog',
    '/btech',
    '/btech/cse',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
    '/sitemap',
    '/adsense-check'
  ];

  const mainRoutes = mainPages.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '/' ? 1 : 0.8,
  }));

  const blogPosts = getBlogPosts();
  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...mainRoutes, ...blogRoutes];
}
