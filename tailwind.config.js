/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotateInLeft: {
          '0%': {
            transform: 'rotate(1080deg) scale(0, 0)',
          },
          '100%': {
            transform: 'rotate(0deg) scale(1, 1)',
          },
        },
        bgAnimRight: {
          '0%': {
            backgroundPosition: '0px 0',
          },
          '100%': {
            backgroundPosition: '0px -735px',
          },
        },
        bgAnimLeft: {
          '0%': {
            backgroundPosition: '0px 0',
          },
          '100%': {
            backgroundPosition: '0px 544px',
          },
        },
        bgAnimLeltToRight: {
          '0%': {
            backgroundPosition: '0px 0px',
          },
          '100%': {
            backgroundPosition: '735px 0px',
          },
        },
      },
      backgroundImage: {
        'nijiirozamurai-zuma': "url('/foel-nijiirozamurai-zuma.svg')",
        'nijiirozamurai-zuma-sub': "url('/foel-nijiirozamurai-zuma-sub.svg')",
        'nijiirozamurai-zuma-sub': "url('/foel-nijiirozamurai-zuma-sub.svg')",
        'parallax-1': "url('/parallax.jpg')",
        'parallax-2': "url('/parallax2.jpg')",
        'parallax-3': "url('/parallax3.jpg')",
      },
      animation: {
        rotateInLeft: 'rotateInLeft 1s ease-in-out',
        bgAnimRight: 'bgAnimRight 9s linear infinite', // 2초 지속, 무한 반복
        bgAnimLeft: 'bgAnimLeft 9s linear infinite', // 2초 지속, 무한 반복
        bgAnimLeltToRight: 'bgAnimLeltToRight 9s linear infinite', // 2초 지속, 무한 반복
      },
    },
  },
  plugins: [],
}