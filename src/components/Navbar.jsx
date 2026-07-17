import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import ThemeSwitcher from './ThemeSwitcher'
import { Settings } from 'lucide-react'
import { useState } from 'react'
import AgencySettings from './AgencySettings'

const links = [
  { to: '/services', label: 'Nos services' },
  { to: '/gallery', label: 'Galerie' },
  { to: '/team', label: 'Notre équipe' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' }
]

export default function Navbar() {
  const [settingsOpen, setSettingsOpen] = useState(false)

  return (
    <header className="py-5 px-6 sticky top-0 z-40 backdrop-blur">
      <div className="max-w-6xl mx-auto flex items-center justify-between rounded-full border border-slate-200/70 bg-white/70 px-5 py-3 shadow-soft">
        <Link to="/" className="flex items-center gap-3">
          <img src="/assets/logo.svg" alt="Ever After Events" className="w-10 h-10 object-cover rounded-full shadow-sm" />
          <div>
            <div className="font-serif text-lg">Ever After Events</div>
            <div className="text-xs text-slate-500">Wedding Planner & Design Studio</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="hover:text-[var(--mauve)] transition">{link.label}</Link>
          ))}
          <Link to="/planner" className="text-white bg-[var(--mauve)] px-4 py-2 rounded-full shadow-soft">Wedding Planner</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeSwitcher />
          <button onClick={() => setSettingsOpen(true)} className="p-2 rounded-full hover:bg-slate-50" aria-label="Réglages de l'agence">
            <Settings />
          </button>
        </div>

        <div className="flex items-center gap-2">
          {/* Theme switcher: visible on small screens as compact */}
          <div className="sm:hidden">
            <ThemeSwitcher compact />
          </div>

          <button onClick={() => setSettingsOpen(true)} className="hidden sm:inline-flex p-2 rounded-full hover:bg-slate-50" aria-label="Réglages de l'agence">
            <Settings />
          </button>

          <button className="md:hidden p-2 rounded-full focus-ring" aria-label="Ouvrir le menu">
            <Menu />
          </button>
        </div>

        {settingsOpen && <AgencySettings open={settingsOpen} onClose={() => setSettingsOpen(false)} /> }
      </div>
    </header>
  )
}
