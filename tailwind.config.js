/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#00BCD4',
        'brand-gold': '#FFA000',
        'brand-dark': '#1A1D29',
        'brand-slate': '#2D3748',
        'brand-muted': '#64748B',
        'brand-surface': '#F9FAFB',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"DM Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 60px rgba(0, 188, 212, 0.25)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #00BCD4 0%, #1A1D29 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(0,188,212,0.12) 0%, rgba(26,29,41,0.3) 100%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
