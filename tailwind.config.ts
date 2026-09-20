import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Dark + Neon Blue theme
        night: {
          950: "#050810",
          900: "#0a0f1e",
          800: "#111a30",
          700: "#1a2542",
          600: "#243254",
        },
        neon: {
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
        },
        accent: {
          400: "#22d3ee",
          500: "#06b6d4",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "glow-radial":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56, 189, 248, 0.18), transparent)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
        glow: "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
