import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="rounded-xl p-8 glass shadow-soft overflow-hidden">
      <div className="md:flex md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h1 className="h1 text-4xl md:text-5xl font-bold">Ever After Events</h1>
          <p className="mt-4 text-gray-700">Créons un mariage élégant, émotionnel et inoubliable — planification premium sur-mesure.</p>
          <div className="mt-6 flex gap-4">
            <Link to="/planner" className="inline-flex items-center gap-2 bg-[var(--brand)] text-white px-5 py-3 rounded-xl">Démarrer le Wedding Planner</Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border">Contactez-nous</Link>
          </div>
        </div>
        <motion.div initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} className="mt-6 md:mt-0 md:w-1/2">
          <div className="w-full h-48 md:h-64 bg-gray-200 rounded-xl" aria-hidden="true"></div>
        </motion.div>
      </div>
    </section>
  )
}
