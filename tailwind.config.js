/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secodary: "#9a2c2c",
      },
      
      padding:{
        45: "45px"
      }
    },
  },
  plugins: [],
};
