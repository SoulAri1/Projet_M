import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ARTICLES } from '../data/blog'

export default function Article() {
  const { slug } = useParams()
  const article = ARTICLES.find((a) => a.slug === slug)

  if (!article) return <div className="p-6">Article non trouvé</div>

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="rounded-[28px] bg-white/80 p-8 shadow-soft">
        <div className="text-sm uppercase tracking-[0.25em] text-[var(--brand)]">Blog</div>
        <h1 className="h1 text-3xl mt-2">{article.title}</h1>
        <div className="mt-3 text-slate-600">{article.excerpt}</div>
        <div className="mt-6 text-sm text-slate-500">Publié le {article.date}</div>
      </div>
      <div className="mt-8 bg-white rounded-2xl shadow-soft overflow-hidden">
        <img src={article.image} alt={article.title} className="w-full h-64 object-cover" />
        <div className="p-8 text-slate-700 leading-8">{article.content}</div>
      </div>
      <Link to="/blog" className="inline-flex mt-8 text-[var(--brand)]">← Retour au blog</Link>
    </div>
  )
}
