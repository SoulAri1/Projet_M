import React from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
      <div>
        <div className="rounded-[28px] bg-white/80 p-8 shadow-soft">
          <h1 className="h1 text-3xl">Contact / Réservation</h1>
          <p className="text-slate-600 mt-3">Parlez-nous de votre projet. Nous vous accompagnons avec calme, précision et élégance.</p>
        </div>
        <div className="mt-6">
          <ContactForm />
        </div>
      </div>
      <div>
        <div className="rounded-[28px] bg-[var(--soft)] p-8 shadow-soft">
          <h2 className="font-semibold text-xl">Notre bureau</h2>
          <p className="text-sm text-slate-600 mt-2">Paris, France</p>
          <div className="mt-6 w-full h-64 rounded-xl overflow-hidden">
            <iframe title="map" src="https://maps.google.com/maps?q=Paris&t=&z=13&ie=UTF8&iwloc=&output=embed" className="w-full h-full border-0" />
          </div>
        </div>
      </div>
    </div>
  )
}
