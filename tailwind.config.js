/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Jua' : ['Jua'],
      },
      colors: {
        'kakao-yellow' : '#FEE500',
      }
    },
  },
  plugins: [],
}

