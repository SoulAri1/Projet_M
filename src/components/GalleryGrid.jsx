import React, { useMemo, useState } from 'react'
import Modal from './Modal'
import { GALLERY } from '../data/gallery'

export default function GalleryGrid() {
  const [filter, setFilter] = useState('All')
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(null)

  const styles = useMemo(() => ['All', ...new Set(GALLERY.map((g) => g.style))], [])
  const items = filter === 'All' ? GALLERY : GALLERY.filter((g) => g.style === filter)

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-6">
        {styles.map((s) => (
          <button key={s} onClick={() => setFilter(s)} className={`px-4 py-2 rounded-full border ${filter === s ? 'bg-[var(--brand)] text-white border-[var(--brand)]' : 'bg-white text-slate-700 border-slate-200'}`}>
            {s}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((it) => (
          <button key={it.id} onClick={() => { setCurrent(it); setOpen(true) }} className="group rounded-2xl overflow-hidden bg-white shadow-soft text-left" aria-label={it.alt}>
            <img src={it.src} alt={it.alt} className="w-full h-56 object-cover transition duration-300 group-hover:scale-105" />
            <div className="p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--brand)]">{it.style}</div>
              <div className="font-semibold mt-2">{it.alt}</div>
              <div className="text-sm text-slate-500 mt-2">{it.city}</div>
            </div>
          </button>
        ))}
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        {current && (
          <div>
            <img src={current.src} alt={current.alt} className="w-full h-72 object-cover rounded-xl" />
            <div className="mt-4 font-semibold text-xl">{current.alt}</div>
            <div className="text-sm text-slate-500 mt-2">{current.city} — {current.style}</div>
            <p className="mt-3 text-slate-700">{current.description}</p>
          </div>
        )}
      </Modal>
    </div>
  )
}
