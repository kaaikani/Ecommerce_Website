import colors from 'tailwindcss/colors';
import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/forms')],
  important: '#app',

  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        secondary: colors.emerald,
      },
       animation: {
        'fade-in': 'fade-in 0.5s linear forwards',
         move: 'move 5s linear infinite',
        marquee: 'marquee var(--marquee-duration) linear infinite',
        'marquee-x': 'marquee-x 20s linear infinite', 
        'spin-slow': 'spin 4s linear infinite',
        'spin-slower': 'spin 6s linear infinite',
        'spin-reverse': 'spin-reverse 1s linear infinite',
        'spin-reverse-slow': 'spin-reverse 4s linear infinite',
        'spin-reverse-slower': 'spin-reverse 6s linear infinite',
      },
  

       keyframes: {
        'fade-in': {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
         move: {
          '0%': { transform: 'translateX(-200px)' },
          '100%': { transform: 'translateX(200px)' },
        },
        marquee: {
          '100%': {
            transform: 'translateY(-50%)',
          },
          
        },
        'marquee-x': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }, // ✅ X-axis
        },
        'spin-reverse': {
          to: {
            transform: 'rotate(-360deg)',
          },
        },
        dropIn: {
          '0%': { transform: 'translateY(-100px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
} satisfies Config;
