# Tobiloba Ayomide Portfolio

A personal portfolio built with React, TypeScript, Vite, and GSAP.

It includes:
- a curated homepage with hero, projects, approach, and contact sections
- project case-study pages with image galleries and lightbox interactions
- a writing page for featured external articles
- theme switching with persisted preference

## Stack

- React 19
- TypeScript
- Vite
- React Router
- GSAP
- React Icons

## Project Structure

```text
src/
  components/        homepage and shared UI sections
  data/              portfolio content and shared site data
  pages/             route-level pages
  utils/             helpers for text, focus, sheen, writing covers
  App.tsx            route setup
```

## Routes

- `/` home page
- `/writing` writing archive
- `/projects/:id` project details

Project detail routes support the current project slugs from `src/data/projectsData.ts`. Legacy numeric ids also resolve in the detail page lookup.

## Getting Started

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Available Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Content Editing

Most portfolio content is data-driven.

### Projects

Edit `src/data/projectsData.ts`.

Each project can define:
- `slug` for the route
- `homeOrder` for homepage ordering
- `galleryImages` for case-study screenshots
- `galleryLabels` for per-image labels in the gallery and lightbox
- `showcase`, `spotlight`, `features`, `challenges`, and `solution` for detail-page content

Example shape:

```ts
{
  id: 7,
  slug: 'fintrack',
  homeOrder: 6,
  title: 'FinTrack',
  image: FinTrackImg,
  galleryImages: [FinTrackImg, FinTrackImg2, FinTrackImg3, FinTrackImg4],
  galleryLabels: [
    'FinTrack dashboard overview',
    'FinTrack sign in',
    'FinTrack transaction modal',
    'FinTrack transaction history',
  ],
}
```

### Writing

Edit `src/data/writingData.ts`.

Writing entries support:
- title
- excerpt
- published date
- external URL
- tags
- optional cover overrides

DEV article covers can also be resolved automatically through `src/utils/writingCovers.ts`.

### Shared Contact and Social Data

Edit `src/data/siteContent.ts`.

This file controls:
- contact email
- resume link
- social links
- approach copy used in the About section

## Notes

- Theme preference is stored in `localStorage`.
- The favicon uses the TA wordmark in `public/favicon.svg`.
- Unknown routes currently redirect back to `/`.

## Validation

Before shipping changes:

```bash
npm run build
npm run lint
```

## Contact

- Email: `oyetunjitobiloba82@gmail.com`
- GitHub: `https://github.com/tobilobaayomide`
- LinkedIn: `https://www.linkedin.com/in/ayomidetobiloba/`
- X: `https://x.com/HunkyManieee`
