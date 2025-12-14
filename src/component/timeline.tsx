import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
export const Timeline = () => {
  return (
    <div>

       {/* Brand Story Timeline with floating bubbles */}
<section className="mt-36 relative overflow-hidden rounded-3xl p-16 bg-slate-200 ">
  {/* soft gradient bubbles */}
  <div className="absolute top-12 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-purple-200 to-transparent blur-2xl opacity-70 animate-pulse" />
  <div className="absolute bottom-16 right-32 w-48 h-48 rounded-full bg-gradient-to-br from-pink-200 to-transparent blur-3xl opacity-60 animate-pulse" />

  {/* floating icons */}
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 6, repeat: Infinity }}
    className="absolute left-16 bottom-24 text-gray-300 text-2xl"
  >
    ✦
  </motion.div>

  <motion.div
    animate={{ y: [0, 14, 0] }}
    transition={{ duration: 7, repeat: Infinity }}
    className="absolute right-16 top-24 text-gray-300 text-2xl"
  >
    ❖
  </motion.div>

  <div className="relative">
    {/* Section header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-20"
    >
      <span className="uppercase tracking-widest text-sm text-gray-500">
        Our Journey
      </span>
      <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 mt-4 mb-6">
        Brand Story Timeline
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto">
        From our humble beginnings to becoming a trusted name in luxury beading and fashion accessories.
      </p>
    </motion.div>

    {/* Timeline items */}
    <div className="relative max-w-5xl mx-auto">
      <div className="border-l-2 border-gray-200 absolute top-0 left-6 h-full"></div>
      <div className="flex flex-col gap-16">
        {[
          { year: "2018", title: "Founded with Passion", desc: "We started as a small workshop focused on handcrafted beads and unique fashion accessories." },
          { year: "2019", title: "First Collection Launch", desc: "Our first curated collection received national attention and rave reviews for quality and style." },
          { year: "2021", title: "Global Expansion", desc: "We began shipping worldwide, making our pieces accessible to clients across continents." },
          { year: "2023", title: "Luxury Collaborations", desc: "Collaborated with renowned fashion designers to elevate bespoke jewelry experiences." },
        ].map((item, idx) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex items-start gap-6 md:gap-12"
          >
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-gray-900 rounded-full z-10 relative"></div>
              {idx !== 3 && <div className="flex-1 w-0.5 bg-gray-200"></div>}
            </div>

            <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900">{item.year}</h4>
              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>


    </div>
  )
}
