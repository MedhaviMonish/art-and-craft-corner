export async function GET() {
  const baseUrl = 'https://art-and-craft-corner.vercel.app';
  const routes = ['', 'gallery', 'shop', 'videos', 'worksheets', 'classes', 'about', 'contact'];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    route => `<url><loc>${baseUrl}/${route}</loc></url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
