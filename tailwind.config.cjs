module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-500': 'var(--color-primary-500)',
        'primary-700': 'var(--color-primary-700)',
        'accent-500': 'var(--color-accent-500)',
        'muted-200': 'var(--color-muted-200)'
      },
      spacing: {
        'page': 'var(--spacing-page)'
      }
    }
  },
  plugins: []
}
