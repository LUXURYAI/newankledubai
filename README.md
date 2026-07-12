# New Ankle Dubai — Next.js Production Starter

## Included
- Next.js 15 App Router
- Static export for easy Vercel / Netlify / Cloudflare Pages deployment
- English, Russian, and Arabic routes
- Arabic RTL layout
- Framer Motion reveal animations
- SEO metadata, sitemap, robots
- Home and internal pages
- Legal draft pages
- Responsive premium design

## Local installation
1. Install Node.js 20 or newer.
2. Open this folder in Terminal.
3. Run:
   npm install
   npm run dev
4. Open http://localhost:3000

## Build
npm run build

The static export will be created in the `out` folder.

## Deploy to Vercel
1. Create a GitHub repository.
2. Upload this project.
3. In Vercel choose Add New Project.
4. Import the GitHub repository.
5. Vercel will detect Next.js automatically.
6. Deploy.
7. Add domain newankledubai.com in Vercel.
8. Update the domain DNS records as instructed by Vercel.

## Before public launch
- Replace portrait placeholders with approved photography.
- Add official phone, WhatsApp, email, location, map, and facility information.
- Connect forms to a secure backend or CRM.
- Verify all medical credentials, titles, licenses, scope, hospital privileges, services, and availability.
- Obtain UAE legal and healthcare advertising review.
- Expand full Russian and Arabic copy for every internal page.
- Configure cookie consent before analytics or marketing scripts.


## Cloudflare Pages build settings

- Framework preset: Next.js / Static HTML Export
- Build command: `npm run build`
- Output directory: `out`
- Node.js: `20`

See `CLOUDFLARE_PAGES_SETTINGS.txt` and `GITHUB_UPLOAD_INSTRUCTIONS_RU.txt`.
