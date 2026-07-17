import React from 'react'
import { useParams } from 'react-router-dom'
import { ARTICLES } from '../data/blog'

export default function Article(){
  const { slug } = useParams()
  const article = ARTICLES.find(a=> a.slug === slug)
  if(!article) return <div className="p-6">Article non trouvé</div>

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="h1 text-3xl">{article.title}</h1>
      <div className="mt-6 text-gray-700">{article.excerpt}</div>
      <div className="mt-6 text-sm text-gray-500">Publié le {article.date}</div>
    </div>
  )
}
