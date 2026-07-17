import React from 'react'
import { ARTICLES } from '../data/blog'
import BlogCard from '../components/BlogCard'

export default function Blog() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="rounded-[28px] bg-white/80 p-8 shadow-soft">
        <h1 className="h1 text-3xl">Blog</h1>
        <p className="mt-3 text-slate-600">Des idées, des conseils et des inspirations pour préparer votre journée avec style.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {ARTICLES.map((a) => <BlogCard key={a.id} a={a} />)}
      </div>
    </div>
  )
}
