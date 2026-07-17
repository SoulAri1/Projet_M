import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import applyTheme from './applyTheme'
import { THEME } from './data/theme'

// Apply the runtime theme so colors can be changed from src/data/theme.js
// Try to load a shared theme at runtime (deployed file at /shared/theme-shared.json) and apply it if available.
async function initTheme() {
  try {
    const resp = await fetch('/shared/theme-shared.json', { cache: 'no-store' })
    if (resp.ok) {
      const shared = await resp.json()
      if (shared && typeof shared === 'object') {
        applyTheme(shared)
        // Persist indicator locally so ThemeSwitcher shows the theme name if needed
        try { localStorage.setItem('ever-after-theme-shared', JSON.stringify({ name: shared.name || 'Shared theme' })) } catch(e) {}
        return
      }
    }
  } catch (err) {
    // No shared theme available or network error — fallback to local theme
    // console.debug('No shared theme found', err)
  }
  applyTheme(THEME)
}

initTheme()

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

