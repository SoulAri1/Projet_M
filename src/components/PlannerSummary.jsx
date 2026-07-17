import React from 'react'

function Money({value}){
  return <span className="font-semibold">{Math.round(value).toLocaleString()}€</span>
}

export default function PlannerSummary({result}){
  return (
    <div className="p-6 bg-[#FAF9F6] rounded-xl">
      <h3 className="font-serif text-2xl">Résumé élégant</h3>
      <p className="mt-2 text-gray-700">Estimation globale: <Money value={result.total} /></p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="p-4 bg-white rounded-xl shadow-soft">
          <div className="text-xs text-gray-500">Coût par invité</div>
          <div className="font-semibold mt-2"><Money value={result.perGuest} /></div>
        </div>
        <div className="p-4 bg-white rounded-xl shadow-soft">
          <div className="text-xs text-gray-500">Venue estimate</div>
          <div className="font-semibold mt-2"><Money value={result.venue} /></div>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold">Prestations recommandées</h4>
        <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
          {result.recommendations.map((r,i)=>(<li key={i}>{r}</li>))}
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold">Planning simplifié</h4>
        <ol className="mt-2 text-sm text-gray-700 list-decimal list-inside">
          {result.timeline.map((t,i)=>(<li key={i} className="mt-2">{t}</li>))}
        </ol>
      </div>

    </div>
  )
}
