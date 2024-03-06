/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Very_DarkBlue: "#002E3B",
        lightGreen: "#00BC85",
        DarkBlue: "#004473",
      },
      screens: {
        mobile: "375px",
      },
    },
  },
  plugins: [],
};
