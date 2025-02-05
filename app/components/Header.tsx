'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black bg-opacity-80 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          href="#"
          className="text-2xl font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          AYO
        </motion.a>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition-colors">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-black bg-opacity-90 backdrop-blur-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="py-4 px-6 space-y-4">
            {menuItems.map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block hover:text-purple-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}

