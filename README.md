# Praveen Rathnayake — Portfolio

A responsive Next.js and TypeScript portfolio with a calm editorial layout. Portfolio content is separated from page layout so projects and profile details are easy to update.

## Stack

- Next.js 15
- TypeScript
- Tailwind CSS v4 and project CSS
- React

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Update the portfolio

Edit `data/portfolio.ts` to update your profile, introduction, social links, projects, skill groups, experience, certifications and navigation. To add a project, add one object to `portfolio.projects` and put its preview image under `public/images/projects/`. Certification images belong under `public/images/certifications/`. Replace the CV at `public/cv/Praveen-Thathsara-CV.pdf` to keep the existing link working.

The page structure is in `app/page.tsx`, the design system and responsive styles are in `app/globals.css`, and the browser title/description are in `app/layout.tsx`.

## Before deployment

- Confirm the CV, email and social URLs in `data/portfolio.ts`.
- Add or replace project screenshots and certification images.
- Run `npm run build` before deploying.

Vercel is the recommended deployment target.


