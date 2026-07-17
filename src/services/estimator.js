/**
 * estimator.js
 * Pure function that computes a wedding estimate and recommendations
 */

function clamp(v,min,max){ return Math.max(min, Math.min(max, v)) }

export default function estimateWedding({budget=20000, guests=80, date='', city='Paris', type='Mariage', style='Classic'}){
  // city index: larger city => higher venue cost
  const cityIndex = (c)=> {
    const big = ['Paris','Lyon','Marseille']
    if(big.includes((c||'').trim())) return 1.25
    return 1.0
  }
  const season = (()=>{
    if(!date) return 'mid'
    const m = new Date(date).getMonth()+1
    if([6,7,8,9].includes(m)) return 'high'
    if([11,12,1,2].includes(m)) return 'low'
    return 'mid'
  })()

  const styleMultiplier = { Classic:1.0, Boho:0.95, Modern:1.05, Romantic:1.1 }[style] || 1.0
  const typeMultiplier = { Mariage:1.0, Elopement:0.6, Engagement:0.5, 'Vow Renewal':0.7 }[type] || 1.0

  const basePerGuest = clamp(35 * cityIndex(city) * styleMultiplier * typeMultiplier, 20, 250)
  const perGuestCost = basePerGuest

  const venueBase = (()=>{
    const base = 3000 * cityIndex(city)
    if(season==='high') return base * 1.2
    if(season==='low') return base * 0.9
    return base
  })()

  // vendors: photography, catering (per guest), decoration, coordination
  const photography = 2500 * styleMultiplier
  const catering = perGuestCost * guests * 0.6
  const decoration = 1500 * styleMultiplier
  const coordination = 1200

  let subtotal = perGuestCost * guests + venueBase + photography + decoration + coordination
  const contingency = Math.max(300, subtotal * 0.07)
  const total = Math.round(subtotal + contingency)

  // recommendations (simple rule-based)
  const recs = []
  recs.push('Coordinateur(trice) Jour J (fortement recommandé)')
  if(guests > 50) recs.push('Traiteur haut de gamme')
  else recs.push('Station de cocktail premium')
  recs.push('Photographe professionnel')
  if(style==='Romantic' || style==='Classic') recs.push('Décoration florale complète')
  if(budget > 30000) recs.push('Live band / DJ premium')

  // timeline simplified depending on months to date
  const monthsTo = (()=>{ if(!date) return 9; const d = new Date(date); const now = new Date(); const diff = (d - now)/(1000*60*60*24*30); return Math.max(0, Math.round(diff)) })()
  const timeline = []
  if(monthsTo >= 12){
    timeline.push('Réserver le lieu (12+ mois)')
    timeline.push('Engager traiteur & photographe (10-12 mois)')
    timeline.push('Envoyer save-the-date (8-10 mois)')
  } else if(monthsTo >= 6){
    timeline.push('Choisir le traiteur & photographe (6-8 mois)')
    timeline.push('Finaliser invitations & hébergements (4-6 mois)')
  } else if(monthsTo > 0){
    timeline.push('Confirmer prestataires et planning détaillé (1-3 mois)')
    timeline.push('Détails logistiques et répétition (2-4 semaines)')
  } else {
    timeline.push('Planification urgente — prioriser lieu, traiteur, et coordination immédiate')
  }

  return {
    perGuest: perGuestCost,
    venue: Math.round(venueBase),
    photography: Math.round(photography),
    decoration: Math.round(decoration),
    coordination: Math.round(coordination),
    contingency: Math.round(contingency),
    total,
    recommendations: recs,
    timeline
  }
}
