import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Cloudflare Workers don't run the default Next image optimizer,
    // so we serve images as-is (our assets are already lightweight).
    unoptimized: true,
  },
};

export default nextConfig;

// Enables Cloudflare bindings (env vars, KV, etc.) during `next dev`.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
