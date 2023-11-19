/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bkg": "url('/src/assets/background_img.png')"
      },
    },
  },
  plugins: [],
};
