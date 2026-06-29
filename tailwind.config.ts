import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink:   '#111010',
        paper: '#F0EDE6',
        brand: '#2A5C3F',
        ember: '#C06044',
        slate: '#2D2925',
        dust:  '#ADA69B',
        bone:  '#D8D3C9',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body:    ['var(--font-instrument)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.18em',
      },
    },
  },
  plugins: [],
}

export default config
