import React, { useEffect, useState } from 'react'
import { getTheme, THEMES } from '../data/theme'
import { getAgency, setAgencyOverride, resetAgency } from '../services/agencyService'

export default function AgencySettings({ open, onClose }) {
  const [agency, setAgency] = useState(getAgency())
  const [form, setForm] = useState({ city: '', country: '', currency: '', currencySymbol: '' })

  useEffect(() => {
    setAgency(getAgency())
  }, [open])

  useEffect(() => {
    if (agency && agency.location) {
      setForm({
        city: agency.location.city || '',
        country: agency.location.country || '',
        currency: agency.location.currency || '',
        currencySymbol: agency.location.currencySymbol || ''
      })
    }
  }, [agency])

  if (!open) return null

  const save = () => {
    const updated = setAgencyOverride({ location: { city: form.city, country: form.country, currency: form.currency, currencySymbol: form.currencySymbol } })
    setAgency(updated)
    if (onClose) onClose()
  }

  const clear = () => {
    resetAgency()
    setAgency(getAgency())
    if (onClose) onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
      <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-2xl">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Réglages de l'agence</h3>
          <button onClick={onClose} aria-label="Fermer">✕</button>
        </div>

        <div className="mt-4 grid gap-3">
          <label className="text-sm">Ville</label>
          <input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="w-full p-3 rounded-xl border" />

          <label className="text-sm">Pays</label>
          <input value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className="w-full p-3 rounded-xl border" />

          <label className="text-sm">Devise (code)</label>
          <input value={form.currency} onChange={(e) => setForm({ ...form, currency: e.target.value })} className="w-full p-3 rounded-xl border" />

          <label className="text-sm">Symbole devise</label>
          <input value={form.currencySymbol} onChange={(e) => setForm({ ...form, currencySymbol: e.target.value })} className="w-full p-3 rounded-xl border" />

          <div className="flex items-center justify-between gap-3 mt-3">
            <button onClick={save} className="px-4 py-2 rounded-xl bg-[var(--mauve)] text-white">Enregistrer</button>
            <button onClick={clear} className="px-4 py-2 rounded-xl border">Restaurer défauts</button>
          </div>

          {/* Brand guide */}
          <div className="mt-4 pt-4 border-t">
            <h4 className="font-semibold">Guide de la charte</h4>
            <p className="text-sm text-slate-600 mt-2">Où sont utilisées les couleurs et tokens du thème:</p>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <div>
                <div className="text-xs text-gray-500">Couleur principale (--mauve)</div>
                <div className="mt-2 w-20 h-10 rounded-md" style={{ background: 'var(--mauve)' }} />
                <div className="text-sm mt-1">Utilisée pour les CTA principaux, accents et surbrillance.</div>
              </div>

              <div>
                <div className="text-xs text-gray-500">Accent doré (--accent)</div>
                <div className="mt-2 w-20 h-10 rounded-md" style={{ background: 'var(--accent)' }} />
                <div className="text-sm mt-1">Utilisé pour détails premium, icônes, et bordures fines.</div>
              </div>

              <div>
                <div className="text-xs text-gray-500">Fond / surfaces (--bg / --soft)</div>
                <div className="mt-2 w-20 h-10 rounded-md" style={{ background: 'var(--bg)', border: '1px solid rgba(0,0,0,0.04)' }} />
                <div className="text-sm mt-1">Fond principal et surfaces de cartes.</div>
              </div>

              <div>
                <div className="text-xs text-gray-500">Typographie (serif / sans)</div>
                <div className="mt-2 text-sm font-serif">Titres : Playfair Display</div>
                <div className="text-sm">Corps : Poppins</div>
              </div>
            </div>

            <p className="text-xs text-slate-500 mt-3">Conseil : pour garder l'esprit premium, gardez beaucoup d'espaces blancs, utilisez l'or avec parcimonie, et préférez des images haute qualité pour les sections héros et galerie.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
