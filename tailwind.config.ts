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
          200: "#9EC9BA",
          500: "#85DDCB",
          600: "#51B4A0",
          700: "#37AB93",
          800: "#186656",
          900: "#19262A",
        },
        ironGray: "#445C64",
        lightGray: "#889194",
        iron: "#889194",
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
        framework: "url('/framework.svg')",
      },
      keyframes: {
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
