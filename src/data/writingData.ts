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
    title: 'Building dashboards that stay calm under pressure',
    excerpt: 'A breakdown of hierarchy, grouping, and motion decisions that keep dense financial interfaces legible.',
    publishedAt: 'April 2026',
    platform: 'DEV',
    readTime: '6 min read',
    url: 'https://dev.to/hunkymanie/building-resumeenow-the-engineering-behind-an-ai-powered-resume-platform-535n',
    tags: ['Frontend', 'Architecture', 'React'],
    featured: true,
  },
];
