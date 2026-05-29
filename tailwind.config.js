/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        accent:   'var(--color-accent)',
        tertiary: 'var(--color-tertiary)',
        muted:    'var(--color-text-muted)',
        border:   'var(--color-border)',
        ink:      'var(--color-text)',
        canvas:   'var(--color-bg)',
      },
      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
        mono: 'var(--font-mono)',
      },
    },
  },
}
