'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '/work' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo with animation */}
          <Link 
            href="/" 
            className="text-2xl font-bold text-gray-800 dark:text-white relative group"
          >
            <span className="relative z-10">Rida Syed</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-rose-500 dark:bg-rose-400 rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href} 
                    className="relative text-gray-800 dark:text-gray-200 hover:text-rose-500 dark:hover:text-rose-400 transition-colors duration-300 group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-500 dark:bg-rose-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile menu button with animation */}
          <button 
            className="md:hidden text-gray-800 dark:text-gray-200 relative w-8 h-8 focus:outline-none"
            onClick={toggleMenu}
          >
            <span className={`absolute left-0 w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-1/2 -translate-y-1/2' : 'top-1'}`}></span>
            <span className={`absolute left-0 w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'top-1/2 -translate-y-1/2'}`}></span>
            <span className={`absolute left-0 w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-1/2 -translate-y-1/2' : 'bottom-1'}`}></span>
          </button>
        </div>
        
        {/* Mobile Menu with animation */}
        <div className={`bg-gray-800 md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 pt-4' : 'max-h-0'}`}>
          <ul className="flex flex-col space-y-4 pb-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link 
                  href={item.href} 
                  className="block py-2  text-gray-800 dark:text-gray-200 hover:text-rose-500 dark:hover:text-rose-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}