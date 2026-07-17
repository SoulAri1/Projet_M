import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { SERVICES } from '../data/services'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = SERVICES.find((s) => s.slug === slug)

  if (!service) return <div className="p-6">Service non trouvé</div>

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="rounded-[28px] bg-white/80 p-8 shadow-soft">
        <h1 className="h1 text-3xl">{service.title}</h1>
        <p className="mt-3 text-slate-600">{service.excerpt}</p>
      </div>
      <div className="mt-8 grid md:grid-cols-[1fr_0.8fr] gap-8">
        <img src={service.image} alt={service.title} className="w-full h-72 object-cover rounded-2xl shadow-soft" />
        <div className="bg-white p-6 rounded-2xl shadow-soft">
          <div className="text-sm uppercase tracking-[0.22em] text-[var(--brand)]">{service.highlight}</div>
          <div className="mt-4 text-xl font-semibold">À partir de {service.priceFrom.toLocaleString()}€</div>
          <p className="mt-4 text-slate-700">Nous adaptons chaque prestation à votre budget, votre style et votre calendrier pour préserver la fluidité de votre journée.</p>
          <Link to="/contact" className="inline-flex mt-6 bg-[var(--brand)] text-white px-5 py-3 rounded-xl">Réserver une découverte</Link>
        </div>
      </div>
    </div>
  )
}
