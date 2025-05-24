/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'old-english': ['Old English Text MT', 'serif'],
      },
      colors: {
        'chix-black': '#000000',
        'chix-white': '#FFFFFF',
        'chix-gray': '#1a1a1a',
      }
    },
  },
  plugins: [],
}
