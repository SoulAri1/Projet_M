import React, { useState } from 'react'
import { FAQ } from '../data/faq'

export default function FAQAccordion(){
  const [openIndex, setOpenIndex] = useState(null)
  return (
    <div className="space-y-4">
      {FAQ.map((f,i)=> (
        <div key={i} className="bg-white p-4 rounded-xl shadow-soft">
          <button className="w-full text-left flex justify-between items-center" onClick={()=> setOpenIndex(openIndex===i? null : i)}>
            <div className="font-semibold">{f.q}</div>
            <div className="text-gray-500">{openIndex===i ? '-' : '+'}</div>
          </button>
          {openIndex===i && <div className="mt-2 text-sm text-gray-700">{f.a}</div>}
        </div>
      ))}
    </div>
  )
}
