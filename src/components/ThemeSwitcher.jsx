import React, { useEffect, useState } from 'react'
import applyTheme from '../applyTheme'
import { THEMES, getTheme } from '../data/theme'

export default function ThemeSwitcher({ compact = false }) {
  const keys = Object.keys(THEMES)
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(() => localStorage.getItem('ever-after-theme') || 'mauveGold')

  useEffect(() => {
    const t = getTheme(current)
    applyTheme(t)
    localStorage.setItem('ever-after-theme', current)
  }, [current])

  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const select = (k) => {
    setCurrent(k)
    setOpen(false)
  }

  return (
    <div className="relative">
      <button onClick={() => setOpen((s) => !s)} aria-haspopup="true" aria-expanded={open} className={`flex items-center gap-2 rounded-full px-3 py-2 border ${compact ? 'text-sm' : 'text-sm'} bg-white`}>
        <span className="w-3 h-3 rounded-full" style={{ background: THEMES[current].colors.mauve }} />
        <span className="hidden sm:inline">{THEMES[current].name}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" className="ml-1"><path fill="currentColor" d="M7 10l5 5 5-5z"/></svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg p-3 z-50">
          <div className="text-xs text-slate-500 px-2">Thèmes</div>
          <div className="mt-2 grid gap-2">
            {keys.map((k) => (
              <button key={k} onClick={() => select(k)} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-left focus:outline-none">
                <span className="w-6 h-6 rounded-full" style={{ background: THEMES[k].colors.mauve, border: `2px solid ${THEMES[k].colors.accent}` }} />
                <div>
                  <div className="font-medium text-sm">{THEMES[k].name}</div>
                  <div className="text-xs text-slate-500">Aperçu rapide</div>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-3">
            <div className="text-xs text-slate-400 px-2">Le thème est enregistré en local et restera sur cet appareil.</div>
            <div className="px-2 mt-2 flex gap-2">
              <button
                onClick={async () => {
                  // Apply and optionally share to serverless endpoint
                  try {
                    const t = THEMES[current]
                    // Quick apply locally
                    select(current)
                    // Attempt to save to server endpoint
                    const resp = await fetch('/api/save-theme', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ theme: t, message: `Shared theme: ${t.name}` })
                    })
                    if (resp.ok) {
                      alert('Thème partagé avec succès (si le serveur est configuré)')
                    } else {
                      // Not fatal — show friendly message
                      console.warn('Shared theme failed', await resp.text())
                      alert('Thème appliqué localement. Déployez la fonction serverless pour partager.')
                    }
                  } catch (err) {
                    console.warn(err)
                    alert('Thème appliqué localement. Point de terminaison de partage indisponible.')
                  }
                }}
                className="btn btn-sm bg-[var(--mauve)] text-white px-3 py-1 rounded-md"
              >
                Appliquer et partager
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
