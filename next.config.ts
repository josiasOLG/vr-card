import { NextFederationPlugin } from "@module-federation/nextjs-mf";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "card",
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./App": "./components/App.tsx",
          },
          shared: {
            react: { singleton: true, eager: true },
            "react-dom": { singleton: true, eager: true },
            redux: { singleton: true, eager: true },
            "react-redux": { singleton: true, eager: true },
          },
          extraOptions: {
            exposePages: true,
            debug: true, // Enable debug mode
          },
        })
      );
    }

    return config;
  },
};

export default nextConfig;
