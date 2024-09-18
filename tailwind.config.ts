import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          to: { transform: 'translateX(-50%)' }
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        spotlight: {
          "0%": {
            opacity: '0',
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: '1',
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        meteor: "meteor 5s linear infinite",
        marquee: 'marquee var(--duration, 30s) linear infinite',
        spotlight: "spotlight 2s ease .75s 1 forwards",

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    
    function ({ addUtilities } : {
      addUtilities: any
    }) {
      addUtilities({
        '.no-scrollbar': {
          /* For Webkit-based browsers like Chrome and Safari */
          '-webkit-overflow-scrolling': 'touch',
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',     /* Firefox */
          '&::-webkit-scrollbar': {
            display: 'none',             /* Chrome, Safari, Edge */
          },
        }
      })
    }
  ],
};
export default config;
