'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const Testimonials = () => {
  return (
 <div id='testimonials'>
    {/* Testimonials */}
<section className="mt-36 relative overflow-hidden bg-blue-200 rounded-3xl py-16 px-4">
  {/* soft gradient bubbles */}
  <div className="absolute top-14 left-24 w-32 h-32 rounded-full bg-gradient-to-br from-gray-100 to-transparent blur-2xl opacity-70 animate-pulse" />
  <div className="absolute bottom-16 right-32 w-48 h-48 rounded-full bg-gradient-to-br from-gray-100 to-transparent blur-3xl opacity-60" />

  {/* floating icons */}
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 6, repeat: Infinity }}
    className="absolute left-16 bottom-28 text-gray-300 text-2xl"
  >
    ✦
  </motion.div>

  <motion.div
    animate={{ y: [0, 14, 0] }}
    transition={{ duration: 7, repeat: Infinity }}
    className="absolute right-20 top-24 text-gray-300 text-2xl"
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
        Testimonials
      </span>
      <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 mt-4 mb-6">
        Loved by Our Clients
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto">
        Real experiences from customers who trust our craftsmanship and attention to detail.
      </p>
    </motion.div>

    {/* Testimonials grid */}
    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          name: "Amaka O.",
          role: "Bridal Client",
          text:
            "The beads were absolutely stunning. Every detail felt luxurious and well-crafted. I received so many compliments on my wedding day.",
        },
        {
          name: "Tunde A.",
          role: "Fashion Stylist",
          text:
            "Their craftsmanship is unmatched. I’ve used their pieces for multiple shoots and they always elevate the look instantly.",
        },
        {
          name: "Zainab M.",
          role: "Boutique Owner",
          text:
            "Reliable, elegant, and professional. My customers love the quality and the uniqueness of each piece.",
        },
      ].map((item) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -6 }}
          className="relative p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm"
        >
          <p className="text-gray-700 mb-6 leading-relaxed">
            “{item.text}”
          </p>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">
              {item.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

 </div>

  )
}

export default Testimonials
