import React, { useEffect } from 'react'

export default function Modal({children, open, onClose}){
  useEffect(()=>{
    function onKey(e){ if(e.key==='Escape') onClose() }
    if(open) document.addEventListener('keydown', onKey)
    return ()=> document.removeEventListener('keydown', onKey)
  },[open,onClose])

  if(!open) return null
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" role="dialog" aria-modal="true">
      <div className="bg-white rounded-xl p-6 max-w-3xl w-full">{children}</div>
    </div>
  )
}
