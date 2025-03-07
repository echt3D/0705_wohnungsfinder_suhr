import type { Config } from "tailwindcss";

export default {
  safelist: [
    "text-frei",
    "text-reserviert",
    "text-vermietet",
    "bg-frei",
    "bg-reserviert",
    "bg-vermietet",
    "fill-frei",
    "fill-reserviert",
    "fill-vermietet",
    "fill-secondary",
    "hover:fill-frei",
    "hover:fill-reserviert",
    "hover:fill-vermietet",
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#446470",
        secondary: "#F8F6F3",
        tertiary: "#FF5D47",
        quaternary: "#638F7F",
        frei: "#D14600",
        reserviert: "#CB7246",
        vermietet: "#687292",
        line: "#1E1E1E",
        status_badge: "#446470",
        text_primary: "#1E1E1E",
        text_secondary: "#FF5D47",
        text_tertiary: "#ffffff",
        like: "#FF5D47",
      },
      width: {
        sidebar_desktop: "375px",
        desktop: "calc(100vw - 375px)",
      },
      height: {
        desktop: "calc(100vh - 100px)",
        header_desktop: "100px",
      },
      fontFamily: {
        neue_kabel: ["neue-kabel", "sans-serif"],
      },
      fontSize: {
        sm: "12px",
        md: "14px",
      },
    },
  },
  plugins: [],
} satisfies Config;
