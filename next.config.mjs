import { NextFederationPlugin } from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações para Module Federation
  reactStrictMode: false,
  images: {
    unoptimized: true
  },
  experimental: {
    esmExternals: false,
  },
  webpack(config) {
     config.plugins.push(
        new NextFederationPlugin({
          name: "card",
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./App": "./components/App.tsx",
          },
          remotes: {
            host: `host@http://localhost:3000/_next/static/chunks/remoteEntry.js`,
          },
          shared: {
            react: { 
              singleton: true, 
              eager: true,
              requiredVersion: "^18.3.1"
            },
            "react-dom": { 
              singleton: true, 
              eager: true,
              requiredVersion: "^18.3.1"
            },
            "@reduxjs/toolkit": { 
              singleton: true, 
              eager: true,
              requiredVersion: "^2.2.7"
            },
            "react-redux": { 
              singleton: true, 
              eager: true,
              requiredVersion: "^9.1.2"
            },
          },
        })
      );

    return config;
  },
};

export default nextConfig;