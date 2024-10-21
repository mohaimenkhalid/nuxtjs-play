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
          light: "var(--secondary-light)",
          DEFAULT: "var(--secondary)",
          dark: "var(--secondary-dark)",
        },
        // tertiary: {
        //   DEFAULT: "var(--tertiary)",
        // },
        success: {
          light: "var(--success-light)",
          DEFAULT: "var(--success)",
          dark: "var(--success-dark)",
        },
        danger: {
          DEFAULT: "var(--danger)",
        },
        warning: {
          DEFAULT: "var(--warning)",
        },
        info: {
          light: "var(--info-light)",
          DEFAULT: "var(--info)",
        },
        dark: {
          DEFAULT: "var(--dark)",
          secondary: "var(--dark-secondary)",
          shade1: "var(--dark-shade-1)",
          shade2: "var(--dark-shade-2)",
          shade3: "var(--dark-shade-3)",
        },
        gray: {
          light: "var(--gray-light)",
          DEFAULT: "var(--gray)",
          shade3: "var(--gray-shade3)",
          shade4: "var(--gray-shade4)",
          shade5: "var(--gray-shade5)",
        },
        text: {
          DEFAULT: "var(--body)",
          secondary: "var(--text-secondary)",
        },
        body: {
          DEFAULT: "var(--body)",
        },
        // surface: {
        //   DEFAULT: "var(--surface)",
        // },
        link: {
          DEFAULT: "var(--link)",
        },
        disabled: {
          DEFAULT: "var(--disabled)",
        },
        border: {
          light: "var(--border-light)",
          DEFAULT: "var(--border)",
        },
        ring: {
          light: "var(--ring-light)",
          DEFAULT: "var(--ring)",
          secondary: "var(--ring-secondary)",
          dark: "var(--ring-dark)",
        },
        input: {
          DEFAULT: "var(--input)",
        },
      },
      borderRadius: {
        'xs': "calc(var(--radius) - 2px)",
        'sm': "calc(var(--radius) + 2px)",
        'md': "calc(var(--radius) + 4px)",
      	'lg': "calc(var(--radius) + 6px)",
      	'xl': "calc(var(--radius) + 8px)",
      	'2xl': "calc(var(--radius) + 10px)",
      	'3xl': "calc(var(--radius) + 12px)",
      },
      boxShadow: {
        'xs': "0px 1px 2px 0px",
        'sm': "2px 2px 24px 0px",
      },
      screens: {
        '2xl': '1400px',
        '3xl': '1700px',
      },
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