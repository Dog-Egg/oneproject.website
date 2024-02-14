import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      keyframes: {
        flicker: {
          "0% 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        flicker: "flicker 1s infinite steps(1, start);",
      },
    },
  },
  plugins: [],
};
export default config;
