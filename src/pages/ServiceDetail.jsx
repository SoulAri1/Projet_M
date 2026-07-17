import React from 'react'
import { useParams } from 'react-router-dom'
import { SERVICES } from '../data/services'

export default function ServiceDetail(){
  const { slug } = useParams()
  const service = SERVICES.find(s=> s.slug === slug)
  if(!service) return <div className="p-6">Service non trouvé</div>

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="h1 text-3xl">{service.title}</h1>
      <div className="mt-6 bg-white p-6 rounded-xl shadow-soft">
        <div className="w-full h-64 bg-gray-100 mb-6" aria-hidden />
        <p className="text-gray-700">{service.excerpt}</p>
        <div className="mt-4 text-sm text-gray-700">Prix indicatif: {service.priceFrom.toLocaleString()}€</div>
      </div>
    </div>
  )
}
