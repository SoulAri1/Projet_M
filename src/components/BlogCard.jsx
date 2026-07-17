import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard({ a }) {
  return (
    <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
      <img src={a.image} alt={a.title} className="w-full h-44 object-cover" />
      <div className="p-5">
        <h3 className="font-semibold">{a.title}</h3>
        <p className="text-sm text-slate-600 mt-2">{a.excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-slate-700">
          <div>{a.date}</div>
          <Link to={`/blog/${a.slug}`} className="text-[var(--brand)]">Lire</Link>
        </div>
      </div>
    </div>
  )
}
