import React from 'react'
import FAQAccordion from '../components/FAQAccordion'

export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="rounded-[28px] bg-white/80 p-8 shadow-soft">
        <h1 className="h1 text-3xl">FAQ</h1>
        <p className="mt-3 text-slate-600">Voici les réponses aux questions les plus fréquentes sur notre approche, la planification et les prestations.</p>
      </div>
      <div className="mt-8">
        <FAQAccordion />
      </div>
    </div>
  )
}
