import { useState, useEffect } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

const testimonials = [
  {
    text: '"El servicio técnico de CLIMA 4S superó nuestras expectativas. Tuvimos un problema crítico en la planta de producción y su tiempo de respuesta fue inmediato. El plan de mantenimiento preventivo nos ha ahorrado muchísimos dolores de cabeza."',
    name: 'Carlos Rodríguez',
    role: 'Gerente de Operaciones',
    image: '/assets/hero-tecnico.png'
  },
  {
    text: '"Excelente atención y profesionalismo. Desde que contratamos el Plan Gold, nuestros aires acondicionados funcionan a la perfección todo el año sin interrupciones. Muy recomendables."',
    name: 'Laura Gómez',
    role: 'Administradora de Consorcio',
    image: '/assets/plan-silver.jpg'
  },
  {
    text: '"Los técnicos son muy amables y explican todo detalladamente. La relación precio-calidad del servicio es inmejorable. Nunca más tuvimos problemas de filtraciones ni malos olores."',
    name: 'Martín Pérez',
    role: 'Dueño de Local Comercial',
    image: '/assets/plan-platinum.jpg'
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const changeTestimonial = (newIndex) => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex(newIndex)
      setIsAnimating(false)
    }, 300) // Duration of the exit animation
  }

  const handleNext = () => {
    changeTestimonial((currentIndex + 1) % testimonials.length)
  }

  const handlePrev = () => {
    changeTestimonial((currentIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-play interval
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000) 
    
    return () => clearInterval(interval)
  }, [currentIndex, isAnimating]) 

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonios" className="w-full max-w-7xl mx-auto px-6 py-24 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Text and Pagination */}
        <div>
          <p className="text-[#5E6282] font-semibold text-lg uppercase tracking-wider mb-2">
            Testimonios
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-[#14183E] capitalize mb-16">
            Lo que dicen <br /> nuestros clientes.
          </h2>

          <div className="flex gap-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-[#39425D] scale-110' : 'bg-[#E5E5E5] hover:bg-[#c4c4c4]'
                }`}
                aria-label={`Ver testimonio ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Testimonial Cards */}
        <div className="relative flex items-center md:pl-10">
          
          {/* Stacked cards container */}
          <div className="relative w-full max-w-[500px]">
            
            {/* Front Card */}
            <div className={`bg-white rounded-[10px] p-8 shadow-[0_100px_80px_rgba(0,0,0,0.02),0_64.8px_46.85px_rgba(0,0,0,0.015),0_38.5px_25.48px_rgba(0,0,0,0.012)] relative z-20 mt-10 transition-all duration-300 ease-in-out ${isAnimating ? 'opacity-0 translate-y-8 scale-95' : 'opacity-100 translate-y-0 scale-100'}`}>
              
              {/* Profile Image */}
              <div className="absolute -top-8 -left-2 sm:-left-4 md:-left-8 w-16 h-16 rounded-full overflow-hidden shadow-lg border-2 border-white">
                <img 
                  key={currentTestimonial.image} 
                  src={currentTestimonial.image} 
                  alt={currentTestimonial.name} 
                  className="w-full h-full object-cover object-top bg-[#F0BB1F]" 
                />
              </div>
              
              <p className="text-[#5E6282] text-[16px] font-medium leading-relaxed mb-8 relative z-10 min-h-[140px]">
                {currentTestimonial.text}
              </p>
              
              <div>
                <h4 className="text-[#5E6282] font-bold text-[18px]">{currentTestimonial.name}</h4>
                <p className="text-[#5E6282] text-sm font-medium">{currentTestimonial.role}</p>
              </div>
            </div>

            {/* Back Card (Stacked effect) */}
            <div 
              className="absolute top-[80px] left-4 right-[-12px] sm:left-8 sm:right-[-32px] bottom-[-40px] bg-white rounded-[10px] border border-[#F7F7F7] shadow-[0_100px_80px_rgba(0,0,0,0.02)] -z-10 opacity-50 flex items-end p-6 sm:p-8 pb-4 cursor-pointer hover:opacity-70 transition-all duration-300 ease-in-out"
              onClick={handleNext}
              title="Siguiente testimonio"
            >
              {/* Vaciamos el texto de la tarjeta trasera para que no se superponga ni se asome por debajo */}
            </div>

          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex flex-col gap-4 ml-12">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors text-[#3E2E4D]" 
              aria-label="Anterior testimonio"
            >
              <ChevronUp className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors text-[#3E2E4D]" 
              aria-label="Siguiente testimonio"
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonials
