

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
              <img src="/assets/underline.png" alt="" aria-hidden="true" className="absolute bottom-[4px] left-[30px] w-full object-contain -z-10" />
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
        <div className="hidden md:flex relative justify-end min-h-[500px]">
          {/* Hero image */}
          <img
            src="/assets/hero-tecnico.png"
            alt="Técnico de CLIMA 4S realizando mantenimiento de equipo de refrigeración"
            className="w-full max-w-[550px] lg:max-w-[650px] object-contain relative z-10 -ml-10 md:-ml-24 lg:-ml-32"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
