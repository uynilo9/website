/** @type { import('tailwindcss').Config } */
export default {
  content: [
    './index.html',
    './source/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      'base': '#E1E1E1',
      'uynilo9': '#EAD57F',
      'vscode': '#007ACC',
      'youtube': '#F5514C',
      'twitter': '#4686FF',
      'spotify': '#0DA35F',
    },
    backgroundColor: {
      'base': '#1A1A1A'
    },
    fontFamily: {
      'base': ['\'Ubuntu\', sans-serif']
    }
  }
}