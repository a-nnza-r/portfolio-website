module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-blue": "#040424",
        "vibrant-blue": "#0A84FF",
        "dark-bg": "#121212",
        "light-text": "#E0E0E0",
        "highlight-blue": "#1E90FF",
        "error-red": "#FF4757",
        "steel-blue": "#457b9d",
        "sandy-brown": "#f4a261",
        "light-bg": "#fafafa",
        "dark-text": "#333333",
        "persian-green": "#2a9d8f",
        "imperial-red": "#e63946",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
