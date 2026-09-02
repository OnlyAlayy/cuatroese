import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Planes', id: 'planes' },
  { name: 'Ventajas', id: 'ventajas' },
  { name: 'Cómo Funciona', id: 'pasos' },
  { name: 'Testimonios', id: 'testimonios' }
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative z-50">
      {/* Logo */}
      <a href="/" className="text-2xl font-bold text-[#212832] tracking-tight" aria-label="4S CLIMA Home">
        4S CLIMA
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="nav-link"
            tabIndex={0}
            aria-label={link.name}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Desktop Right side CTA */}
      <div className="hidden md:flex items-center gap-6">
        <a href="https://wa.me/541112345678" target="_blank" rel="noreferrer" className="btn-signup" tabIndex={0} aria-label="Solicitar Presupuesto">
          Solicitar Presupuesto
        </a>
      </div>

      {/* Mobile hamburger button */}
      <button 
        className="md:hidden text-[#212832] z-50" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        tabIndex={0} 
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-bold text-[#212832] hover:text-[#DF6951] transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a 
          href="https://wa.me/541112345678" 
          target="_blank" 
          rel="noreferrer"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-4 px-8 py-4 bg-[#DF6951] text-white rounded-[10px] font-bold text-lg shadow-lg"
        >
          Solicitar Presupuesto
        </a>
      </div>
    </nav>
  )
}

export default Navbar
