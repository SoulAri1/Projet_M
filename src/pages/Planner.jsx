import React from 'react'
import PlannerForm from '../components/PlannerForm'

export default function Planner(){
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="h1 text-3xl mb-6">Wedding Planner Intelligent</h1>
      <p className="text-gray-600 mb-6">Obtenez une estimation instantanée, des recommandations et un planning simplifié.</p>
      <div className="bg-white p-6 rounded-xl shadow-soft">
        <PlannerForm />
      </div>
    </div>
  )
}
