module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Example custom color
        secondary: "#9333EA",
      },
    },
  },
  plugins: [],
};