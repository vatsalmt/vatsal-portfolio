purple Theme: 

--- > 

import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0f1f",
        accent: "#00ffcc", 
        foreground: "#e6e6e6", 
        card: {
          DEFAULT: "#111827", 
          foreground: "#e6e6e6",
        },
        primary: {
          DEFAULT: "#5a00ff", 
          foreground: "#0a0f1f",
        },
        secondary: {
          DEFAULT: "#ff66ff",
          foreground: "#0a0f1f",
        },
        destructive: {
          DEFAULT: "#ff4d4d",
          foreground: "#e6e6e6",
        },
        border: "#290066",
        ring: "#c77dff", 
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["'Courier Prime', monospace"], 
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "6px",
      },
      keyframes: {
        glitch: {
          "0%": { transform: "translate(0, 0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(2px, -2px)" },
          "60%": { transform: "translate(-2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      animation: {
        glitch: "glitch 0.5s infinite alternate",
      },
    },
  },
  plugins: [],
}

export default config


========================= 



Original Theme : 

--- > 
Background	#050505	Deep black.