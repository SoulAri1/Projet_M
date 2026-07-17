import React from 'react'
import { useMotionValue, useSpring, useTransform, motion } from 'framer-motion'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

export default function Counter({ end, label }) {
  const reduced = usePrefersReducedMotion()
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 120, damping: 20 })
  const display = useTransform(spring, (v) => Math.round(v).toLocaleString())

  React.useEffect(() => {
    if (reduced) {
      mv.set(end)
    } else {
      mv.set(0)
      const raf = requestAnimationFrame(() => mv.set(end))
      return () => { try { cancelAnimationFrame(raf) } catch (e) {} }
    }
  }, [end, mv, reduced])

  return (
    <div className="text-center">
      <motion.div className="text-3xl font-serif" aria-live="polite">{display}</motion.div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  )
}
