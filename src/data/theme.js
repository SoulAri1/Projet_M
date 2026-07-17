// Theme presets and a default theme. Each preset contains colors and font tokens.
export const THEMES = {
  mauveGold: {
    key: 'mauveGold',
    name: 'Mauve & Or',
    colors: {
      brand: '#4169E1',
      mauve: '#8B5CF6',
      mauveDark: '#6D28D9',
      accent: '#D4AF37',
      rose: '#F8D7DA',
      roseSoft: '#FFF5F6',
      bg: '#F7F9FD',
      soft: '#F3E8FF',
      calm: '#A8B5A2',
      ink: '#172033'
    },
    fonts: {
      serif: "Playfair Display, serif",
      sans: "Poppins, sans-serif"
    }
  },

  roseGold: {
    key: 'roseGold',
    name: 'Rose Premium & Or',
    colors: {
      brand: '#A4447F',
      mauve: '#B57CC9',
      mauveDark: '#884EA8',
      accent: '#D4AF37',
      rose: '#F7CED7',
      roseSoft: '#FFF5F6',
      bg: '#FEFBFB',
      soft: '#FFF0F6',
      calm: '#A8B5A2',
      ink: '#1F1A1D'
    },
    fonts: {
      serif: "Playfair Display, serif",
      sans: "Poppins, sans-serif"
    }
  },

  royalBlueGold: {
    key: 'royalBlueGold',
    name: 'Royal Bleu & Or',
    colors: {
      brand: '#2B5CFF',
      mauve: '#7E8CFF',
      mauveDark: '#5161E6',
      accent: '#C99700',
      rose: '#F8EDEE',
      roseSoft: '#FFF9F7',
      bg: '#F4F6FF',
      soft: '#E8F1FF',
      calm: '#9FB3A6',
      ink: '#0F1724'
    },
    fonts: {
      serif: "Playfair Display, serif",
      sans: "Poppins, sans-serif"
    }
  },

  emeraldLuxe: {
    key: 'emeraldLuxe',
    name: 'Émeraude & Doré',
    colors: {
      brand: '#116A4A',
      mauve: '#6FAF9B',
      mauveDark: '#3D8C73',
      accent: '#D4AF37',
      rose: '#F6F8F4',
      roseSoft: '#FCFDFB',
      bg: '#F5FBF8',
      soft: '#EAF8F0',
      calm: '#A8B5A2',
      ink: '#0B2B22'
    },
    fonts: {
      serif: "Playfair Display, serif",
      sans: "Poppins, sans-serif"
    }
  },

  softPastel: {
    key: 'softPastel',
    name: 'Pastel Élégant',
    colors: {
      brand: '#6C5CE7',
      mauve: '#C7B3F8',
      mauveDark: '#9A85E6',
      accent: '#E0B14A',
      rose: '#F9EAF0',
      roseSoft: '#FFF7FB',
      bg: '#FEFEFF',
      soft: '#FFF5FE',
      calm: '#C7D2C8',
      ink: '#172033'
    },
    fonts: {
      serif: "Playfair Display, serif",
      sans: "Poppins, sans-serif"
    }
  },

  /* Dark variants (for users who want a dark theme) */
  mauveGoldDark: {
    key: 'mauveGoldDark',
    name: 'Mauve & Or — Nuit',
    colors: {
      brand: '#2B1244',
      mauve: '#6D28D9',
      mauveDark: '#5B21B6',
      accent: '#D4AF37',
      rose: '#3A1F2B',
      roseSoft: '#221423',
      bg: '#0B0710',
      soft: '#151019',
      calm: '#42594D',
      ink: '#F8F6F7'
    },
    fonts: {
      serif: "Playfair Display, serif",
      sans: "Poppins, sans-serif"
    }
  },

  royalBlueGoldDark: {
    key: 'royalBlueGoldDark',
    name: 'Royal Bleu & Or — Nuit',
    colors: {
      brand: '#08123A',
      mauve: '#5161E6',
      mauveDark: '#3B4CCB',
      accent: '#C99700',
      rose: '#2A2830',
      roseSoft: '#15151A',
      bg: '#070912',
      soft: '#0D1530',
      calm: '#2B3B30',
      ink: '#F1F5F9'
    },
    fonts: {
      serif: "Playfair Display, serif",
      sans: "Poppins, sans-serif"
    }
  }
}

export const THEME = THEMES.mauveGold

export function getTheme(key) {
  return THEMES[key] || THEMES.mauveGold
}
