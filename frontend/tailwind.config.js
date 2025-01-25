module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
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
        200: "#ffd380",
        300: "#ffc24d",
        500: "#ffb01a",
        700: "#805400",
        800: "#4d3200",
        900: "#1a1100",
      },
      secondary: {
        50: "#ffede5",
        100: "#ffc9b3",
        200: "#ffa580",
        300: "#ff814d",
        500: "#e64400",
      },
      white: "#fbfef9",
      gray: {
        50: "#FAFAFA",
        100: "#F2F2F2",
        200: "#E0E0E0",
        500: "#AAAAAA",
        800: "#454545",
      },
      accent: {
        50: "#f6f0ee",
        100: "#e5d3cc",
        500: "#98634d",
      },
      hero: {
        50: "#012441"
      },
    },
    extend: {
      fontSize: {
        base: '1rem',
        xs: '0.75rem',
        sm: '0.875rem',
        lg: '1.125rem',
        xl: '1.25rem',
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
