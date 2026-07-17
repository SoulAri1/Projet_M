import React from 'react'

const steps = [
  { title: 'Écoute & stratégie', text: 'Nous comprenons votre vision, votre budget et votre rythme de vie.' },
  { title: 'Concept & design', text: 'Nous dessinons un univers cohérent, élégant et profondément personnel.' },
  { title: 'Coordination', text: 'Nous orchestrons les prestataires et les détails sensibles jusqu’au Jour J.' },
  { title: 'Émotion & fluidité', text: 'Votre journée se déroule avec calme, grâce et une ambiance sans fausse note.' }
]

export default function ProcessTimeline() {
  return (
    <section className="mt-16 rounded-[32px] border border-slate-200/70 bg-white p-8 md:p-10 shadow-soft">
      <div className="max-w-2xl">
        <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand)]">Notre méthode</div>
        <h2 className="h1 text-3xl mt-2">Une expérience premium, pensée de bout en bout.</h2>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step.title} className="rounded-2xl bg-[var(--soft)] p-5">
            <div className="text-sm font-semibold text-[var(--brand)]">0{index + 1}</div>
            <h3 className="mt-2 font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-slate-700">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
