import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        nav: '960px',
      },
      colors: {
        'nike-black': '#111111',
        'nike-white': '#FFFFFF',
        snow: '#FAFAFA',
        'light-gray': '#F5F5F5',
        'hover-gray': '#E5E5E5',
        'dark-surface': '#28282A',
        'deep-charcoal': '#1F1F21',
        'dark-hover': '#39393B',
        'text-primary': '#111111',
        'text-secondary': '#707072',
        'text-disabled': '#9E9EA0',
        'border-primary': '#707072',
        'border-secondary': '#CACACB',
        'nike-red': '#D30005',
        'nike-orange': '#D33918',
        'success-green': '#007D48',
        'link-blue': '#1151FF',
      },
      fontFamily: {
        display: ['"Nike Futura ND"', '"Helvetica Now Text Medium"', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['"Helvetica Now Display Medium"', 'Helvetica', 'Arial', 'sans-serif'],
        body: ['"Helvetica Now Text"', 'Helvetica', 'Arial', 'sans-serif'],
        'body-medium': ['"Helvetica Now Text Medium"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        display: ['96px', { lineHeight: '0.90', fontWeight: '500' }],
        'heading-1': ['32px', { lineHeight: '1.20', fontWeight: '500' }],
        'heading-2': ['24px', { lineHeight: '1.20', fontWeight: '500' }],
      },
      borderRadius: {
        pill: '30px',
        'input-search': '24px',
        'input-form': '8px',
        container: '20px',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '32px',
        '8': '48px',
        '9': '64px',
        '10': '80px',
      },
    },
  },
  plugins: [],
}

export default config
