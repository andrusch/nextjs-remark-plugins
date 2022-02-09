/** @type {import('next').NextConfig} */
import * as withMDXPlugin from '@next/mdx';
import emoji from 'remark-emoji'; // TODO: UNCOMMENT

const withMDX = withMDXPlugin.default({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [emoji], // TODO: UNCOMMENT
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