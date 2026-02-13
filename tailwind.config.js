/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        tech: {
          blue: {
            light: '#0066CE',  // Brightest blue
            DEFAULT: '#00468C', // Medium blue
            dark: '#003A67',   // Dark blue
          },
          dark: {
            lighter: '#1F2937', // Lightest dark gray
            DEFAULT: '#111827',  // Medium dark
            darker: '#0A0F1A',  // Darkest
          }
        },
        
        // ... keep the rest of your colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // ... rest of shadcn colors
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}