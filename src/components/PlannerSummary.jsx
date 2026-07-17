import React from 'react'

function Money({ value }) {
  return <span className="font-semibold">{Math.round(value).toLocaleString()}€</span>
}

export default function PlannerSummary({ result }) {
  return (
    <div className="p-6 bg-[var(--rose-soft)] rounded-2xl border border-[var(--rose)]">
      <div className="text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Estimation live</div>
      <h3 className="font-serif text-2xl mt-2">Résumé élégant</h3>
      <p className="mt-2 text-slate-700">Estimation globale : <Money value={result.total} /></p>
      <p className="mt-2 text-sm text-slate-600">Pays sélectionné : <span className="font-semibold">{result.country}</span> · Multiplicateur {result.countryMultiplier.toFixed(2)}×</p>
      <p className="mt-2 text-sm text-slate-600">{result.budgetFit}</p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="p-4 bg-white rounded-xl shadow-soft">
          <div className="text-xs text-slate-500">Coût par invité</div>
          <div className="font-semibold mt-2"><Money value={result.perGuest} /></div>
        </div>
        <div className="p-4 bg-white rounded-xl shadow-soft">
          <div className="text-xs text-slate-500">Lieu / venue</div>
          <div className="font-semibold mt-2"><Money value={result.venue} /></div>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold">Prestations recommandées</h4>
        <ul className="mt-2 list-disc list-inside text-sm text-slate-700 space-y-1">
          {result.recommendations.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold">Planning simplifié</h4>
        <ol className="mt-2 text-sm text-slate-700 list-decimal list-inside space-y-1">
          {result.timeline.map((t, i) => <li key={i}>{t}</li>)}
        </ol>
      </div>
    </div>
  )
}
