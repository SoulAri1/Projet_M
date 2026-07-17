import React from 'react'

export default function Timeline({steps}){
  return (
    <div className="space-y-4">
      {steps.map((s,i)=> (
        <div key={i} className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-full bg-[var(--brand)] text-white flex items-center justify-center">{i+1}</div>
          <div>
            <div className="font-semibold">{s}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
