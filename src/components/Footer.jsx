import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-12">
      <div className="max-w-6xl mx-auto py-10 px-6 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-serif text-2xl">Ever After Events</div>
          <p className="text-sm text-slate-600 mt-2">Agence de mariage premium — création d’expériences élégantes et émotionnelles.</p>
        </div>
        <div>
          <div className="font-semibold">Liens</div>
          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/services">Nos Services</Link></li>
            <li><Link to="/gallery">Galerie</Link></li>
            <li><Link to="/planner">Wedding Planner</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <p className="mt-3 text-sm text-slate-700">contact@everafter.events<br/>+33 1 23 45 67 89</p>
        </div>
      </div>
      <div className="bg-slate-50 py-4 text-center text-sm text-slate-600">© {new Date().getFullYear()} Ever After Events — Tous droits réservés</div>
    </footer>
  )
}
