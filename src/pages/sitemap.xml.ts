import type { APIRoute } from 'astro';
import { apps } from '~/data/apps.generated';
import { site, nav } from '~/data/site';

const today = new Date().toISOString().split('T')[0];

const staticUrls = nav.map(n => n.href).concat(['/privacy', '/terms']);

const allUrls = [
  ...staticUrls.map(path => ({ loc: `${site.url}${path}`, priority: path === '/' ? '1.0' : '0.8' })),
  ...apps.map(app => ({ loc: `${site.url}/apps/${app.slug}`, priority: '0.6' })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

export const GET: APIRoute = () => new Response(xml, {
  headers: { 'Content-Type': 'application/xml' },
});
