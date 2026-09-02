import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import PricingPlans from './components/PricingPlans'
import Steps from './components/Steps'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import { MessageCircle } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden relative">
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

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/541112345678" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  )
}

export default App
