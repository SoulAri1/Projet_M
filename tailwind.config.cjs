module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#4169E1',
        brandDark: '#1E3A8A',
        mauve: '#8B5CF6',
        mauveDark: '#6D28D9',
        accent: '#D4AF37',
        rose: '#F8D7DA',
        roseSoft: '#FFF5F6',
        soft: '#F3E8FF',
        calm: '#A8B5A2',
        bg: '#F7F9FD',
        ink: '#172033'
      },

      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif']
      },
      borderRadius: {
        xl: '16px'
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
}
