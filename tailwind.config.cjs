module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-500': 'var(--color-primary-500)',
        'primary-700': 'var(--color-primary-700)',
        'accent-500': 'var(--color-accent-500)',
        'accent-700': 'var(--color-accent-700)',
        'muted-100': 'var(--color-muted-100)',
        'muted-200': 'var(--color-muted-200)',
        'muted-500': 'var(--color-muted-500)'
      },
      spacing: {
        'page': 'var(--spacing-page)'
      },
      borderRadius: {
        'lg': 'var(--radius-lg)',
        'md': 'var(--radius-md)'
      }
    }
  },
  plugins: []
}
