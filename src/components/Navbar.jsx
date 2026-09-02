import { Menu } from 'lucide-react'

const navLinks = [
  { name: 'Planes', id: 'planes' },
  { name: 'Ventajas', id: 'ventajas' },
  { name: 'Cómo Funciona', id: 'pasos' },
  { name: 'Testimonios', id: 'testimonios' }
]

const Navbar = () => {
  return (
    <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      {/* Logo */}
      <a href="/" className="text-2xl font-bold text-[#212832] tracking-tight" aria-label="4S CLIMA Home">
        4S CLIMA
      </a>

      {/* Links */}
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

      {/* Right side */}
      <div className="hidden md:flex items-center gap-6">
        <button className="btn-signup" tabIndex={0} aria-label="Solicitar Presupuesto">
          Solicitar Presupuesto
        </button>
      </div>

      {/* Mobile hamburger */}
      <button className="md:hidden text-[#212832]" tabIndex={0} aria-label="Open menu">
        <Menu className="w-6 h-6" />
      </button>
    </nav>
  )
}

export default Navbar
