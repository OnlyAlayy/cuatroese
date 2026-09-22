import { Snowflake, Flame, Settings, Wrench, Wind } from 'lucide-react'

const Hero = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 pt-10 sm:pt-16 pb-20 relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 items-center">
        
        {/* Left content */}
        <div className="relative z-10 flex flex-col">
          {/* Subtitle Desktop */}
          <p className="hidden sm:block text-sm font-bold text-[#DF6951] tracking-widest uppercase mb-6">
            Mantenimiento Programado
          </p>

          <h1 className="font-heading mb-4 sm:mb-8 text-[2.5rem] sm:text-[3rem] leading-tight relative z-10">
            Servicio Técnico de{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Calefacción</span>
              <img src="/assets/underline.png" alt="" aria-hidden="true" className="absolute bottom-[4px] left-[30px] w-full object-contain -z-10" />
            </span>
            <br />
            y Refrigeración
          </h1>

          {/* Subtitle Mobile */}
          <p className="sm:hidden text-sm font-bold text-[#DF6951] tracking-widest uppercase mb-6">
            Mantenimiento Programado
          </p>

          <p className="text-[#5E6282] text-base leading-relaxed max-w-[500px] mb-10 font-medium">
            Técnicos especializados. Servicio con garantía. Atención personalizada.
            Prevenimos problemas y garantizamos la continuidad operativa de tus equipos.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-8">
            <a href="#pasos" className="btn-cta relative z-20" tabIndex={0} aria-label="Cómo Funciona">
              Cómo Funciona
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="flex relative justify-center sm:justify-end min-h-[280px] sm:min-h-[500px] mt-8 sm:mt-0 w-full">
          {/* Hero image */}
          <img
            src="/assets/efe6b665-fe5e-44c4-bcbd-0d36a6d1ffcc.jpg"
            alt="Equipo de Aire Acondicionado"
            className="w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[550px] h-[250px] sm:h-[400px] sm:mt-10 rounded-2xl object-cover shadow-2xl relative z-10 sm:-ml-16 lg:-ml-32"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
