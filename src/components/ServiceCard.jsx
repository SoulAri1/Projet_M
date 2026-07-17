import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ServiceCard({ s }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} whileHover={{ scale: 1.02 }} className="bg-white rounded-2xl shadow-soft overflow-hidden card-hover">
      <img loading="lazy" src={s.image} alt={s.title} className="w-full h-48 object-cover" />
      <div className="p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--mauve)]">{s.highlight}</div>
        <h3 className="font-semibold mt-2">{s.title}</h3>
        <p className="text-sm text-slate-600 mt-2">{s.excerpt}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-slate-700">À partir de {s.priceFrom.toLocaleString()}€</div>
          <Link to={`/services/${s.slug}`} className="text-[var(--mauve)] font-medium">Voir</Link>
        </div>
      </div>
    </motion.div>
  )
}
