import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Slider({items}){
  const [index, setIndex] = useState(0)
  const prev = ()=> setIndex((i)=> (i-1+items.length)%items.length)
  const next = ()=> setIndex((i)=> (i+1)%items.length)

  if(!items?.length) return null
  const current = items[index]
  return (
    <div className="relative">
      <motion.div key={current.id} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="rounded-xl overflow-hidden">
        <div className="w-full h-56 bg-gray-200 flex items-center justify-center">{current.quote || current.title}</div>
      </motion.div>

      <div className="absolute left-3 top-1/2 -translate-y-1/2">
        <button onClick={prev} className="p-2 bg-white rounded-full shadow">‹</button>
      </div>
      <div className="absolute right-3 top-1/2 -translate-y-1/2">
        <button onClick={next} className="p-2 bg-white rounded-full shadow">›</button>
      </div>
    </div>
  )
}
