import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

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
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
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
        dashboard_primary: "#001D3D",
        dashboard_secondary: "#D14600",
        dashboard_tertiary: "#E7E2E0",
      },
      width: {
        sidebar_desktop: "375px",
        desktop: "calc(100vw - 375px)",
        option_switch: "100px",
        dashboard_sidebar_closed_desktop: "100px",
        dashboard_sidebar_open_desktop: "240px",
        dashboard_closed_desktop: "calc(100vw - 100px)",
        dashboard_open_desktop: "calc(100vw - 240px)",
      },
      height: {
        desktop: "calc(100vh - 100px)",
        header_desktop: "100px",
        filter_button_desktop: "56px",
        filter_desktop: "calc(100vh - 100px - 64px)",
      },
      maxWidth: {
        desktop: "1200px",
        tablet: "700px",
      },
      minHeight: {
        desktop: "calc(100vh - 100px)",
      },
      margin: {
        header_desktop: "100px",
      },
      fontFamily: {
        neue_kabel: ["neue-kabel", "sans-serif"],
      },
      fontSize: {
        sm: "12px",
        md: "14px",
        h1_desktop: "47px",
        h2_desktop: "40px",
        h3_desktop: "33px",
        h4_desktop: "25px",
        h5_desktop: "23px",
        body_desktop: "16px",
        body_small_desktop: "12px",
      },
      inset: {
        filter_desktop: "62px",
        dashboard_sidebar_width: "100px",
      },
      boxShadow: {
        custom_sidebar: "5px 0px 12px 0px rgba(0, 0, 0, 0.20)",
      },
    },
    screens: {
      "2xl": "110rem",
    },
  },
  plugins: [heroui()],
} satisfies Config;
