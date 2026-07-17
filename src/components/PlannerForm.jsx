import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import PlannerSummary from './PlannerSummary'
import estimateWedding from '../services/estimator'

export default function PlannerForm() {
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({ defaultValues: { budget: 20000, guests: 80, date: '', city: '', country: 'France', type: 'Mariage', style: 'Classic' } })
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = (data) => {
    setLoading(true)
    setTimeout(() => {
      const res = estimateWedding(data)
      setResult(res)
      setLoading(false)
    }, 400)
  }

  const watched = watch()

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Budget (€)</label>
          <input type="number" {...register('budget', { valueAsNumber: true, min: 1000 })} className="mt-2 w-full p-3 border rounded-xl focus-ring" aria-invalid={errors.budget ? 'true' : 'false'} />
        </div>

        <div>
          <label className="block text-sm font-medium">Nombre d'invités</label>
          <input type="number" {...register('guests', { valueAsNumber: true, min: 1 })} className="mt-2 w-full p-3 border rounded-xl focus-ring" />
        </div>

        <div>
          <label className="block text-sm font-medium">Date</label>
          <input type="date" {...register('date')} className="mt-2 w-full p-3 border rounded-xl focus-ring" />
        </div>

        <div>
          <label className="block text-sm font-medium">Ville</label>
          <input type="text" {...register('city')} placeholder="Paris" className="mt-2 w-full p-3 border rounded-xl focus-ring" />
        </div>

        <div>
          <label className="block text-sm font-medium">Pays</label>
          <select {...register('country')} className="mt-2 w-full p-3 border rounded-xl focus-ring">
            <option>France</option>
            <option>Italie</option>
            <option>Royaume-Uni</option>
            <option>Espagne</option>
            <option>États-Unis</option>
            <option>Émirats</option>
            <option>Monaco</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Type de mariage</label>
          <select {...register('type')} className="mt-2 w-full p-3 border rounded-xl focus-ring">
            <option>Mariage</option>
            <option>Elopement</option>
            <option>Engagement</option>
            <option>Vow Renewal</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Style</label>
          <select {...register('style')} className="mt-2 w-full p-3 border rounded-xl focus-ring">
            <option>Classic</option>
            <option>Boho</option>
            <option>Modern</option>
            <option>Romantic</option>
          </select>
        </div>

        <div className="flex gap-3">
                  <button type="submit" className="brand-gradient px-5 py-3 rounded-xl">Calculer</button>
          <button type="button" onClick={() => reset()} className="px-5 py-3 rounded-xl border">Réinitialiser</button>
        </div>

        <div className="text-sm text-slate-500">Aperçu: budget {watched.budget}€ • {watched.guests} invités • {watched.city || 'ville'} • {watched.country}</div>
      </form>

      <div>
        {loading && <div className="p-6 text-center">Calcul en cours…</div>}
        {!loading && result && <PlannerSummary result={result} />}
        {!loading && !result && (
          <div className="p-6 text-slate-600">Remplissez le formulaire et cliquez sur "Calculer" pour obtenir une estimation instantanée et des recommandations sur mesure.</div>
        )}
      </div>
    </div>
  )
}
