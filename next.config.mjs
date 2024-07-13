import withMDX from "@next/mdx";
const isProd = process.env.NODE_ENV === "production";
const isPreview = process.env.IS_PREVIEW === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  output: "export",
  // Configure basePath and assetPrefix to support preview deployments
  basePath: isPreview ? `/pr-preview-${process.env.PR_NUMBER}` : "",
  assetPrefix: isPreview ? `/pr-preview-${process.env.PR_NUMBER}/` : "",
};

// Create a function that wraps nextConfig with withMDX
const withMDXConfig = withMDX({
  // Add any MDX-specific options here
  extension: /\.mdx?$/,
});

// Export the wrapped configuration
export default withMDXConfig(nextConfig);
