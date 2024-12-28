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
      },
      theme: {
        'seta':'2px -2px 0 1px #000 inset'
      },
      boxShadow: {
        'custom': '4px 4px 10px rgba(255, 255, 255, 1)'
      }
    },
  },
  plugins: [],
} satisfies Config;
