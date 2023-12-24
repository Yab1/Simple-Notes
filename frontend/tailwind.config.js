/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playpen: ["Playpen Sans", "sans-serif"],
      },
      height: {
        main: "calc(100vh - 66px)",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
