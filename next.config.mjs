import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";
import nextSafe from "next-safe";

const isDev = process.env.NODE_ENV !== "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx"],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  headers: () => [
    {
      source: "/:path*",
      headers: nextSafe({
        isDev,
        contentSecurityPolicy: {
          mergeDefaultDirectives: true,
          "img-src": ["https: data: blob:"],
          "script-src": [
            "'sha256-COiD90rc+P2uaVVk9/ag5Fkb+hUKuRTCyRoZoyLTnJ0='",
          ],
        },
      }),
    },
  ],
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
