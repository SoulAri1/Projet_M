import React, { useEffect, useState } from 'react'

export default function Counter({end, label}){
  const [n, setN] = useState(0)
  useEffect(()=>{
    let raf
    const dur = 900
    const start = performance.now()
    function step(t){
      const p = Math.min(1,(t-start)/dur)
      setN(Math.round(p*end))
      if(p<1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return ()=> cancelAnimationFrame(raf)
  },[end])
  return (
    <div className="text-center">
      <div className="text-3xl font-serif">{n.toLocaleString()}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  )
}
