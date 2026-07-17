import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Planner from './pages/Planner'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Gallery from './pages/Gallery'
import Team from './pages/Team'
import FAQ from './pages/FAQ'
import Blog from './pages/Blog'
import Article from './pages/Article'
import Contact from './pages/Contact'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:block p-2">Aller au contenu</a>
      <Navbar />
      <main id="main" className="flex-1">
        <Suspense fallback={<div className="p-8">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/services/:slug" element={<ServiceDetail/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/team" element={<Team/>} />
            <Route path="/why" element={<FAQ/>} />
            <Route path="/faq" element={<FAQ/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/blog/:slug" element={<Article/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/planner" element={<Planner/>} />
            <Route path="*" element={<Home/>} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
