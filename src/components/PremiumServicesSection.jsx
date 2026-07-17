import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '../data/services'

export default function PremiumServicesSection() {
  return (
    <section className="mt-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand)]">Prestations premium</div>
          <h2 className="h1 text-3xl mt-2">Des services conçus pour une expérience fluide et luxueuse.</h2>
        </div>
        <Link to="/services" className="hidden md:inline-flex items-center gap-2 text-[var(--brand)]">
          Voir toutes les prestations <ArrowRight size={16} />
        </Link>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {SERVICES.map((service) => (
          <div key={service.id} className="rounded-[24px] border border-slate-200/70 bg-white p-5 shadow-soft transition hover:-translate-y-1">
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--mauve)]">{service.highlight}</div>
            <h3 className="mt-2 font-semibold text-xl">{service.title}</h3>
            <p className="mt-3 text-sm text-slate-700">{service.excerpt}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {service.features?.map((feature) => <li key={feature}>• {feature}</li>)}
            </ul>
            <div className="mt-5 flex items-center justify-between">
              <div className="text-sm font-semibold">À partir de {service.priceFrom.toLocaleString()}€</div>
              <Link to={`/services/${service.slug}`} className="text-[var(--mauve)]">Découvrir</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
