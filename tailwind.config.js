/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#FFF5F2',
          100: '#FFE8E0',
          200: '#FFD0C0',
          300: '#FFB098',
          400: '#E8836A',
          500: '#E85D3A',
          600: '#C94A2D',
          700: '#A33B24',
          800: '#7D2D1C',
          900: '#5C2115',
        },
        surface: {
          DEFAULT: '#FAFAF7',
          warm: '#F3F1EC',
          card: '#FFFFFF',
        },
        ink: {
          DEFAULT: '#1A1A1A',
          secondary: '#6B6B6B',
          muted: '#9A9A9A',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
