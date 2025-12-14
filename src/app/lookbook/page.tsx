'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const lookbookImages = [
  '/images/a.jpg','/images/b.jpg','/images/c.jpg','/images/d.jpg','/images/e.jpg',
  '/images/f.jpg','/images/g.jpg','/images/h.jpg','/images/i.jpg','/images/j.jpg',
  '/images/k.jpg','/images/l.jpg','/images/m.jpg','/images/n.jpg','/images/o.jpg',
  '/images/p.jpg','/images/q.jpg','/images/r.jpg','/images/s.jpg','/images/t.jpg',
  '/images/u.jpg','/images/v.jpg','/images/w.jpg','/images/x.jpg','/images/y.jpg',
  '/images/z.jpg','/images/ab.jpg','/images/ac.jpg','/images/ad.jpg','/images/ae.jpg',
  '/images/af.jpg','/images/ag.jpg','/images/ah.jpg','/images/ai.jpg','/images/aj.jpg',
  '/images/ak.jpg','/images/al.jpg','/images/am.jpg','/images/an.jpg','/images/ao.jpg',
  '/images/ap.jpg','/images/aq.jpg','/images/ar.jpg','/images/as.jpg','/images/at.jpg',
  '/images/au.jpg','/images/av.jpg','/images/aw.jpg','/images/ax.jpg','/images/ay.jpg',
  '/images/az.jpg',
]

export default function LookbookPage() {
  const [index, setIndex] = useState(0)

  // Auto-slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % lookbookImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-white px-6 md:px-24 lg:px-40 xl:px-56 py-24">
      
      {/* ================= HEADER ================= */}
      <section className="text-center mb-16 relative">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 mb-4"
        >
          Fashion Lookbook
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg text-gray-700 max-w-2xl mx-auto"
        >
          Explore our curated collection of fashion pieces with elegant and stylish presentation.
        </motion.p>

        {/* Floating icons */}
        {['✦', '❖', '✧', '★'].map((icon, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -20, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 5 + i, repeat: Infinity }}
            className="absolute text-3xl text-gray-300"
            style={{ top: `${10 + i * 15}%`, left: `${20 + i * 15}%` }}
          >
            {icon}
          </motion.div>
        ))}
      </section>

      {/* ================= SLIDER ================= */}
      <section className="relative h-[400px] md:h-[500px] xl:h-[550px] rounded-3xl overflow-hidden shadow-2xl mb-16">
        {lookbookImages.map((src, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={src}
              alt={`Lookbook ${i + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </section>

      {/* ================= GRID ================= */}
      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {lookbookImages.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.05 }}
            className="relative h-80 w-full rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <Image
              src={src}
              alt={`Lookbook ${i + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </section>
    </main>
  )
}
