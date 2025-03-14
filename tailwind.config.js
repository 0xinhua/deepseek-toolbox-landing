/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: '#334155',
            a: {
              color: '#013DC4',
              '&:hover': {
                color: '#0129A3',
              },
            },
            strong: {
              color: '#334155',
            },
            h1: {
              color: '#1e293b',
            },
            h2: {
              color: '#1e293b',
            },
            h3: {
              color: '#1e293b',
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
  daisyui: {
    themes: ["light"],
  },
} 