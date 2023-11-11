/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px',
      },
      colors: {
        bkg: 'rgb(var(--bkg) / <alpha-value>)',
        content: 'rgb(var(--content) / <alpha-value>)',
        jet: {
          dark: '#222322',
          DEFAULT: 'rgb(var(--jet) / <alpha-value>)',
          light: '#555755',
        },
        'anti-flash-white': {
          dark: '#b6c4ce',
          DEFAULT: 'rgb(var(--anti-flash_white) / <alpha-value>)',
          light: '#f3f5f7',
        },
        'dim-gray': {
          dark: '#8f8b7e',
          DEFAULT: 'rgb(var(--dim-gray) / <alpha-value>)',
          light: '#59564e',
        },
        'cosmic-latte': {
          dark: '#f9f6e8',
          DEFAULT: 'rgb(var(--cosmic-latte) / <alpha-value>)',
          light: '#e5d797',
        },
        dun: {
          dark: '#bea674',
          DEFAULT: 'rgb(var(--dun) / <alpha-value>)',
          light: '#ded3ba',
        },
        cerise: {
          dark: '#d01c49',
          DEFAULT: 'rgb(var(--cerise) / <alpha-value>)',
          light: '#ea6889',
        },
        coral: {
          dark: '#ff531f',
          DEFAULT: 'rgb(var(--coral) / <alpha-value>)',
          light: '#ffa185',
        },
        'midnight-green': {
          dark: '#15444d',
          DEFAULT: 'rgb(var(--midnight-green) / <alpha-value>)',
          light: '#2a8b9e',
        },
        skobeloff: {
          dark: '#09615d',
          DEFAULT: 'rgb(var(--skobeloff) / <alpha-value>)',
          light: '#12beb6',
        },
        'falu-red': {
          dark: '#64241f',
          DEFAULT: 'rgb(var(--falu-red) / <alpha-value>)',
          light: '#b24137',
        },
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Consolas'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'slide-menu': {
          '0%': { transform: 'translateY(0) translateX(0)' },
          '100%': { transform: 'translateY(-100px) translateX(100px)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'slide-menu': 'slide-menu 150 linear',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
