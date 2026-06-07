/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF5EB',
        'cream-dark': '#FDF2E9',
        'warm-wood': '#C4956A',
        'warm-brown': '#8B6914',
        'deep-brown': '#4A3728',
        'soft-brown': '#8B7355',
        'soft-pink': '#F0D9DA',
        'soft-green': '#BAC8B6',
        'golden': '#D4A853',
        'border-cream': '#E8D5C4',
        'card-bg': '#FEF9F3',
        'warm-white': '#FFFAF5',
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', '"Source Han Serif SC"', 'Georgia', 'serif'],
        sans: ['"Noto Sans SC"', '"Source Han Sans SC"', 'system-ui', 'sans-serif'],
        display: ['"Ma Shan Zheng"', '"ZCOOL KuaiLe"', 'cursive'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(74, 55, 40, 0.08)',
        'soft-lg': '0 8px 40px rgba(74, 55, 40, 0.12)',
        'inner-soft': 'inset 0 2px 8px rgba(74, 55, 40, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
