import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import PricingPlans from './components/PricingPlans'
import Steps from './components/Steps'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import { MessageCircle } from 'lucide-react'

function App() {
  const [showTooltip, setShowTooltip] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="min-h-screen bg-white font-sans relative">
      {/* Background Decor */}
      <img
        src="/assets/decore.png"
        alt=""
        aria-hidden="true"
        className="absolute top-0 right-0 w-[700px] h-[700px] md:w-[800px] md:h-[800px] object-contain object-right-top pointer-events-none select-none z-0 saturate-[1.5] contrast-125 drop-shadow-md"
      />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <PricingPlans />
        <Features />
        <Steps />
        <Testimonials />
        <Footer />
      </div>

      {/* Floating WhatsApp Button & Tooltip */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">
        {/* Tooltip / Cartel */}
        <div className={`bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 relative hidden sm:block transition-opacity duration-1000 ${showTooltip ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <p className="text-[#14183E] font-medium text-sm">
            ¿Dudas? Escribinos
          </p>
          {/* Triangle pointing right */}
          <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-white border-b-[6px] border-b-transparent drop-shadow-sm"></div>
        </div>

        {/* Mobile-only subtle tooltip */}
        <div className={`sm:hidden bg-white px-3 py-1.5 rounded-lg shadow-lg border border-gray-100 absolute right-[70px] whitespace-nowrap transition-opacity duration-1000 ${showTooltip ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <p className="text-[#14183E] font-medium text-xs">
            ¡Escribinos!
          </p>
          {/* Triangle pointing right */}
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-white border-b-[4px] border-b-transparent"></div>
        </div>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/541112345678" 
          target="_blank" 
          rel="noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:scale-110 hover:shadow-xl transition-all duration-300 relative z-10"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </div>
  )
}

export default App
