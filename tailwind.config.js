/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {

    extend: {},

    fontFamily: {
      display: ['EB Garamond', 'serif'],
      body: ['Inconsolata', 'monospace'],
    },

  },

  plugins: [],

}