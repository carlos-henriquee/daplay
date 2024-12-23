import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cinza_preto: "rgba(34,34,37,1)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      sapcing: {
        '160': "160%"
      }
    },
  },
  plugins: [],
} satisfies Config;
