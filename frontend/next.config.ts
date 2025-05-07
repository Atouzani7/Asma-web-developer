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
      "w7.pngwing.com",
      "toppng.com",
      "e7.pngegg.com",
      "upload.wikimedia.org",
      "encrypted-tbn0.gstatic.com",
      "icon2.cleanpng.com",
      "www.mabl.com",
      "mediaresource.sfo2.digitaloceanspaces.com",
      "www.shutterstock.com",
      "images.ctfassets.net",
      "user-images.githubusercontent.com",
      "static.vecteezy.com",
      "1000logos.net",
      "st4.depositphotos.com",
    ], // Ajoute ici le domaine de ton image
  },
};
console.log("API URL côté serveur:", process.env.NEXT_PUBLIC_API_URL);

export default nextConfig;
