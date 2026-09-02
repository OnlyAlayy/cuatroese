import { Wrench, ShieldCheck, UserCheck, CalendarCheck } from 'lucide-react'

const features = [
  {
    title: 'Técnicos Especializados',
    description: 'Personal altamente capacitado para resolver cualquier desafío técnico.',
    icon: Wrench,
    blobClass: 'bottom-0 -right-3 w-10 h-10 rounded-tl-[18px] rounded-br-[8px]',
  },
  {
    title: 'Servicio con Garantía',
    description: 'Respaldo total en todas nuestras reparaciones y mantenimientos.',
    icon: ShieldCheck,
    active: true,
    blobClass: '-top-2 -left-2 w-10 h-10 rounded-tr-[18px] rounded-bl-[8px]',
  },
  {
    title: 'Atención Personalizada',
    description: 'Asesoramiento y soporte enfocado en las necesidades de tu equipo.',
    icon: UserCheck,
    blobClass: 'top-1 -right-4 w-10 h-10 rounded-tl-[18px] rounded-br-[8px]',
  },
  {
    title: 'Mantenimiento Programado',
    description: 'Prevención proactiva para reducir fallas y paradas inesperadas.',
    icon: CalendarCheck,
    blobClass: 'bottom-1 -right-2 w-12 h-10 rounded-tl-[18px] rounded-br-[8px]',
  },
]

const Features = () => {
  return (
    <section id="ventajas" className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10">
      <div className="text-center mb-16">
        <p className="text-[#5E6282] font-semibold text-lg uppercase tracking-wider mb-2">
          Por qué elegirnos
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-[#14183E] capitalize">
          Nuestras Ventajas
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon
          
          return (
            <div key={index} className="relative">
              
              {/* Decorative shape behind the active card (now outside so it doesn't scale on hover) */}
              {feature.active && (
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#DF6951] rounded-tl-[30px] rounded-br-[10px] z-0"></div>
              )}
              
              {/* The Card */}
              <div 
                className="relative group flex flex-col items-center text-center p-8 rounded-[36px] bg-white transition-all duration-300 hover:shadow-[0_100px_80px_rgba(0,0,0,0.02),0_64.8px_46.85px_rgba(0,0,0,0.015),0_38.5px_25.48px_rgba(0,0,0,0.012),0_20px_13px_rgba(0,0,0,0.01),0_8.1px_6.52px_rgba(0,0,0,0.007),0_1.8px_3.15px_rgba(0,0,0,0.005)] hover:scale-105 z-10 h-full"
              >
                
                {/* Icon Container with subtle background shape */}
                <div className="relative mb-6">
                  <div className={`absolute bg-[#FFF1DA] z-0 ${feature.blobClass}`}></div>
                  <Icon className="relative z-10 w-12 h-12 text-[#212832]" strokeWidth={1.5} />
                </div>

                <h3 className="text-[#1E1D4C] font-semibold text-xl mb-4 relative z-10">
                  {feature.title}
                </h3>
                
                <p className="text-[#5E6282] font-medium leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Features
