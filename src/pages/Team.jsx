import React from 'react'
import { TEAM } from '../data/team'

export default function Team(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="h1 text-3xl mb-6">Notre équipe</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {TEAM.map(t=> (
          <div key={t.id} className="bg-white p-6 rounded-xl shadow-soft">
            <div className="w-24 h-24 bg-gray-100 rounded-full mb-4" aria-hidden />
            <div className="font-semibold">{t.name}</div>
            <div className="text-sm text-gray-600">{t.role}</div>
            <p className="text-sm mt-2 text-gray-700">{t.bio}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
