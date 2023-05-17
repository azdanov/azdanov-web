import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";

const isDev = process.env.NODE_ENV !== "production";

const ContentSecurityPolicy = `
  default-src 'none';
  connect-src 'self'${isDev ? " webpack://*" : ""};
  manifest-src 'self';
  base-uri 'none';
  form-action 'self';
  script-src 'self' 'sha256-COiD90rc+P2uaVVk9/ag5Fkb+hUKuRTCyRoZoyLTnJ0='${
    isDev ? " 'unsafe-eval'" : ""
  };
  style-src 'self' 'unsafe-hashes' 'unsafe-inline';
  font-src 'self';
  img-src 'self' data: https: blob:;
  frame-ancestors 'none';
`;

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "no-referrer-when-downgrade",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  pageExtensions: ["js", "jsx", "mdx"],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
