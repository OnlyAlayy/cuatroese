import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Steps from './components/Steps'
import Footer from './components/Footer'
import { MessageCircle } from 'lucide-react'

function App() {
  const [hovered, setHovered] = useState(false)
  const [autoShow, setAutoShow] = useState(false)

  useEffect(() => {
    let timeoutId
    let intervalId
    
    const triggerTooltip = () => {
      setAutoShow(true)
      // Ocultar después de 5s
      setTimeout(() => setAutoShow(false), 5000)
    }

    // Primera vez a los 12 segundos
    timeoutId = setTimeout(() => {
      triggerTooltip()
      
      // Luego repetir cada 25 segundos
      intervalId = setInterval(() => {
        triggerTooltip()
      }, 25000)
      
    }, 12000)

    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [])

  const showBubble = hovered || autoShow
  return (
    <div className="min-h-screen bg-white font-sans relative overflow-x-clip">
      {/* Background Decor (Colorized to match CTA button #F1A501) */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] md:w-[800px] md:h-[800px] pointer-events-none select-none z-0 bg-[#F1A501] opacity-30"
        style={{
          WebkitMaskImage: 'url(/assets/decore.png)',
          WebkitMaskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'right top',
          maskImage: 'url(/assets/decore.png)',
          maskSize: 'contain',
          maskRepeat: 'no-repeat',
          maskPosition: 'right top',
        }}
        aria-hidden="true"
      />

      {/* Background Decore2 — Left side at Steps height */}
      <div
        className="absolute -left-40 w-[500px] h-[500px] md:w-[650px] md:h-[650px] pointer-events-none select-none z-0 bg-[#F1A501] opacity-30"
        style={{
          top: '120vh',
          WebkitMaskImage: 'url(/assets/Decore2.png)',
          WebkitMaskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'left center',
          maskImage: 'url(/assets/Decore2.png)',
          maskSize: 'contain',
          maskRepeat: 'no-repeat',
          maskPosition: 'left center',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <Steps />
        <Footer />
      </div>

      {/* Floating WhatsApp Button with hover tooltip */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        
        {/* 1. AUTO-SHOW TOOLTIP (Aparece solo cada 25s por encima del botón) */}
        <div className={`absolute bottom-[70px] right-0 bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 hidden sm:block transition-opacity duration-1000 ${autoShow && !hovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <p className="text-[#14183E] font-medium text-sm whitespace-nowrap">
            ¿Dudas? Escribinos
          </p>
          {/* Triangle pointing down */}
          <div className="absolute -bottom-2 right-5 w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-t-white border-r-[6px] border-r-transparent drop-shadow-sm"></div>
        </div>

        {/* Mobile auto-show tooltip */}
        <div className={`absolute bottom-[65px] right-0 sm:hidden bg-white px-3 py-1.5 rounded-lg shadow-lg border border-gray-100 whitespace-nowrap transition-opacity duration-1000 ${autoShow && !hovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <p className="text-[#14183E] font-medium text-xs">
            ¡Escribinos!
          </p>
          {/* Triangle pointing down */}
          <div className="absolute -bottom-1.5 right-5 w-0 h-0 border-l-[4px] border-l-transparent border-t-[6px] border-t-white border-r-[4px] border-r-transparent"></div>
        </div>

        {/* 2. HOVER CHAT BUBBLE (Aparece a la izquierda al pasar el mouse) */}
        {hovered && (
          <div className="chat-bubble-enter relative bg-white text-[#14183E] font-semibold text-sm px-4 py-2.5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] whitespace-nowrap flex items-center mr-1">
            Chatea con nosotros
            {/* Arrow pointing right */}
            <div className="absolute top-1/2 -right-[7px] -translate-y-1/2 w-0 h-0
              border-t-[6px] border-t-transparent
              border-l-[7px] border-l-white
              border-b-[6px] border-b-transparent">
            </div>
          </div>
        )}

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/541112345678" 
          target="_blank" 
          rel="noreferrer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
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
