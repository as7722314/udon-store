import type { Config } from "tailwindcss";
import { heroui } from "@heroui/theme";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B90402",
        secondary: "#62351E",
        blanchedalmond: "#FFEBCD",
      },
      fontFamily: {
        serif: ["Noto Serif TC", "serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

export default config;
