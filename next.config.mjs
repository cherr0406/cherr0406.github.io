import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  output: "export",
};

// Create a function that wraps nextConfig with withMDX
const withMDXConfig = withMDX({
  // Add any MDX-specific options here
  extension: /\.mdx?$/,
});

// Export the wrapped configuration
export default withMDXConfig(nextConfig);
