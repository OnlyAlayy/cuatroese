import { MousePointerClick, Calendar, CheckCircle2, Map } from 'lucide-react'

const steps = [
  {
    title: 'Elegí tu Plan',
    description: 'Seleccioná el plan de mantenimiento que mejor se adapte a las necesidades de tus equipos.',
    icon: MousePointerClick,
    bgColor: 'bg-[#F0BB1F]',
  },
  {
    title: 'Coordiná la Visita',
    description: 'Agendamos la visita técnica en el horario que te resulte más conveniente para no afectar tu rutina.',
    icon: Calendar,
    bgColor: 'bg-[#F15A2B]',
  },
  {
    title: 'Disfrutá de tu Equipo',
    description: 'Nuestros técnicos especializados se encargan del resto. Tu equipo funcionará al máximo rendimiento.',
    icon: CheckCircle2,
    bgColor: 'bg-[#006380]',
  },
]

const Steps = () => {
  return (
    <section id="pasos" className="w-full max-w-7xl mx-auto px-6 py-12 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side: Text and Steps */}
        <div>
          <p className="text-[#5E6282] font-semibold text-[15px] uppercase tracking-wider mb-2">
            Fácil y Rápido
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-[#14183E] capitalize mb-8">
            Contratá tu plan en 3 simples pasos
          </h2>

          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="flex gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-[13px] flex items-center justify-center text-white ${step.bgColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[#5E6282] font-bold text-[16px] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[#5E6282] text-[16px] leading-relaxed max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Side: Floating Card */}
        <div className="relative flex justify-center mt-8 md:mt-0">
          {/* Blue shadow blur */}
          <div className="absolute top-0 right-10 w-[300px] h-[300px] bg-[#59B1E6] rounded-full blur-[80px] opacity-30 -z-10"></div>
          
          {/* Main Card */}
          <div className="bg-white rounded-3xl p-5 pb-6 shadow-[0_100px_80px_rgba(0,0,0,0.02),0_64.8px_46.85px_rgba(0,0,0,0.015),0_38.5px_25.48px_rgba(0,0,0,0.012),0_20px_13px_rgba(0,0,0,0.01)] w-full max-w-[280px] relative z-10">
            <div className="h-32 rounded-2xl overflow-hidden mb-5">
              <img src="/assets/plan-silver.jpg" alt="Mantenimiento de equipo" className="w-full h-full object-cover" />
            </div>
            
            <h4 className="text-[#080809] font-medium text-[16px] mb-2 tracking-wide">
              Mantenimiento Preventivo
            </h4>
            
            <div className="text-[#84829A] text-[14px] font-medium flex gap-2 mb-3">
              <span>Hoy</span>
              <span>|</span>
              <span>Por CLIMA 4S</span>
            </div>
            
            <div className="flex gap-3 mb-5">
              <div className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center">
                <Map className="w-4 h-4 text-[#84829A]" />
              </div>
              <div className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center">
                <Calendar className="w-4 h-4 text-[#84829A]" />
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-[#84829A] font-medium text-[14px]">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6667 3.33334H3.33333C2.59695 3.33334 2 3.9303 2 4.66668V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V4.66668C14 3.9303 13.403 3.33334 12.6667 3.33334Z" stroke="#84829A" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.33333 2V4.66667" stroke="#84829A" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.6667 2V4.66667" stroke="#84829A" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 7.33334H14" stroke="#84829A" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Próxima visita agendada</span>
            </div>

            {/* Overlapping small card */}
            <div className="absolute -right-2 sm:-right-6 md:-right-12 bottom-10 bg-white rounded-2xl p-3 flex gap-3 shadow-[0_100px_80px_rgba(0,0,0,0.02),0_64.8px_46.85px_rgba(0,0,0,0.015),0_38.5px_25.48px_rgba(0,0,0,0.012)] w-[180px] sm:w-[200px]">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <img src="/assets/hero-tecnico.png" alt="Técnico" className="w-full h-full object-cover bg-gray-100" />
              </div>
              <div className="flex-1">
                <p className="text-[#84829A] text-[11px] font-medium mb-0.5">En camino</p>
                <h5 className="text-[#080809] text-[12px] sm:text-[13px] font-medium mb-1.5">Técnico Asignado</h5>
                <div className="w-full h-1 bg-[#F5F5F5] rounded-full overflow-hidden">
                  <div className="w-[40%] h-full bg-[#8A79DF] rounded-full"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps
