import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full bg-[#FAFAFA] pt-24 pb-12 mt-20 relative overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#DF6951] opacity-5 rounded-tl-[100%] -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-[#181E4B]">4S CLIMA</h3>
            <p className="text-[#5E6282] text-sm leading-relaxed">
              Mantenimiento profesional de calefacción y refrigeración. Nos anticipamos a los problemas para que tus equipos funcionen al 100% de su capacidad.
            </p>
            <div className="flex gap-4">
              {/* Instagram */}
              <a 
                href="https://linktr.ee/cuatroeseclima" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)] flex items-center justify-center text-[#181E4B] hover:bg-[#F0BB1F] hover:text-white transition-colors"
                aria-label="Linktree"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-[#181E4B] font-bold text-xl mb-6">Secciones</h4>
            <ul className="space-y-4">
              <li><a href="#planes" className="text-[#5E6282] hover:text-[#DF6951] font-medium transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Planes Destacados</a></li>
              <li><a href="#ventajas" className="text-[#5E6282] hover:text-[#DF6951] font-medium transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Nuestras Ventajas</a></li>
              <li><a href="#pasos" className="text-[#5E6282] hover:text-[#DF6951] font-medium transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Cómo Funciona</a></li>
              <li><a href="#testimonios" className="text-[#5E6282] hover:text-[#DF6951] font-medium transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Testimonios</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-[#181E4B] font-bold text-xl mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[#5E6282]">
                <Phone className="w-5 h-5 flex-shrink-0 text-[#DF6951]" />
                <span className="font-medium">+54 11 1234-5678</span>
              </li>
              <li className="flex items-start gap-3 text-[#5E6282]">
                <Mail className="w-5 h-5 flex-shrink-0 text-[#DF6951]" />
                <span className="font-medium">contacto@cuatroese.com.ar</span>
              </li>
              <li className="flex items-start gap-3 text-[#5E6282]">
                <MapPin className="w-5 h-5 flex-shrink-0 text-[#DF6951]" />
                <span className="font-medium">Atención en Buenos Aires y alrededores</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter or CTA */}
          <div>
            <h4 className="text-[#181E4B] font-bold text-xl mb-6">Cotizá tu Plan</h4>
            <p className="text-[#5E6282] text-sm mb-4">
              Dejanos tu email o escribinos directo por WhatsApp y armamos un presupuesto a medida.
            </p>
            <a 
              href="https://wa.me/541112345678" 
              target="_blank"
              rel="noreferrer"
              className="inline-block w-full text-center px-6 py-3 bg-[#DF6951] text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Contactar por WhatsApp
            </a>
          </div>

        </div>

        {/* Copyright Bottom */}
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-[#5E6282] text-sm font-medium">
            © {new Date().getFullYear()} 4S CLIMA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
