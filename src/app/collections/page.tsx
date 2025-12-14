'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Timeline } from '@/component/timeline'
import { Footer } from '@/component/footer'

const products = [

  { id: 4, category: 'Beading', name: 'Elegant Beaded Material', img: '/images/bead5.jpg' },
  { id: 5, category: 'Beading', name: 'Elegant Beading Style', img: '/images/bead7.jpg' },

  { id: 8, category: 'Beading', name: 'Beading Trainings', img:'/images/bead2.png' },
  { id: 9, category: 'Beading', name: 'Beading Collaborations', img: '/images/bead3.png' },
  { id: 10, category: 'Beading', name: 'Tutorials', img: '/images/bead4.png' },


  { id: 11, category: 'Jewelry', name: '', img: '/images/a.jpg' },
  { id: 12, category: 'Jewelry', name: '', img: '/images/b.jpg' },
  { id: 13, category: 'Jewelry', name: '', img: '/images/c.jpg' },
  { id: 14, category: 'Wigs', name: '', img: '/images/d.jpg' },
  { id: 15, category: 'Jewelry', name: '', img: '/images/e.jpg' },
  { id: 16, category: 'Wigs', name: '', img: '/images/f.jpg' },
  { id: 17, category: 'Jewelry', name: '', img: '/images/g.jpg' },
  { id: 18, category: 'Wigs', name: '', img: '/images/h.jpg' },
  { id: 19, category: 'Wigs', name: '', img: '/images/i.jpg' },
  { id: 20, category: 'Jewelry', name: '', img: '/images/j.jpg' },
  { id: 21, category: '', name: '', img: '/images/k.jpg' },
  { id: 22, category: 'Jewelry', name: '', img: '/images/l.jpg' },
  { id: 23, category: 'Jewelry', name: '', img: '/images/m.jpg' },
  { id: 24, category: 'Jewelry', name: '', img: '/images/n.jpg' },
  { id: 25, category: 'Wigs', name: '', img: '/images/o.jpg' },
  { id: 26, category: 'Wigs', name: '', img: '/images/p.jpg' },
  { id: 27, category: 'Wigs', name: '', img: '/images/q.jpg' },
  { id: 28, category: 'Necklace', name: '', img: '/images/r.jpg' },
  { id: 29, category: 'Necklace', name: '', img: '/images/s.jpg' },

  { id: 30, category: 'Jewelry', name: '', img: '/images/t.jpg' },
  { id: 31, category: 'Jewelry', name: '', img: '/images/u.jpg' },
  { id: 32, category: 'Wigs', name: '', img: '/images/v.jpg' },
  { id: 33, category: 'Wigs', name: '', img: '/images/w.jpg' },
  { id: 34, category: 'Wigs', name: '', img: '/images/x.jpg' },
  { id: 35, category: 'Wigs', name: '', img: '/images/y.jpg' },
  { id: 36, category: 'Jewelry', name: '', img: '/images/z.jpg' },

  { id: 37, category: 'Jewelry', name: '', img: '/images/ab.jpg' },
  { id: 38, category: 'Jewelry', name: '', img: '/images/ac.jpg' },
  { id: 39, category: 'Wigs', name: '', img: '/images/ad.jpg' },
  { id: 40, category: 'Jewelry', name: '', img: '/images/ae.jpg' },
  { id: 41, category: 'Jewelry', name: '', img: '/images/af.jpg' },
  { id: 42, category: 'Jewelry', name: '', img: '/images/ag.jpg' },
  { id: 43, category: 'Jewelry', name: '', img: '/images/ah.jpg' },
  { id: 44, category: 'Wigs', name: '', img: '/images/ai.jpg' },
  { id: 45, category: 'Wigs', name: '', img: '/images/aj.jpg' },
  { id: 46, category: 'Jewelry', name: '', img: '/images/ak.jpg' },
  { id: 47, category: 'Jewelry', name: '', img: '/images/al.jpg' },
  { id: 48, category: 'Wigs', name: '', img: '/images/am.jpg' },
  { id: 49, category: 'Beading', name: '', img: '/images/an.jpg' },
  { id: 50, category: 'Wigs', name: '', img: '/images/ao.jpg' },
  { id: 51, category: 'Wigs', name: '', img: '/images/ap.jpg' },
  { id: 52, category: 'Beading', name: '', img: '/images/aq.jpg' },
  { id: 53, category: 'Wigs', name: '', img: '/images/ar.jpg' },
  { id: 54, category: 'Wigs', name: '', img: '/images/as.jpg' },
  { id: 55, category: 'Wigs', name: '', img: '/images/at.jpg' },
  { id: 56, category: 'Jewelry', name: '', img: '/images/au.jpg' },
  { id: 57, category: 'Jewelry', name: '', img: '/images/av.jpg' },
  { id: 58, category: 'Jewelry', name: '', img: '/images/aw.jpg' },
  { id: 59, category: 'Jewelry', name: '', img: '/images/ax.jpg' },
  { id: 60, category: 'Wigs', name: '', img: '/images/ay.jpg' },
  { id: 61, category: 'Wigs', name: '', img: '/images/az.jpg' },

]

export default function CollectionPage() {
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'Wigs', 'Beading', 'Jewelry']

  const filteredProducts = filter === 'All' ? products : products.filter(p => p.category === filter)

  return (
    <main className="min-h-screen bg-white px-6 md:px-24 lg:px-40 xl:px-56 py-24">
      {/* Header */}
      <section className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 mb-4"
        >
          Our Collection
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg text-gray-700 max-w-2xl mx-auto"
        >
          Explore our wide range of luxury wigs, handcrafted beading designs, and exquisite jewelry.
        </motion.p>
      </section>

      {/* Filter Buttons */}
      <section className="mb-12 flex justify-center gap-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-3 rounded-xl border transition ${filter === cat ? 'bg-gray-900 text-white border-gray-900' : 'bg-gray-50 text-gray-900 border-gray-300 hover:bg-gray-100'}`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Product Grid */}
      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gray-50 rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative h-64 w-full">
              <Image src={product.img} alt={product.name} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-500">Category: {product.category}</p>
            </div>
          </motion.div>
        ))}
      </section>

      <Timeline/>
      <Footer/>
    </main>
  )
}