import { Snowflake, Flame, Settings, Wrench, Wind } from 'lucide-react'

const Hero = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 pt-10 md:pt-16 pb-20 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left content */}
        <div className="relative z-10 flex flex-col">
          {/* Subtitle Desktop */}
          <p className="hidden md:block text-sm font-bold text-[#DF6951] tracking-widest uppercase mb-6">
            Mantenimiento Programado
          </p>

          {/* Floating Icons Mobile (Background Layer) */}
          <div className="absolute inset-0 z-0 pointer-events-none md:hidden overflow-visible">
            <Snowflake className="absolute -top-2 right-2 w-10 h-10 text-blue-400 opacity-30 animate-[bounce_3s_ease-in-out_infinite]" />
            <Flame className="absolute top-[45%] -left-4 w-9 h-9 text-orange-400 opacity-30 animate-[bounce_4s_ease-in-out_infinite]" />
            <Settings className="absolute top-[10%] left-4 w-7 h-7 text-gray-400 opacity-30 animate-[spin_6s_linear_infinite]" />
            <Wrench className="absolute bottom-[20%] right-0 w-7 h-7 text-gray-500 opacity-30 animate-[bounce_5s_ease-in-out_infinite]" />
            <Wind className="absolute top-[70%] left-[20%] w-8 h-8 text-blue-300 opacity-30 animate-[pulse_3s_ease-in-out_infinite]" />
          </div>

          <h1 className="font-heading mb-4 md:mb-8 text-[3rem] leading-tight relative z-10">
            Servicio Técnico de{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Calefacción</span>
              <img src="/assets/underline.png" alt="" aria-hidden="true" className="absolute bottom-[4px] left-[30px] w-full object-contain -z-10" />
            </span>
            <br />
            y Refrigeración
          </h1>

          {/* Subtitle Mobile */}
          <p className="md:hidden text-sm font-bold text-[#DF6951] tracking-widest uppercase mb-6">
            Mantenimiento Programado
          </p>

          <p className="text-[#5E6282] text-base leading-relaxed max-w-md mb-10 font-medium">
            Técnicos especializados. Servicio con garantía. Atención personalizada.
            Prevenimos problemas y garantizamos la continuidad operativa de tus equipos.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-8">
            <a href="#planes" className="btn-cta relative z-20" tabIndex={0} aria-label="Ver Planes">
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
