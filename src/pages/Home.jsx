import React from 'react'
import Hero from '../components/Hero'
import { motion } from 'framer-motion'

export default function Home(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <Hero />

      <section className="mt-12">
        <h2 className="h1 text-3xl mb-6">Nos services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow-soft">
            <h3 className="font-semibold">Planification complète</h3>
            <p className="mt-2 text-sm text-gray-600">De A à Z, coordination premium pour un jour parfait.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-soft">
            <h3 className="font-semibold">Coordination Jour J</h3>
            <p className="mt-2 text-sm text-gray-600">Gestion logistique et coordination sur site.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-soft">
            <h3 className="font-semibold">Design & Décoration</h3>
            <p className="mt-2 text-sm text-gray-600">Ambiances sur-mesure, fleurs et scénographie.</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="h1 text-3xl mb-6">Témoignages</h2>
        <motion.blockquote className="p-6 bg-white rounded-xl shadow-soft italic text-gray-700">“Ever After Events a fait de notre mariage un rêve éveillé — professionnalisme et sensibilité.”</motion.blockquote>
      </section>

    </div>
  )
}
