import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // Resolve @ui and @brand aliases to packages directory
    config.resolve.alias = {
      ...config.resolve.alias,
      '@ui': path.resolve(__dirname, './packages/ui'),
      '@brand': path.resolve(__dirname, './packages/brand-tokens'),
    };

    // Allow packages/ui to resolve its dependencies from this site's node_modules
    config.resolve.modules = [
      path.resolve(__dirname, 'node_modules'),
      'node_modules',
    ];

    return config;
  },
};

export default nextConfig;
