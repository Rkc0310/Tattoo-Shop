import { useState,useEffect } from 'react';
import { useLocation } from "react-router-dom"
import { NavHashLink } from'react-router-hash-link';

const Header = () => {
      const [open, setOpen] =useState(false)

      const location = useLocation()

useEffect(() => {
  setOpen(false)
}, [location])

    return (
        <div>
            <header className="overflow-hidden fixed top-0 z-50 justify-between w-full bg-black/95 border-b border-stone-800 backdrop-blur-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
          
            {/* Logo / Brand */}
            <NavHashLink smooth to="/#home" className="font-cinzel text-xl md:text-2xl font-bold tracking-wide text-red-600 hover:text-red-500 transition-colors"> B2 Artist</NavHashLink>

             {/* Desktop Menu */}
             <div className="font-poppins font-bold hidden md:flex items-center gap-8">
              
              <NavHashLink smooth to="/#home" className="text-stone-300 hover:text-red-500 transition-colors">HOME</NavHashLink>
              
              <NavHashLink to="/portfolio" className="text-stone-300 hover:text-red-500 transition-colors">GALLERY</NavHashLink>

              <NavHashLink to="/#services" className="text-stone-300 hover:text-red-500 transition-colors">FEATURES</NavHashLink>

              <NavHashLink to="/#about" className="text-stone-300 hover:text-red-500 transition-colors">ARTIST</NavHashLink>

              <NavHashLink to="/#contact" className="text-stone-300 hover:text-red-500 transition-colors">CONTACT</NavHashLink>

              <NavHashLink to="/appointment" className="bg-red-600 hover:bg-red-500 text-stone-950 font-semibold px-5 py-2 rounded-lg transition-colors"
              > Book Now </NavHashLink>
            </div>

              {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-red-600" aria-label="Open menu" onClick={()=> setOpen(!open)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {open && (
            <div className='md:hidden bg-black border-t border-zinc-800 text-stone-300 px-6  py-4 flex flex-col gap-6 text-center'>
             
              <NavHashLink to="/#home" className="text-stone-300 hover:text-red-500 transition-colors">HOME</NavHashLink>

              <NavHashLink to="/portfolio" className="text-stone-300 hover:text-red-500 transition-colors">GALLERY</NavHashLink>

              <NavHashLink to="/#services" className="text-stone-300 hover:text-red-500 transition-colors">FEATURES</NavHashLink>

              <NavHashLink to="/#about" className="text-stone-300 hover:text-red-500 transition-colors">ARTIST</NavHashLink>

              
              <NavHashLink to="/#contact" className="text-stone-300 hover:text-red-500 transition-colors">CONTACT</NavHashLink>

              <NavHashLink 
              to="/appointment" className="bg-red-600 hover:bg-red-500 text-stone-950 font-semibold px-5 py-2 rounded-lg transition-colors">
                Book Now
              </NavHashLink>
            </div>
          )}
        </nav>
      </header>
    </div>
    );
}

export default Header;
