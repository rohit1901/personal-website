import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: {
          DEFAULT: "hsl(var(--surface))",
          foreground: "hsl(var(--surface-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        ring: "hsl(var(--ring))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: "hsl(var(--success))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 0.25rem)",
        sm: "calc(var(--radius) - 0.375rem)",
      },
      maxWidth: {
        content: "1120px",
        prose: "68ch",
      },
      fontFamily: {
        sans: [
          "var(--font-outfit)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-accent": "var(--gradient-accent)",
        "gradient-soft": "var(--gradient-soft)",
      },
      backgroundSize: {
        "200%": "200% 100%",
      },
      keyframes: {
        "gradient-pan": {
          "0%": { "background-position": "0% 50%" },
          "100%": { "background-position": "200% 50%" },
        },
        aurora: {
          "0%": { transform: "translate3d(-4%, -2%, 0) scale(1)" },
          "50%": { transform: "translate3d(4%, 2%, 0) scale(1.06)" },
          "100%": { transform: "translate3d(-4%, -2%, 0) scale(1)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
          "100%": { transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%": { "box-shadow": "0 0 0 0 hsl(var(--accent) / 0.45)" },
          "70%": { "box-shadow": "0 0 0 12px hsl(var(--accent) / 0)" },
          "100%": { "box-shadow": "0 0 0 0 hsl(var(--accent) / 0)" },
        },
      },
      animation: {
        "gradient-pan": "gradient-pan 8s ease-in-out infinite alternate",
        aurora: "aurora 18s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.4s ease-out infinite",
      },
      fontSize: {
        xxs: "0.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
