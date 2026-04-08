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
    url: 'https://dev.to/rahmannugar/owlyn-building-a-multimodal-agent-ecosystem-for-live-technical-interviews-and-real-time-assistance-15hg',
    tags: ['Frontend', 'UX', 'React'],
    // Optional manual override. DEV posts can resolve their cover image automatically from the post URL.
    // coverImage: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/your-cover-image.png',
    // coverAlt: 'Cover image for Building dashboards that stay calm under pressure',
    featured: true,
  },
];
