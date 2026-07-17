import { THEME } from './data/theme'

export function applyTheme(theme = THEME) {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  const c = theme.colors || {}
  root.style.setProperty('--brand', c.brand || '#4169E1')
  root.style.setProperty('--brand-dark', c.brandDark || '#1E3A8A')
  root.style.setProperty('--mauve', c.mauve || '#8B5CF6')
  root.style.setProperty('--mauve-dark', c.mauveDark || '#6D28D9')
  root.style.setProperty('--accent', c.accent || '#D4AF37')
  root.style.setProperty('--rose', c.rose || '#F8D7DA')
  root.style.setProperty('--rose-soft', c.roseSoft || '#FFF5F6')
  root.style.setProperty('--bg', c.bg || '#F7F9FD')
  root.style.setProperty('--soft', c.soft || '#F3E8FF')
  root.style.setProperty('--calm', c.calm || '#A8B5A2')
  root.style.setProperty('--ink', c.ink || '#172033')

  const f = theme.fonts || {}
  root.style.setProperty('--font-serif', f.serif || "Playfair Display, serif")
  root.style.setProperty('--font-sans', f.sans || "Poppins, sans-serif")

  // Add a short class to enable transitions on properties that use CSS variables.
  // The class is removed after the transition to avoid interfering with other animations.
  root.classList.add('theme-transition')
  setTimeout(() => root.classList.remove('theme-transition'), 420)
}

export default applyTheme
