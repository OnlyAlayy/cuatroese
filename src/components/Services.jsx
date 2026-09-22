import React from 'react'
import { Settings, ShieldCheck, PenTool } from 'lucide-react'

const services = [
  {
    title: 'Mantenimiento Preventivo',
    icon: Settings,
    features: [
      'Inspecciones programadas',
      'Limpieza de filtros y serpentinas',
      'Verificación de presiones y consumos',
      'Revisión de componentes (compresores, ventiladores)',
      'Detección temprana de fallas'
    ],
    delay: '0ms',
  },
  {
    title: 'Mantenimiento Correctivo',
    icon: ShieldCheck,
    features: [
      'Diagnóstico y reparación de fallas',
      'Reposición de repuestos',
      'Verificación final'
    ],
    delay: '150ms',
  },
  {
    title: 'Servicio de Reparación',
    icon: PenTool,
    features: [
      'Asesoramiento',
      'Capacitación al usuario',
      'Reemplazo de componentes',
      'Reformas y optimización',
      'Asistencia de emergencias',
      'Seguimiento documentado'
    ],
    delay: '300ms',
  }
]

const Services = () => {
  return (
    <section id="pasos" className="w-full max-w-7xl mx-auto px-6 py-12 md:py-24 relative z-10">
      <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
        <p className="text-[#5E6282] font-semibold text-lg uppercase tracking-wider mb-2">
          Cómo Funciona
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-[#14183E] capitalize mb-6">
          Detalle de Servicios
        </h2>
        <p className="text-[#5E6282] font-medium leading-relaxed text-lg">
          Contamos con técnicos especializados para garantizar el funcionamiento, eficiencia y vida útil de tus instalaciones.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        
        {/* Background decorative line linking the cards on desktop */}
        <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-gray-200 z-0"></div>

        {services.map((service, index) => {
          const Icon = service.icon
          
          return (
            <div 
              key={index} 
              className="relative z-10 flex flex-col p-8 rounded-[30px] bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 h-full"
            >
              {/* Icon Header */}
              <div className="flex flex-col items-center mb-8">
                <div className="w-20 h-20 rounded-2xl bg-[#FFF1DA] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Icon className="w-10 h-10 text-[#DF6951]" strokeWidth={1.5} />
                </div>
                <h3 className="text-[#1E1D4C] font-bold text-2xl text-center">
                  {service.title}
                </h3>
              </div>

              {/* Features List */}
              <ul className="space-y-4 text-left flex-1">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#DF6951] mt-2 flex-shrink-0"></span>
                    <span className="text-[#5E6282] font-medium leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default Services
