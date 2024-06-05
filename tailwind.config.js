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
        'Dancing': ['Dancing']
      },
      colors: {
        'kakao-yellow' : '#FEE500',
      },
      animation: {
        openmenu:  'openmenu 0.5s',
        closemenu:  'closemenu 0.5s',
        opendialog: 'opendialog 0.5s',
        actSlideRight: 'slideRight 0.5s forwards',
        goUpLevel: 'goUpLevel 0.5s',
        goUpLevel2: 'goUpLevel2 0.5s',
        goUpLevel3: 'goUpLevel2 0.5s',
        godownLevel: 'godownLevel 0.5s',
        goLeftToRight: 'goLeftToRight 1s',
        
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
          },
        slideRight: {
            from: { left: '-100' },
            to: { left: '0' },
        },
        goUpLevel: {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0%)' },
        },
        goUpLevel2: {
          from: { transform: 'translateY(30%)' },
          to: { transform: 'translateY(0%)' },
        },
        goUpLevel3: {
          from: { transform: 'translateY(0%)' },
          to: { transform: 'translateY(-100%)' },
        },
        godownLevel: {
          from: { transform: 'translateY(-40%)' },
          to: { transform: 'translateY(0%)'  },
        },
        goLeftToRight: {
          from: { transform: 'translateX(-60%)' },
          to: { transform: 'translateX(0%)'  },
        }
        
        }
      }
    },
  plugins: [],
}

