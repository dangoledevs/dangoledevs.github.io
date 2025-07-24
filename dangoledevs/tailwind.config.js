/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          summer: {
            yellow: "#FFD166",   // Sunny Yellow
            blue: "#6DD3FA",     // Sky Blue
            coral: "#FF8C68",    // Coral/Peach
            green: "#7BC67E",    // Leafy Green
            sand: "#F6EAC2",     // Sand Beige
            white: "#FFFFFF",    // Pure White
          },
        },
      },
    },
    plugins: [],
  };