import React from 'react'
import { motion } from 'framer-motion'
import { TEAM } from '../data/team'

export default function TeamSection() {
  return (
    <section className="mt-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand)]">Notre équipe</div>
          <h2 className="h1 text-3xl mt-2">Une équipe discrète, brillante et toujours présente.</h2>
        </div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {TEAM.map((member, index) => (
          <motion.article
            key={member.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="rounded-[24px] border border-slate-200/70 bg-white p-5 shadow-soft"
          >
            <img src={member.avatar} alt={member.name} className="h-56 w-full rounded-2xl object-cover" />
            <div className="mt-4">
              <div className="font-semibold">{member.name}</div>
              <div className="text-sm text-[var(--brand)]">{member.role}</div>
              <p className="mt-3 text-sm text-slate-700">{member.bio}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
