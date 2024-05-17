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
      },
      animation: {
        openmenu:  'openmenu 0.5s',
        closemenu:  'closemenu 0.5s',
        opendialog: 'opendialog 0.5s'
      },
      keyframes: {
        openmenu: {
            '0%': {opacity: 0},
            '100%': {opacity: 100}
        },
        closemenu: {
            '0%': {opacity: 100},
            '100%': {opacity: 0}
        },
        opendialog: {
              '0%': {opacity: 0},
              '100%': {opacity: 10}
          }
      }
    },
  },
  plugins: [],
}

