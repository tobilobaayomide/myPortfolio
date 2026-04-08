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
    readTime: '6 min read',
    url: 'https://dev.to/hunkymanie/building-resumeenow-the-engineering-behind-an-ai-powered-resume-platform-535n',
    tags: ['Frontend', 'Architecture', 'React'],
    featured: true,
  },
];
