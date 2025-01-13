import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/theme";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e14d4d",
        secondary: "#D92323",
        blanchedalmond: "#FFEBCD",
      },
      fontFamily: {
        serif: ["Noto Serif TC", "serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;