/**
 * Layout Component - Wraps all pages with consistent navigation & footer
 * 
 * Props:
 * - children: The page content to render inside the layout
 * 
 * React Router's <Outlet /> renders the child route's component here
 */
import { Outlet, Link } from 'react-router-dom'
import Services from './Services'
import { useState } from 'react'

export default function Layout() {
  const [open, setOpen] =useState(false)
  
  return (
    <div className="min-h-screen flex flex-col text-stone-100">
      {/* ===== NAVBAR ===== */}
      <header className="sticky top-0 z-50 bg-stone-950/95 backdrop-blur-sm border-b border-amber-600/20">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo / Brand */}
            <Link 
              to="/" 
              className="font-cinzel text-xl md:text-2xl font-bold tracking-wide text-amber-500 hover:text-amber-400 transition-colors"
            >
              B2 Artist
            </Link>

            {/* Navigation Links - hidden on mobile, shown on md+ */}
            <div className="font-poppins font-bold hidden md:flex items-center gap-8">
              <Link to="/" className="text-stone-300 hover:text-amber-500 transition-colors">Home</Link>
              <Link to="/portfolio" className="text-stone-300 hover:text-amber-500 transition-colors">Portfolio</Link>
              <Link to="/about" className="text-stone-300 hover:text-amber-500 transition-colors">About</Link>
              <Link to="/contact" className="text-stone-300 hover:text-amber-500 transition-colors">Contact</Link>
              <Link 
                to="/appointment" 
                className="bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold px-5 py-2 rounded-lg transition-colors"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile menu button - we'll add functionality later */}
            <button className="md:hidden p-2 text-amber-500" aria-label="Open menu" onClick={()=> setOpen(!open)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {open && (
            <div className='md:hidden bg-black border-t border-zinc-800  px-6  py-4 flex flex-col gap-6 text-center'>
              <Link to="/">Home</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>

              <button className='bg-amber-500 text-black  py-2 rounded-md'>
                Book Now
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* ===== PAGE CONTENT (Outlet = where child routes render) ===== */}
      <main className="flex-1">
      <Outlet />
      </main>


      {/* ===== FOOTER ===== */}
      <footer className="bg-stone-900 border-t border-amber-600/20 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-stone-400 text-sm">
          <p>© {new Date().getFullYear()}   B2 ARTIST TATTOO SHOP. Created with passion.</p>
        </div>
      </footer>
    </div>
  )
}
