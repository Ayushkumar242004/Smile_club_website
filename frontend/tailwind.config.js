/** @type {import('tailwindcss').Config} */
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  plugins : [addVariablesForColors],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      background: {
        50: "#fff6e5",
        100: "#ffe5b3",
        150: "#FFE7B9",
        200: "#ffd380",
        300: "#ffc24d",
        400: "#ffb01a",
        500: "#ffb01a",
        600: "#b37500",
        700: "#805400",
        800: "#4d3200",
        900: "#1a1100",
        950: "#000D14",
      },
      secondary: {
        50: "#ffede5",
        100: "#ffc9b3",
        150: "#FF8C5C",
        200: "#ffa580",
        300: "#ff814d",
        400: "#ff5d1a",
        500: "#e64400",
        600: "#f9452e",
        700: "#802600",
        800: "#4d1700",
        900: "#1a0800",
        950: "#040406",
      },
      white: "#fbfef9",
      gray: {
        50: "#FAFAFA",
        100: "#F2F2F2",
        200: "#E0E0E0",
        300: "#CFCFCF",
        400: "#BDBDBD",
        500: "#AAAAAA",
        600: "#878787",
        700: "#666666",
        800: "#454545",
        900: "#212121",
        950: "#121212",
      },
      accent: {
        50: "#f6f0ee",
        100: "#e5d3cc",
        150: "#A26952",
        200: "#d4b6aa",
        300: "#c39988",
        400: "#b27c67",
        500: "#98634d",
        600: "#774d3c",
        700: "#55372b",
        800: "#33211a",
        900: "#110b09",
      },
      hero: {
        50: "#012441"
      },
      sponsor: {
        50: "#56ACFF"
      },
      blog: {
        50: "#060d14",
        100: "#102132",
      },
      tomato: {
        "100": "#ff472e",
        "200": "rgba(255, 71, 46, 0.9)",
      },
      gainsboro: {
        "100": "#d9d9d9",
        "200": "rgba(217, 217, 217, 0.1)",
      },
      silver: {
        "100": "#bfbfbf",
        "200": "#bbb7b2",
      },
      gray: {
        "100": "#2f1a00",
        "200": "rgba(255, 255, 255, 0.7)",
        "300": "rgba(255, 255, 255, 0.9)",
        "400": "rgba(255, 255, 255, 0.3)",
        "500": "rgba(255, 255, 255, 0.5)",
        "800":  "#454545",
      },
      darkgray: "#a2a2a2",
      firebrick: "#aa321c",
      lightpink: "#ffabab",
      darkslategray: "#333c45",
      dimgray: "#59636b",
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #000 50%, #000 81.64%)',
        'custom-bg': 'rgb(255,231,185)',
        'custom-bg': 'linear-gradient(180deg, rgba(255,231,185,1) 0%, rgba(255,231,185,1) 0%, rgba(255,231,185,1) 8%, rgba(255,231,185,1) 16%, rgba(250,202,111,1) 30%, rgba(255,159,80,1) 44%, rgba(255,138,75,1) 58%, rgba(129,62,27,1) 78%, rgba(0,0,0,1) 100%)',
        "card-bg": "linear-gradient(to right bottom, #522503, #6a320a, #823f0f, #9c4e15, #b65c1a, #c36825, #d0732f, #dd7f39, #df8a49, #e19459, #e39e69, #e4a879);"
      
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
        "scroll": {
          to: {
            transform: "translate(calc(-20% - 0.5rem))",
          },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scroll": "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

function addVariablesForColors(addBase, theme) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}