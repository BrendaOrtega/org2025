const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */

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
        iron: "#ACACAC",
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
        formmyCover: "url('/projects/formmy-cover.png')",
        formmyGif:
          "url('https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/2025%2Fformmy-video.gif?alt=media&token=fea67e9f-1277-49ba-a0ec-9ef81bf15452')",
        geekCover: "url('/projects/geek-cover.png')",
        denikCover: "url('/projects/denik-cover.png')",
        dotts: "url('/dotts.svg')",
      },
      keyframes: {
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
