import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      avenir: ["Avenir", "sans-serif"],
      GillSans: ["GillSans", "sans-serif"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lila: {
          100: "#D1C4E9",
          200: "#9B8FB1",
        },
        greenPastel: {
          100: "#C4E9D1",
          200: "#9DCAB1",
        },
        black: "#1E1E1E",
      },
    },
  },
  plugins: [],
};

export default config;
