import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9F7F7",
        pink: {
          highlight: "#FFAFCC",
        },

        blue: {
          bg: "#DBE2EF",
          light: "#BFDBF7",
          medium: "#3F72AF",
          dark: "#112D4E",
        },
      },
      backgroundImage: {
        // "bg-img-1": "url('/img-1.png')",
        // "bg-img-2": "url('/img-2.png')",
        // "feature-bg": "url('/feature-bg.png')",
        // pattern: "url('/pattern.png')",
        // "pattern-2": "url('/pattern-bg.png')",
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        lato: ["var(--font-lato)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        latoLight: ["var(--font-lato-light)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
    },
  },
};
export default config;
