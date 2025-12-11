import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  const body = `# The Forecourt Group Ltd - Robots.txt
User-agent: *
Allow: /
Allow: /_next/static/
Disallow: /api/

Sitemap: https://theforecourtgroup.com/sitemap.xml

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /
`.trim();

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control":
        "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}