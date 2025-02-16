/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        black: "#1e1e1e",
        darkHover: "",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
