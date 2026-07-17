import React, { useMemo, useState } from 'react'
import Modal from './Modal'
import { GALLERY } from '../data/gallery'

export default function GalleryGrid(){
  const [filter, setFilter] = useState('All')
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(null)

  const styles = useMemo(()=>['All', ...new Set(GALLERY.map(g=>g.style))],[])
  const items = filter==='All' ? GALLERY : GALLERY.filter(g=>g.style===filter)

  return (
    <div>
      <div className="flex gap-3 mb-4">
        {styles.map(s=>(<button key={s} onClick={()=>setFilter(s)} className={`px-3 py-1 rounded-xl ${filter===s? 'bg-[var(--brand)] text-white' : 'bg-white'}`}>{s}</button>))}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map(it=> (
          <button key={it.id} onClick={()=>{ setCurrent(it); setOpen(true) }} className="rounded-xl overflow-hidden bg-gray-100 h-40 flex items-end p-4" aria-label={it.alt}>
            <div className="bg-black/40 text-white p-2 rounded">{it.style}</div>
          </button>
        ))}
      </div>

      <Modal open={open} onClose={()=>setOpen(false)}>
        {current && (
          <div>
            <div className="w-full h-64 bg-gray-200 rounded mb-4" aria-hidden />
            <div className="font-semibold">{current.alt}</div>
            <div className="text-sm text-gray-600 mt-2">{current.city} — {current.style}</div>
          </div>
        )}
      </Modal>
    </div>
  )
}
