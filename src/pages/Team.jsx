import React from 'react'
import { TEAM } from '../data/team'

export default function Team() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="rounded-[28px] bg-white/80 p-8 shadow-soft">
        <h1 className="h1 text-3xl">Notre équipe</h1>
        <p className="mt-3 text-slate-600">Une équipe discrète, réactive et experte — pour maintenir l’ambiance, le timing et la qualité de chaque instant.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {TEAM.map((t) => (
          <div key={t.id} className="bg-white p-6 rounded-2xl shadow-soft flex gap-4 items-start">
            <img src={t.avatar} alt={t.name} className="w-24 h-24 rounded-full object-cover" />
            <div>
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-[var(--brand)]">{t.role}</div>
              <p className="text-sm mt-2 text-slate-700">{t.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
