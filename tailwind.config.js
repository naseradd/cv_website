/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Semantic color tokens — see plan #12.
      // Both raw hex and these tokens coexist; migrate progressively.
      colors: {
        bg: {
          0: '#0a0a0a',
          1: '#0c0c0c',
          2: '#0f0f0f',
          3: '#141414',
          4: '#1a1a1a',
        },
        line: {
          DEFAULT: '#1e1e1e',
          strong: '#2a2a2a',
          stronger: '#3a3a3a',
        },
        fg: {
          DEFAULT: '#f5f5f0',
          muted: '#888888',
          dim: '#666666',
          faint: '#555555',
          ghost: '#444444',
          subtle: '#333333',
          deep: '#222222',
        },
        accent: {
          DEFAULT: '#7c3aed',
          soft: '#a78bfa',
          alt: '#818cf8',
          faint: '#c4b5fd',
          deep: '#6d28d9',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Display scale used by hero name + section headings.
        'display-xl': ['clamp(180px, 22vw, 340px)', { lineHeight: '0.85' }],
        'display-lg': ['clamp(52px, 8.5vw, 118px)', { lineHeight: '0.9' }],
        'display-md': ['clamp(32px, 4.5vw, 58px)', { lineHeight: '1' }],
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.4', transform: 'scale(0.75)' },
        },
      },
      animation: {
        fadeUp:   'fadeUp 0.6s ease-out both',
        pulseDot: 'pulseDot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
