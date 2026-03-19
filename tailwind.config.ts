import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF6F0",
        warmBrown: "#8B6F47",
        darkBrown: "#5C4033",
        softGreen: "#7A9E7E",
        deepGreen: "#4A6B4F",
        terracotta: "#C67B5C",
        warmGray: "#A89F91",
        lightSand: "#F0E6D4",
      },
      fontFamily: {
        serif: ['"Noto Serif JP"', "serif"],
        sans: ['"Noto Sans JP"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
