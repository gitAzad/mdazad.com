import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Example: if you had a private admin area
    },
    sitemap: 'https://mdazad.com/sitemap.xml',
  };
}
