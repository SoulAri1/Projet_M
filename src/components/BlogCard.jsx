import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard({a}){
  return (
    <div className="bg-white rounded-xl shadow-soft overflow-hidden">
      <div className="w-full h-40 bg-gray-100" aria-hidden />
      <div className="p-4">
        <h3 className="font-semibold">{a.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{a.excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-700">
          <div>{a.date}</div>
          <Link to={`/blog/${a.slug}`} className="text-[var(--brand)]">Lire</Link>
        </div>
      </div>
    </div>
  )
}
