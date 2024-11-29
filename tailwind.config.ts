import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "5xl": "40px",
      },
      colors: {
        brand: {
          100: "#DAE8E5",
          500: "#85DDCB",
          600: "#51B4A0",
          800: "#186656",
          900: "#19262A",
        },
      },
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      backgroundImage: {
        stars: "url('/stars.svg')",
        curved: "url('/curved.svg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
