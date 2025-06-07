export async function GET() {
  return new Response(
    `User-agent: *
Allow: /
Sitemap: https://art-and-craft-corner.vercel.app/sitemap.xml`,
    { headers: { 'Content-Type': 'text/plain' } }
  );
}
