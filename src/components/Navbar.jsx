import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'

export default function Navbar(){
  return (
    <header className="bg-transparent py-6 px-6 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--brand)] flex items-center justify-center text-white font-semibold">EA</div>
          <div>
            <div className="font-serif text-xl">Ever After Events</div>
            <div className="text-xs text-gray-600">Agency & Wedding Planner</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/services" className="hover:text-[var(--brand)]">Nos services</Link>
          <Link to="/gallery" className="hover:text-[var(--brand)]">Galerie</Link>
          <Link to="/team" className="hover:text-[var(--brand)]">Notre équipe</Link>
          <Link to="/planner" className="text-white bg-[var(--brand)] px-4 py-2 rounded-xl shadow-soft">Wedding Planner</Link>
        </nav>

        <button className="md:hidden p-2 rounded focus-ring" aria-label="Ouvrir le menu">
          <Menu />
        </button>
      </div>
    </header>
  )
}
