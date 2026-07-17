import React from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
      <div>
        <h1 className="h1 text-3xl mb-4">Contactez-nous</h1>
        <p className="text-gray-600 mb-6">Parlez-nous de votre projet — nous serons ravis d'échanger.</p>
        <ContactForm />
      </div>
      <div>
        <h2 className="font-semibold">Notre bureau</h2>
        <p className="text-sm text-gray-600 mt-2">Paris, France</p>
        <div className="mt-6 w-full h-64 bg-gray-100 rounded-xl overflow-hidden">
          <iframe title="map" src="https://maps.google.com/maps?q=Paris&t=&z=13&ie=UTF8&iwloc=&output=embed" className="w-full h-full border-0" />
        </div>
      </div>
    </div>
  )
}
