/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    fontFamily: {
      formular: ['Formular'],
      tehuti: ['Tehuti'],
    },
    extend: {
      colors: {
        darkblue: '#003399',
        'crush-pink': '#fe01ff',
      },
    },
  },
  plugins: [],
}
