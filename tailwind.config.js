/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        pink: {
          css: {
            
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
