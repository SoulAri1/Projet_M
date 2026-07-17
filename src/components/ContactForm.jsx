import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (data) => {
    console.log('booking request', data)
    setSubmitted(true)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded-2xl shadow-soft">
      {submitted && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
          Merci ! Votre demande a bien été enregistrée. Nous vous recontacterons sous 24h.
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Nom</label>
          <input {...register('name', { required: true })} className="mt-2 w-full p-3 border rounded-xl" />
          {errors.name && <div className="text-red-600 text-sm">Champ requis</div>}
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" {...register('email', { required: true })} className="mt-2 w-full p-3 border rounded-xl" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Date du mariage</label>
          <input type="date" {...register('date')} className="mt-2 w-full p-3 border rounded-xl" />
        </div>
        <div>
          <label className="block text-sm font-medium">Budget (€)</label>
          <input type="number" {...register('budget')} className="mt-2 w-full p-3 border rounded-xl" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea {...register('message', { required: true })} className="mt-2 w-full p-3 border rounded-xl" rows={5} />
      </div>

      <div className="flex justify-end">
        <button type="submit" className="bg-[var(--mauve)] text-white px-5 py-3 rounded-xl">Demander un devis</button>
      </div>
    </form>
  )
}
