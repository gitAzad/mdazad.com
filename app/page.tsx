import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { Metadata } from 'next';

// --- SEO METADATA CONFIGURATION ---
export const metadata: Metadata = {
  metadataBase: new URL('https://mdazad.com'),

  title: {
    default: 'Md Azad | Senior Full Stack Engineer & Fintech Architect',
    template: '%s | Md Azad',
  },
  description:
    'High-impact Full Stack Engineer with 5+ years of experience architecting scalable fintech and enterprise solutions. Expert in Java Spring Boot, Next.js, AWS, and Microservices.',
  keywords: [
    'Full Stack Engineer',
    'Java Developer',
    'Spring Boot Expert',
    'Next.js Developer',
    'Fintech Solutions Architect',
    'Enterprise Software',
    'React Developer',
    'AWS Cloud Native',
    'Microservices Architecture',
    'Md Azad Portfolio',
    'Software Engineer Mumbai',
  ],
  authors: [{ name: 'Md Azad', url: 'https://mdazad.com' }],
  creator: 'Md Azad',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mdazad.com',
    title: 'Md Azad | Architecting Scalable Fintech & Enterprise Solutions',
    description:
      'Explore the portfolio of Md Azad, a Senior Engineer specializing in building secure, high-availability applications for clients like Piramal Finance and JK Tyre.',
    siteName: 'Md Azad Portfolio',
    images: [
      {
        url: '/api/og', // This relative path now works because of metadataBase
        width: 1200,
        height: 630,
        alt: 'Md Azad - Senior Full Stack Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md Azad | Senior Full Stack Engineer',
    description:
      'Architecting scalable fintech & enterprise solutions with Spring Boot & Next.js.',
    images: ['/api/og'],
    creator: '@mdazadx',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://mdazad.com',
  },
};

// --- JSON-LD STRUCTURED DATA (FOR GOOGLE RICH SNIPPETS) ---
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Md Azad',
  jobTitle: 'Senior Full Stack Engineer',
  url: 'https://mdazad.com',
  sameAs: [
    'https://www.linkedin.com/in/mr-azad',
    'https://github.com/gitAzad',
    'https://x.com/mdazadx',
  ],
  alumniOf: 'Nehru Gram Bharti University',
  knowsAbout: [
    'Software Engineering',
    'Fintech',
    'Java Spring Boot',
    'Next.js',
    'Cloud Architecture',
    'Enterprise Solutions',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressCountry: 'India',
  },
  image: 'https://mdazad.com/me.png',
  description:
    'Architecting scalable fintech and enterprise solutions. 5+ years of experience boosting system efficiency and reducing latency.',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50 dark:bg-[#0B1120] text-slate-900 dark:text-white transition-colors duration-500">
      {/* Inject JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
