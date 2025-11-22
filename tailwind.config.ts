import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        aurora: {
          50: "#f3f8ff",
          100: "#e0efff",
          200: "#badcff",
          300: "#82c0ff",
          400: "#46a1ff",
          500: "#1f82ff",
          600: "#0b62f6",
          700: "#064dd1",
          800: "#0941a4",
          900: "#0c3b82"
        }
      },
      backdropBlur: {
        xs: "2px"
      }
    }
  },
  plugins: []
};

export default config;
