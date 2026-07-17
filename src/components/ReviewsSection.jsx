import React, { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { TESTIMONIALS } from '../data/testimonials'
import { getAgency } from '../services/agencyService'

export default function ReviewsSection() {
  const { register, handleSubmit, reset } = useForm()
  const [reviews, setReviews] = useState(TESTIMONIALS)
  const AGENCY = getAgency()
  const [message, setMessage] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('ever-after-reviews')
    if (saved) {
      try {
        setReviews(JSON.parse(saved))
      } catch {
        setReviews(TESTIMONIALS)
      }
    }
  }, [])

  const onSubmit = (data) => {
    const entry = {
      id: Date.now().toString(),
      quote: data.comment,
      author: data.name,
      place: data.city,
      rating: Number(data.rating)
    }
    const updated = [entry, ...reviews]
    setReviews(updated)
    localStorage.setItem('ever-after-reviews', JSON.stringify(updated))
    setMessage('Merci ! Votre avis a été enregistré et affiché ci-dessous.')
    reset()
  }

  const average = useMemo(() => {
    if (!reviews.length) return 0
    return (reviews.reduce((sum, item) => sum + (item.rating || 5), 0) / reviews.length).toFixed(1)
  }, [reviews])

  return (
    <div className="space-y-6">
      <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-soft">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="text-xs uppercase tracking-[0.23em] text-[var(--brand)]">Avis clients</div>
            <h3 className="font-serif text-2xl mt-2">Ce que nos couples racontent</h3>
            <p className="text-slate-600 mt-2">{AGENCY.reviewPrompt}</p>
          </div>
          <div className="rounded-2xl bg-[var(--rose-soft)] px-4 py-3 text-center">
                      <div className="text-2xl font-semibold text-[var(--mauve)]">{average}/5</div>
            <div className="text-sm text-slate-600">note moyenne</div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
        <form onSubmit={handleSubmit(onSubmit)} className="rounded-[24px] bg-[var(--rose-soft)] p-6 shadow-soft">
          <h4 className="font-semibold">Laisser un avis</h4>
          <div className="mt-4 space-y-3">
            <input {...register('name', { required: true })} placeholder="Votre prénom" className="w-full rounded-xl border border-slate-200 p-3" />
            <input {...register('city', { required: true })} placeholder="Votre ville" className="w-full rounded-xl border border-slate-200 p-3" />
            <select {...register('rating', { required: true })} className="w-full rounded-xl border border-slate-200 p-3">
              <option value="5">5/5 — Excellent</option>
              <option value="4">4/5 — Très bien</option>
              <option value="3">3/5 — Correct</option>
            </select>
            <textarea {...register('comment', { required: true })} rows={4} placeholder="Partagez votre expérience" className="w-full rounded-xl border border-slate-200 p-3" />
            <button type="submit" className="w-full rounded-xl bg-[var(--mauve)] text-white px-5 py-3">Publier mon avis</button>
          </div>
          {message && <div className="mt-3 text-sm text-emerald-700">{message}</div>}
        </form>

        <div className="space-y-4">
          {reviews.map((item) => (
            <div key={item.id} className="rounded-[24px] bg-white p-5 shadow-soft">
              <div className="flex justify-between items-center">
                <div className="font-semibold">{item.author}</div>
                <div className="text-[var(--brand)]">{'★'.repeat(item.rating || 5)}</div>
              </div>
              <div className="text-sm text-slate-500 mt-1">{item.place}</div>
              <p className="mt-3 text-slate-700">“{item.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
