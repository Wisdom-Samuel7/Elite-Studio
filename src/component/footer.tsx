import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
export const Footer = () => {
  return (
    <div>
        {/* Footer Section */}
<footer className="mt-4 relative bg-gray-900 text-white overflow-hidden">
  {/* soft gradient bubbles */}
  <div className="absolute top-10 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-purple-700 to-transparent blur-2xl opacity-50 animate-pulse" />
  <div className="absolute bottom-10 right-28 w-48 h-48 rounded-full bg-gradient-to-br from-pink-700 to-transparent blur-3xl opacity-40 animate-pulse" />

  <div className="relative max-w-7xl mx-auto px-6 md:px-24 lg:px-40 xl:px-56 py-24 grid md:grid-cols-4 gap-12">
    {/* About */}
    <div>
      <h4 className="text-xl font-bold mb-4">Blessed Beading</h4>
      <p className="text-gray-300 max-w-xs">
        Premium handcrafted beads and fashion accessories. Bringing elegance and sophistication to your everyday style.
      </p>
    </div>

    {/* Links */}
    <div>
      <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
      <ul className="space-y-2">
        <li><a href="/collections" className="hover:text-purple-300 transition">Collections</a></li>
        <li><a href="/lookbook" className="hover:text-purple-300 transition">Gallery</a></li>
        <li><a href="#testimonials" className="hover:text-purple-300 transition">Testimonials</a></li>
        {/* <li><a href="#" className="hover:text-purple-300 transition">Contact</a></li> */}
      </ul>
    </div>

    {/* Social */}
    <div>
      <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
      <div className="flex gap-4 text-2xl">
        <a href="#" className="hover:text-purple-300 transition"><FaInstagram className="text-pink-500 text-2xl" /></a>
        {/* <a href="#" className="hover:text-purple-300 transition">🐦</a> */}
        <a href="https://wa.me/2347035038812" className="hover:text-purple-300 transition"><FaWhatsapp className="text-green-500 text-2xl" /></a>
      </div>
    </div>

  </div>

  <div className="text-center text-gray-400 mt-12 pb-6 border-t border-gray-700">
    © {new Date().getFullYear()} All rights reserved.
    <div>designed by <a href="mailto:knowurcrafts@gmail.com" className='font-extrabold text-blue-500'>KnowUrCraft</a></div>
  </div>
</footer>
    </div>
  )
}
