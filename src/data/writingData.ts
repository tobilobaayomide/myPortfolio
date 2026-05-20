export type WritingEntry = {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  platform: string;
  readTime: string;
  url: string;
  tags: string[];
  coverImage?: string;
  coverAlt?: string;
  featured?: boolean;
};

export const WRITING_ENTRIES: WritingEntry[] = [
  {
    id: 'building-calm-dashboards',
    title: 'Building ResumeeNow: The Engineering Behind an AI-Powered Resume Platform',
    excerpt: 'How I built an AI-powered resume app with resume parsing, ATS audits, cover letter generation, and reliable PDF export.',
    publishedAt: 'April 2026',
    platform: 'DEV',
    readTime: '9 min read',
    url: 'https://dev.to/hunkymanie/building-resumeenow-the-engineering-behind-an-ai-powered-resume-platform-535n',
    tags: ['Frontend', 'Architecture', 'React'],
    featured: true,
  },
    {
    id: 'rethinking-trust-boundaries',
    title: 'Rethinking Trust Boundaries in Auth and Billing Flows',
    excerpt: 'I recently reworked my application so billing and authentication flows no longer depend too heavily on browser-trusted state.',
    publishedAt: 'May 2026',
    platform: 'DEV',
    readTime: '6 min read',
    url: 'https://dev.to/hunkymanie/rethinking-trust-boundaries-in-auth-and-billing-flows-3gao',
    tags: ['Backend', 'Architecture', 'Security'],
    featured: true,
  },
];
