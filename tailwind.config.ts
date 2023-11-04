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
        jet: {
          DEFAULT: '#2a2b2a',
          100: '#090909',
          200: '#111211',
          300: '#1a1a1a',
          400: '#222322',
          500: '#2a2b2a',
          600: '#555755',
          700: '#7f817f',
          800: '#a9aba9',
          900: '#d4d5d4',
        },
        'anti-flash_white': {
          DEFAULT: '#f0f3f5',
          100: '#27323a',
          200: '#4e6574',
          300: '#7b96a7',
          400: '#b6c4ce',
          500: '#f0f3f5',
          600: '#f3f5f7',
          700: '#f6f8f9',
          800: '#f9fafb',
          900: '#fcfdfd',
        },
        dim_gray: {
          DEFAULT: '#706c61',
          100: '#161613',
          200: '#2d2b27',
          300: '#43413a',
          400: '#59564e',
          500: '#706c61',
          600: '#8f8b7e',
          700: '#aba89e',
          800: '#c7c5bf',
          900: '#e3e2df',
        },
        cosmic_latte: {
          DEFAULT: '#f8f4e3',
          100: '#4c4113',
          200: '#988326',
          300: '#d2b94b',
          400: '#e5d797',
          500: '#f8f4e3',
          600: '#f9f6e8',
          700: '#fbf8ee',
          800: '#fcfbf4',
          900: '#fefdf9',
        },
        dun: {
          DEFAULT: '#d7c9aa',
          100: '#342b18',
          200: '#685731',
          300: '#9c8249',
          400: '#bea674',
          500: '#d7c9aa',
          600: '#ded3ba',
          700: '#e7decb',
          800: '#efe9dc',
          900: '#f7f4ee',
        },
        cerise: {
          DEFAULT: '#e5446d',
          100: '#340712',
          200: '#680e25',
          300: '#9c1537',
          400: '#d01c49',
          500: '#e5446d',
          600: '#ea6889',
          700: '#f08ea6',
          800: '#f5b4c4',
          900: '#fad9e1',
        },
        coral: {
          DEFAULT: '#ff8966',
          100: '#471100',
          200: '#8f2100',
          300: '#d63200',
          400: '#ff531f',
          500: '#ff8966',
          600: '#ffa185',
          700: '#ffb9a3',
          800: '#ffd0c2',
          900: '#ffe8e0',
        },
        midnight_green: {
          DEFAULT: '#19535f',
          100: '#051113',
          200: '#0a2227',
          300: '#0f333a',
          400: '#15444d',
          500: '#19535f',
          600: '#2a8b9e',
          700: '#47b8ce',
          800: '#85cfde',
          900: '#c2e7ef',
        },
        skobeloff: {
          DEFAULT: '#0b7a75',
          100: '#021817',
          200: '#05312e',
          300: '#074945',
          400: '#09615d',
          500: '#0b7a75',
          600: '#12beb6',
          700: '#30ece2',
          800: '#75f2ec',
          900: '#baf9f5',
        },
        falu_red: {
          DEFAULT: '#7b2d26',
          100: '#190908',
          200: '#32120f',
          300: '#4b1b17',
          400: '#64241f',
          500: '#7b2d26',
          600: '#b24137',
          700: '#ce6960',
          800: '#de9b95',
          900: '#efcdca',
        },
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Consolas'],
      },
    },
  },
  plugins: [],
};