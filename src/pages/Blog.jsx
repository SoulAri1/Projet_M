import React from 'react'
import { ARTICLES } from '../data/blog'
import BlogCard from '../components/BlogCard'

export default function Blog(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="h1 text-3xl mb-6">Blog</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {ARTICLES.map(a=> <BlogCard key={a.id} a={a} />)}
      </div>
    </div>
  )
}
