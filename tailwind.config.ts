import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      "4xl": ["40px", "52px"],
      "3xl": ["32px", "42px"],
      "2xl": ["24px", "32px"],
      xl: ["20px", "32px"],
      lg: ["16px", "26px"],
      md: ["14px", "24px"],
      sm: ["13px", "22px"],
      xs: ["12px", "18px"],
    },
    extend: {
      colors: {
        black: {
          "100": "hsl(0, 0, 47)",
          "200": "hsl(0, 0, 42)",
          "300": "hsl(0, 0, 37)",
          "400": "hsl(0, 0, 32)",
          "500": "hsl(0, 0, 27)",
          "600": "hsl(0, 0, 22)",
          "700": "hsl(0, 0, 17)",
          "800": "hsl(0, 0, 12)",
          "900": "hsl(0, 0, 7)",
          "950": "hsl(0, 0, 2)",
        },
        blue: {
          "100": "hsl(0, 0, 100)",
          "200": "hsl(218, 27, 94)",
          "300": "hsl(218, 27, 84)",
          "400": "hsl(218, 27, 74)",
          "500": "hsl(218, 27, 64)",
          "600": "hsl(218, 27, 54)",
          "700": "hsl(218, 27, 44)",
          "800": "hsl(218, 27, 34)",
          "900": "hsl(218, 27, 24)",
          "950": "hsl(218, 27, 13)",
        },
        background: "hsl(216, 33, 97)",
        error: "hsl(353, 100, 70)",
        gray: {
          "100": "hsl(0, 0, 87)",
          "200": "hsl(0, 0, 77)",
          "300": "hsl(0, 0, 67)",
          "400": "hsl(0, 0, 57)",
        },
        line: {
          "#F2F2F2": "hsl(0, 0, 95)",
          CFDBEA: "hsl(213, 39, 86)",
        },
        illust: {
          yellow: "hsl(41, 95, 67)",
          green: "hsl(162, 46, 51)",
          purple: "hsl(248, 64, 70)",
          blue: "hsl(214, 82, 63)",
          red: "hsl(351, 69, 66)",
          brown: "hsl(11, 24, 49)",
        },
        sub: {
          yellow: "hsl(41, 81, 53)",
          "blue-1": "hsl(0, 0, 24)",
          "blue-2": "hsl(228, 11, 27)",
          "blue-3": "hsl(225, 10, 32)",
          "gray-1": "hsl(216, 29, 83)",
          "gray-2": "hsl(214, 33, 92)",
          "gray-3": "hsl(213, 39, 95)",
        },
      },
      fontFamily: {
        pre: ["PretendardVariable"],
        iropke: ["IropkeBatangM"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
