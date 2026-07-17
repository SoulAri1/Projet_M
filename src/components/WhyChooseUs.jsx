import React from 'react'
import { Compass, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react'

const items = [
  {
    title: 'Vision premium',
    text: 'Chaque détail est pensé pour une expérience à la fois élégante, fluide et émotionnelle.',
    icon: Sparkles
  },
  {
    title: 'Coordination discrète',
    text: 'Nous gérons les imprévus avec calme pour que vous profitiez pleinement de chaque instant.',
    icon: Compass
  },
  {
    title: 'Confiance absolue',
    text: 'Un réseau de prestataires sélectionnés, des standards élevés et une transparence totale.',
    icon: ShieldCheck
  },
  {
    title: 'Relation humaine',
    text: 'Nous créons un cadre chaleureux et rassurant, au cœur de votre histoire.',
    icon: HeartHandshake
  }
]

export default function WhyChooseUs() {
  return (
    <section className="mt-16 rounded-[32px] border border-slate-200/70 bg-[var(--soft)] p-8 md:p-10 shadow-soft">
      <div className="max-w-2xl">
        <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand)]">Pourquoi nous choisir</div>
        <h2 className="h1 text-3xl mt-2">Un accompagnement premium, personnalisé et serein.</h2>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.title} className="rounded-2xl bg-white/80 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-[var(--rose-soft)] p-2 text-[var(--brand)]">
                  <Icon size={18} />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-700">{item.text}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
