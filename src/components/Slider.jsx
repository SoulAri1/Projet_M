import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Slider({ items }) {
  const [index, setIndex] = useState(0)

  if (!items?.length) return null

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)
  const next = () => setIndex((i) => (i + 1) % items.length)
  const current = items[index]

  return (
    <div className="relative">
      <motion.div key={current.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-[24px] overflow-hidden border border-slate-100 bg-white p-8 shadow-soft">
        <div className="text-[var(--accent)] text-lg">{'★'.repeat(current.rating || 5)}</div>
        <p className="mt-3 text-lg text-slate-700 italic">“{current.quote}”</p>
        <div className="mt-6 flex items-center justify-between">
          <div>
            <div className="font-semibold text-slate-900">{current.author}</div>
            <div className="text-sm text-slate-500">{current.place}</div>
          </div>
          <div className="text-3xl font-serif text-[var(--brand)]">✦</div>
        </div>
      </motion.div>

      <div className="absolute left-3 top-1/2 -translate-y-1/2">
        <button onClick={prev} className="p-2 bg-white rounded-full shadow-soft" aria-label="Précédent">‹</button>
      </div>
      <div className="absolute right-3 top-1/2 -translate-y-1/2">
        <button onClick={next} className="p-2 bg-white rounded-full shadow-soft" aria-label="Suivant">›</button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {items.map((item, idx) => (
                  <button key={item.id} onClick={() => setIndex(idx)} className={`h-2 rounded-full ${idx === index ? 'w-8 bg-[var(--mauve)]' : 'w-2 bg-slate-300'}`} aria-label={`Voir le témoignage ${idx + 1}`} />
        ))}
      </div>
    </div>
  )
}
