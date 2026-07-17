import React, { useEffect, useState } from 'react'

function MetricCard({ label, value, suffix }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const startTime = performance.now()
    const duration = 1200

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  }, [value])

  return (
    <div className="rounded-[24px] border border-slate-200/70 bg-white/80 p-5 text-center shadow-soft">
      <div className="text-3xl font-semibold text-[var(--mauve)]">{count}{suffix}</div>
      <div className="mt-2 text-sm text-slate-600">{label}</div>
    </div>
  )
}

const metrics = [
  { label: 'Mariages créés', value: 180, suffix: '+' },
  { label: 'Satisfaction', value: 98, suffix: '%' },
  { label: 'Villes couvertes', value: 24, suffix: '' },
  { label: 'Réponses en 24h', value: 100, suffix: '%' }
]

export default function StatsStrip() {
  return (
    <section className="mt-10 grid gap-4 md:grid-cols-4">
      {metrics.map((item) => (
        <MetricCard key={item.label} label={item.label} value={item.value} suffix={item.suffix} />
      ))}
    </section>
  )
}
