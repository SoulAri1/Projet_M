import React from 'react'
import { Link } from 'react-router-dom'

export default function ServiceCard({s}){
  return (
    <div className="bg-white rounded-xl shadow-soft overflow-hidden">
      <div className="w-full h-40 bg-gray-100" aria-hidden />
      <div className="p-4">
        <h3 className="font-semibold">{s.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{s.excerpt}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-700">À partir de {s.priceFrom.toLocaleString()}€</div>
          <Link to={`/services/${s.slug}`} className="text-[var(--brand)]">Voir</Link>
        </div>
      </div>
    </div>
  )
}
