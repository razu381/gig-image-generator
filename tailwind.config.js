/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './figma-to-react-next/**/*.html'],
  theme: {
    extend: {
      colors: {
        bg:           '#080808',
        'surface-1':  '#0f0f0f',
        'surface-2':  '#111111',
        'surface-3':  '#161616',
        accent:       '#00ea1c',
        'accent-hover': '#00d419',
        'text-primary':   '#f0f0f0',
        'text-secondary': '#999999',
        'text-muted':     '#777777',
        'text-subtle':    '#555555',
        'text-ghost':     '#444444',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        heading: ['Syne', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        card:   '12px',
        button: '6px',
        tag:    '4px',
      },
      boxShadow: {
        card:   '0 8px 40px rgba(0,0,0,0.30)',
        deep:   '0 24px 80px rgba(0,0,0,0.60)',
        accent: '0 4px 32px rgba(0,234,28,0.12)',
        glow:   '0 0 32px rgba(0,234,28,0.40)',
      },
    },
  },
  plugins: [],
}
