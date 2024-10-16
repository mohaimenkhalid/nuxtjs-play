const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  // safelist: ["dark"],
  prefix: "",
  
  theme: {
    container: {
      center: true,
      screens: {
        'xl': '1120px',
      },
      padding: {
        DEFAULT: '1rem',
        xl: '0',
      },
    },
    extend: {
      colors: {
        primary: {
          // light: '#92acbb',
          DEFAULT: "var(--primary)",
          // dark: '#00425e',
        },
        secondary: {
          DEFAULT: "var(--secondary)",
        },
        tertiary: {
          DEFAULT: "var(--tertiary)",
        },
        border: {
          DEFAULT: "var(--border)",
        },
        background: {
          DEFAULT: "var(--background)",
        },
      },
      borderRadius: {
      	xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // screens: {
      //   '2xl': '1400px',
      //   '3xl': '1700px',
      // },
      fontFamily: {
        primary: ['Inter', 'sans-serif']
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        "collapsible-up": {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },
  plugins: [animate],
}