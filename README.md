# Fyzio Site Template v1

Reusable production template for small Czech physiotherapy and rehabilitation websites.

## What To Edit Per Client

Most client-specific content lives in:

```text
src/site.config.ts
```

Update:

- clinic name, legal name, IČO
- city, address, opening hours
- phone, email
- SEO title and description
- hero copy
- services, pricing, FAQ, testimonials
- image imports and alt text

## Commands

```bash
npm install
npm run dev
npm run build
```

On this Windows machine npm registry access timed out during setup, so local build may need to be retried when npm network access is healthy.

## Production Notes

- Keep claims conservative. Do not promise medical outcomes.
- Replace placeholder testimonials before publishing.
- Replace the contact form with a real provider before launch.
- Add privacy policy and cookie/analytics notices if tracking is enabled.
- Connect Search Console after deploy.

## Deployment

Good first options:

- Cloudflare Pages
- Vercel
- Netlify

The current project is a Lovable/TanStack/Vite export. For simple static client sites, this template can later be simplified to Astro or static React if we want faster handoff and fewer dependencies.
