import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "750px",
      lg: "950px",
    },
    extend: {
      colors: {
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
      },
      keyframes: {
        flicker: {
          "0% 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        flicker: "flicker 1s infinite steps(1, start);",
      },
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
        "16": "repeat(16, minmax(0, 1fr))",
        "17": "repeat(17, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
