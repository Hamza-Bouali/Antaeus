/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        claudeBackground: '#f8f4ec',
        claudeBubble: '#f4f4ec',
      }
    },
  },
  plugins: [],
}

