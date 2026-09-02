

const Hero = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 pt-10 md:pt-16 pb-20 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left content */}
        <div className="relative z-10">
          <p className="text-sm font-bold text-[#DF6951] tracking-widest uppercase mb-6">
            Mantenimiento Programado
          </p>

          <h1 className="font-heading mb-8 text-[3rem] leading-tight">
            Servicio Técnico de{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Calefacción</span>
              <img src="/assets/underline.png" alt="" className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2 w-[105%] sm:w-[110%] h-[15px] sm:h-[22px] object-fill -z-10" />
            </span>
            <br />
            y Refrigeración
          </h1>

          <p className="text-[#5E6282] text-base leading-relaxed max-w-md mb-10 font-medium">
            Técnicos especializados. Servicio con garantía. Atención personalizada.
            Prevenimos problemas y garantizamos la continuidad operativa de tus equipos.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-8">
            <a href="#planes" className="btn-cta" tabIndex={0} aria-label="Ver Planes">
              Ver Planes
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="relative flex justify-center md:justify-end min-h-[500px]">
          
          <div className="absolute inset-0 bg-[#F0BB1F] rounded-tl-[100px] rounded-br-[100px] -z-10 translate-x-6 translate-y-6"></div>
          <img 
            src="/assets/hero-traveler.jpg" 
            alt="Técnico de refrigeración" 
            className="relative z-10 rounded-tl-[100px] rounded-br-[100px] w-full h-[400px] md:h-[600px] object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
