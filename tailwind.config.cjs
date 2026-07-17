module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#D4AF37',
        soft: '#F8D7DA',
        calm: '#A8B5A2',
        bg: '#FAF9F6'
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif']
      },
      borderRadius: {
        xl: '12px'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(16,24,40,0.08)'
      }
    }
  },
  plugins: []
}
