import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  images: {
    domains: [
      "omeo.com",
      "assets-eu-01.kc-usercontent.com",
      "raw.githubusercontent.com",
      "github.com",
    ], // Ajoute ici le domaine de ton image
  },
};
console.log("API URL côté serveur:", process.env.NEXT_PUBLIC_API_URL);

export default nextConfig;
