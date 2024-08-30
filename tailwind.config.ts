import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "line-from-center": "line-from-center 4s forwards",
        "line-flow" : "line-flow 2.0s ease-in-out infinite",
        "slide-from-right" :"slide-from-right 3s forwards",
        "slide-from-left" :"slide-from-left 3s forwards",
      },
      keyframes: {
        "line-from-center": {
          "0%": {
            "width": "0%"
          },
          "100%": {
            "width": "100%",
          },
        },
        "line-flow": {
          "0%": {
            "height": "0",
            "top": "0",
            "opacity": "0",
            "width": "3px",
          },
          "40%": {
            "top": "80px",
            "height": "60px",
            "opacity": "1",
            "width": "3px",

          },
          "80%": {
            "height": "60px",
            "top": "80px",
            "opacity": "0",
            "width": "3px"
          },
        },
        "slide-from-left": {
          "0%": {
            "transform": "translateX(-100%)",
            "opacity": "0",
          },
          "100%": {
            "transform": "translateX(0)",
            "opacity": "1",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
