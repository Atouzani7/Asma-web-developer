import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      gatwick: ["var(--font-gatwick), serif"],
      stolzl: ["var(--font-stolzl), sans-serif"],
    },
    extend: {
      colors: {
        background: "#1E1E1E",
        text: {
          base: "#1E1E1E", // Texte principal
          title: "#E6E6E6", // Titres
          accent1: "#B7D7C5", // Accent 1
          accent2: "#D1C4E9", // Accent 2
        },
        border: "#A9A9A9", // Bordures, icônes, séparateurs
      },
    },
    screens: {
      ...defaultTheme.screens,
      xs: "460px",
      //   extend: {},
    },
  },
  plugins: [],
};
export default config;
