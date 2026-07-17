import React from 'react'
import GalleryGrid from '../components/GalleryGrid'

export default function Gallery(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="h1 text-3xl mb-6">Galerie</h1>
      <GalleryGrid />
    </div>
  )
}
