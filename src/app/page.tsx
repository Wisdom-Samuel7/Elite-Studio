'use client'

import { Footer } from '@/component/footer'
import Testimonials from '@/component/testimonials'
import { Timeline } from '@/component/timeline'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

// const images = [
//   'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=80',
//   'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1200&q=80',
//   'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&w=1200&q=80',
// ]

const images = [
   
  '/images/bead1.jpg',
  '/images/bead2.png',
  // '/dress/bead3.png',
   '/images/bead4.png',
   '/images/bead5.jpg',
   '/images/bead6.jpg',
   '/images/bead7.jpg',
]
export default function HomePage() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 2400)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-white px-6 md:px-24 lg:px-40 xl:px-56 py-12">
      <section className="grid md:grid-cols-2 gap-14 items-center">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="uppercase tracking-widest text-sm text-gray-500">
            Handcrafted Luxury
          </span>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mt-4 mb-6">
            Elegant Beads & Fashion Accessories
          </h1>
          <p className="text-lg text-gray-700 mb-10 max-w-xl">
            Discover premium handcrafted beads and jewelry pieces designed to elevate your everyday and special-occasion style.
          </p>
          <div className="flex gap-4">
            <button className="bg-gray-900 text-white px-7 py-3 rounded-xl hover:bg-gray-800 transition">
             <a href="/collections"> Shop Collection</a>
            </button>
            <button className="border border-gray-300 px-7 py-3 rounded-xl hover:bg-gray-100 transition text-slate-700 font-extrabold">
                <a href="/lookbook"> View Lookbook </a> 
            </button>
          </div>
        </motion.div>

        {/* Right Image Slider */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[360px] md:h-[420px] xl:h-[380px] w-full rounded-3xl overflow-hidden shadow-2xl"
        >
          {images.map((src, i) => (
            <motion.div
              key={src}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: i === index ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={src}
                alt="Beading fashion"
                fill
                className="object-cover"
                priority={i === 0}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Value Section */}
      <section className="mt-28 grid md:grid-cols-3 gap-10 text-center">
        {["Handmade Craftsmanship", "Premium Materials", "Worldwide Delivery"].map((item) => (
          <motion.div
            key={item}
            whileHover={{ y: -6 }}
            className="p-8 rounded-2xl bg-blue-200 shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-3 text-slate-800">{item}</h3>
            <p className="text-gray-600">
              Designed with attention to detail and crafted to reflect timeless elegance and modern fashion.
            </p>
          </motion.div>
        ))}
      </section>

{/* Craftsmanship & Process SECTION 2*/ }
<section className="mt-36 relative overflow-hidden">
  {/* soft gradient bubbles */}
  <div className="absolute top-10 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-gray-100 to-transparent blur-2xl opacity-70 animate-pulse" />
  <div className="absolute bottom-10 right-32 w-48 h-48 rounded-full bg-gradient-to-br from-gray-100 to-transparent blur-3xl opacity-60" />

  {/* floating icons */}
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 6, repeat: Infinity }}
    className="absolute left-10 bottom-24 text-gray-300 text-2xl"
  >
    ✦
  </motion.div>

  <motion.div
    animate={{ y: [0, 16, 0] }}
    transition={{ duration: 7, repeat: Infinity }}
    className="absolute right-16 top-24 text-gray-300 text-2xl"
  >
    ❖
  </motion.div>

  <div className="relative grid md:grid-cols-2 gap-20 items-center">
    {/* Text content */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <span className="uppercase tracking-widest text-sm text-gray-500">
        Our Craft
      </span>

      <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 mt-4 mb-6">
        Crafted with Purpose & Passion
      </h2>

      <p className="text-gray-700 max-w-xl">
        Every bead is thoughtfully selected and hand-assembled by skilled
        artisans. Our process blends heritage craftsmanship with contemporary
        design for timeless elegance.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
        {[
          "Handpicked Beads",
          "Artisan Crafted",
          "Quality Checked",
          "Sustainable Style",
        ].map((step) => (
          <motion.div
            key={step}
            whileHover={{ y: -6 }}
            className="p-5 rounded-xl bg-white shadow-sm border border-gray-100"
          >
            <span className="text-sm font-semibold text-gray-900">
              {step}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative h-[420px] rounded-3xl overflow-hidden"
    >
      <Image
        src="/images/bio.jpg"
        alt="Beading craftsmanship"
        fill
        className="object-cover rounded-full"
      />
    </motion.div>
  </div>
</section>

{/* WhatsApp Contact */}
<section className="mt-36 relative overflow-hidden">
  {/* soft gradient bubbles */}
  <div className="absolute top-12 left-24 w-32 h-32 rounded-full bg-gradient-to-br from-gray-100 to-transparent blur-2xl opacity-70 animate-pulse" />
  <div className="absolute bottom-12 right-28 w-48 h-48 rounded-full bg-gradient-to-br from-gray-100 to-transparent blur-3xl opacity-60" />

  {/* floating icons */}
  <motion.div
    animate={{ y: [0, -14, 0] }}
    transition={{ duration: 6, repeat: Infinity }}
    className="absolute left-14 bottom-28 text-gray-300 text-2xl"
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

  <div className="relative grid md:grid-cols-2 gap-20 items-center">
    {/* Text */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <span className="uppercase tracking-widest text-sm text-gray-500">
        Contact
      </span>

      <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 mt-4 mb-6">
        Custom Beading & Private Orders
      </h2>

      <p className="text-gray-700 max-w-xl mb-10">
        Looking for a bespoke beading piece or planning a bulk order? Speak
        directly with our team and get quick, personalized assistance.
      </p>

      <a
        href="https://wa.me/2347035038812"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-gray-900 text-white px-9 py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition"
      >
        <span>Chat on WhatsApp</span>
        <span className="text-xl">💬</span>
      </a>
    </motion.div>

    {/* Visual / Icon side */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative h-[380px] rounded-3xl bg-gray-50 border border-gray-100 flex items-center justify-center shadow-sm"
    >
      <span className="text-6xl">💎</span>
    </motion.div>
  </div>
</section>

<Testimonials/>
<Timeline/>
<Footer/>
    </main>
  )
}
