module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    backgroundColor: {
      primary: '#00ff00',
      second: '#000000',
      third: '#0000ff',
    },
    colors: {
      primary: '#000000',
      second: '#fff',
      third: '#fff',
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
