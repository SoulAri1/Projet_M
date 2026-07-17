import React from 'react'
import { SERVICES } from '../data/services'
import ServiceCard from '../components/ServiceCard'

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="rounded-[28px] bg-white/80 p-8 shadow-soft">
        <h1 className="h1 text-3xl">Nos Services</h1>
        <p className="mt-3 text-slate-600 max-w-2xl">Chaque cérémonie est conçue autour d’un équilibre entre esthétique, calme et précision logistique — pour une expérience fluide et mémorable.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {SERVICES.map((s) => <ServiceCard key={s.id} s={s} />)}
      </div>
    </div>
  )
}
