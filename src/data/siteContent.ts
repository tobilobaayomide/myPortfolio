export const SITE_OWNER = 'Tobiloba Ayomide';
export const CONTACT_EMAIL = 'oyetunjitobiloba82@gmail.com';
export const RESUME_URL =
  'https://drive.google.com/file/d/1m3WoHDrCsDfx4zfNN4pLOrW5hf05Jeux/view?usp=sharing';

export const METHOD_APPROACH = {
  label: 'Approach',
  title: 'The thinking behind the work',
  summary:
    'I care about interfaces that stay clear under real product pressure, not just in the best-looking screen. The work has to hold up in structure, in motion, and in all the quiet states people actually use.',
} as const;

export const METHOD_PRINCIPLES = [
  {
    title: 'Structure before surface',
    description:
      'I start with hierarchy, content flow, and component logic before styling. When the structure is right, the interface feels calmer and the visual layer has something solid to stand on.',
  },
  {
    title: 'Calm under density',
    description:
      'Complex products do not need louder interfaces. I try to reduce friction with spacing, grouping, and typographic control so dense information still feels easy to move through.',
  },
  {
    title: 'Edge states are product work',
    description:
      'Loading, error, empty, and transitional states are part of the experience, not cleanup. They are usually where trust is won or lost, so I design them with the same care as the main flow.',
  },
] as const;

export const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/tobilobaayomide',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ayomidetobiloba/',
  },
  {
    label: 'X',
    href: 'https://x.com/HunkyManieee',
  },
] as const;
