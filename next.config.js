/** @type {import('next').NextConfig} */
const withMDXPlugin = require('@next/mdx'); 
const withMDX = withMDXPlugin({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
})
const nextConfig = {
  modern: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'tsx', 'ts']
};
module.exports = { ...withMDX(nextConfig),
  reactStrictMode: true,
};