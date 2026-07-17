import React from 'react'
import { SERVICES } from '../data/services'
import ServiceCard from '../components/ServiceCard'

export default function Services(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="h1 text-3xl mb-6">Nos Services</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {SERVICES.map(s=> <ServiceCard key={s.id} s={s} />)}
      </div>
    </div>
  )
}
