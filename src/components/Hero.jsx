import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getAgency } from '../services/agencyService'

export default function Hero() {
  const AGENCY = getAgency()

  return (
    <section className="rounded-[32px] border border-slate-200/70 bg-white/80 p-8 md:p-10 shadow-soft overflow-hidden">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-[var(--brand)]/20 bg-[var(--soft)] px-3 py-1 text-sm text-[var(--brand-dark)]">
            Émotion • Élégance • Mauve & Or
          </div>
          <h1 className="h1 text-4xl md:text-5xl font-bold mt-4">Des mariages qui respirent l’élégance.</h1>
          <p className="mt-4 text-lg text-slate-700">{AGENCY.tagline}</p>
          <p className="mt-3 text-sm text-slate-600">{AGENCY.motto}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/planner" className="inline-flex items-center gap-2 brand-gradient px-5 py-3 rounded-xl shadow-soft">Démarrer le Wedding Planner</Link>
            </motion.div>

            <motion.div whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[var(--accent)] bg-white text-[var(--mauve)]">Réserver un appel</Link>
            </motion.div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} className="w-full">
          <img loading="lazy" src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80" alt="Décor de mariage premium" className="w-full rounded-[24px] shadow-soft object-cover h-[360px]" />
        </motion.div>
      </div>
    </section>
  )
}
