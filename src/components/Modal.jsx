import React, { useEffect } from 'react'

export default function Modal({ children, open, onClose }) {
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape' && onClose) onClose() }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null
  return (
    <div className="fixed inset-0 bg-black/45 flex items-center justify-center z-50 p-4" role="dialog" aria-modal="true">
      <div className="bg-white rounded-2xl p-6 max-w-3xl w-full shadow-2xl relative">
        <button type="button" onClick={onClose} className="absolute top-4 right-4 text-gray-500" aria-label="Fermer">✕</button>
        {children}
      </div>
    </div>
  )
}
