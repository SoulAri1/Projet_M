import React, { useState } from 'react'
import { THEMES } from '../data/theme'
import applyTheme from '../applyTheme'
import { motion, AnimatePresence } from 'framer-motion'

function MiniPreview({ t }) {
  const bg = t.colors.bg
  const fg = t.colors.ink
  const accent = t.colors.accent
  const mauve = t.colors.mauve
  return (
    <div className="w-full rounded-md overflow-hidden shadow" style={{ background: bg, color: fg }}>
      <div className="p-4 flex items-center justify-between">
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <div style={{ width: 42, height: 42, borderRadius: 8, background: `linear-gradient(135deg, ${mauve}, ${accent})` }} />
          <div>
            <div className="font-serif" style={{ fontSize: 14 }}>{t.name}</div>
            <div className="text-xs text-opacity-70" style={{ color: fg }}>Ever After Events</div>
          </div>
        </div>
        <div>
          <div className="px-3 py-1 rounded-md" style={{ background: accent, color: '#fff', fontWeight: 600 }}>Réserver</div>
        </div>
      </div>
      <div className="p-4">
        <div style={{ height: 80, borderRadius: 8, background: `linear-gradient(90deg, rgba(0,0,0,0.04), rgba(0,0,0,0.02))` }} />
      </div>
    </div>
  )
}

export default function ThemePreview() {
  const keys = Object.keys(THEMES)
  const [open, setOpen] = useState(null)

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--mauve)]">Aperçu des thèmes</div>
          <h2 className="h1 text-2xl mt-2">Prévisualisez rapidement une palette</h2>
          <p className="text-sm text-slate-600 mt-2">Cliquez sur un thème pour l’appliquer immédiatement. Visible et utilisable sur mobile.</p>
        </div>
      </div>

      <div className="mt-4 overflow-x-auto pb-4">
        <div className="flex gap-4 w-max px-2">
          {keys.map((k) => {
            const t = THEMES[k]
            return (
              <div key={k} className="w-64 flex-shrink-0">
                <button onClick={() => applyTheme(t)} className="w-full rounded-2xl p-4 bg-white shadow-soft card-hover text-left">
                  <div className="h-28 rounded-lg overflow-hidden mb-3" style={{ background: `linear-gradient(135deg, ${t.colors.mauve} 0%, ${t.colors.accent} 100%)` }} />
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-slate-500 mt-1">Aperçu rapide</div>
                </button>
                <div className="mt-2 flex gap-2">
                  <button className="btn btn-ghost btn-sm" onClick={() => setOpen(k)}>Voir la preview</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
          >
            <motion.div initial={{ scale: 0.98 }} animate={{ scale: 1 }} exit={{ scale: 0.98 }} className="max-w-3xl w-full">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="p-4 flex items-center justify-between border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md" style={{ background: `linear-gradient(135deg, ${THEMES[open].colors.mauve}, ${THEMES[open].colors.accent})` }} />
                    <div>
                      <div className="font-serif text-lg">{THEMES[open].name}</div>
                      <div className="text-sm text-gray-500">Prévisualisation : Header + Hero + CTA</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="btn btn-ghost" onClick={() => setOpen(null)}>Fermer</button>
                    <button className="btn" onClick={() => { applyTheme(THEMES[open]); setOpen(null) }}>Appliquer le thème</button>
                  </div>
                </div>

                <div className="p-6 bg-gray-50">
                  <motion.div layout initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
                    <MiniPreview t={THEMES[open]} />
                  </motion.div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium">Couleurs</h5>
                      <div className="flex gap-2 mt-2">
                        <div style={{ width: 48, height: 48, borderRadius: 8, background: THEMES[open].colors.mauve }} />
                        <div style={{ width: 48, height: 48, borderRadius: 8, background: THEMES[open].colors.accent }} />
                        <div style={{ width: 48, height: 48, borderRadius: 8, background: THEMES[open].colors.bg, border: '1px solid rgba(0,0,0,0.06)' }} />
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium">Typographie</h5>
                      <div className="mt-2 text-sm">Serif: {THEMES[open].fonts.serif}</div>
                      <div className="text-sm">Sans: {THEMES[open].fonts.sans}</div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
