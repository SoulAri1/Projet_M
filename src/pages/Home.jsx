import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import StatsStrip from '../components/StatsStrip'
import PremiumServicesSection from '../components/PremiumServicesSection'
import GalleryGrid from '../components/GalleryGrid'
import WhyChooseUs from '../components/WhyChooseUs'
import TeamSection from '../components/TeamSection'
import ReviewsSection from '../components/ReviewsSection'
import ProcessTimeline from '../components/ProcessTimeline'
import ThemePreview from '../components/ThemePreview'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8 md:py-12">
      <Hero />
      <StatsStrip />
      <ThemePreview />
      <PremiumServicesSection />

      <section className="mt-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand)]">Galerie</div>
            <h2 className="h1 text-3xl mt-2">Des ambiances raffinées, visibles en un instant.</h2>
          </div>
          <Link to="/gallery" className="hidden md:inline-flex text-[var(--brand)]">Voir toute la galerie</Link>
        </div>
        <div className="mt-6">
          <GalleryGrid />
        </div>
      </section>

      <WhyChooseUs />
      <ProcessTimeline />
      <TeamSection />
      <div className="mt-16">
        <ReviewsSection />
      </div>

      <section className="mt-16 rounded-[32px] bg-[var(--brand)] p-8 text-white shadow-soft md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--rose)]">Prêt à rêver</div>
            <h2 className="h1 text-3xl mt-2">Construisons votre mariage de rêve, en bleu royal et en douceur.</h2>
            <p className="mt-3 max-w-2xl text-sm text-blue-50">Du concept à la coordination finale, nous accompagnons votre événement avec élégance, stratégie et une touche de luxe premium.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/planner" className="rounded-full bg-white px-5 py-3 text-[var(--brand)] font-semibold">Essayer le planner</Link>
            <Link to="/contact" className="rounded-full border border-white/60 px-5 py-3">Réserver une consultation</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
