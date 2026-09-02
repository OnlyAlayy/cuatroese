import { Navigation, Shield, Award, Crown, CheckCircle2 } from 'lucide-react'

const plans = [
  {
    title: 'Plan Silver',
    subtitle: 'Mantenimiento Avanzado',
    description: 'Máxima confiabilidad para tu equipo.',
    price: 'Consultar',
    duration: '2 Visitas Mensuales',
    image: '/assets/plan-silver.jpg',
    accentColor: 'text-[#5E6282]',
    bulletColor: 'text-[#5E6282]',
    icon: Shield,
    features: [
      'Revisiones preventivas de calefacción y refrigerante',
      'Revisión, lubricación y ajustes completos',
      'Limpieza liviana de componentes',
      'Toma y registro de parámetros operativos',
      'Informe técnico detallado',
    ],
    benefits: 'Mayor vida útil • Rendimiento óptimo',
  },
  {
    title: 'Plan Gold',
    subtitle: 'Mantenimiento Premium',
    description: 'Máxima protección, máximo rendimiento.',
    price: 'Consultar',
    duration: '2 Visitas Mensuales',
    image: '/assets/plan-gold.jpg',
    accentColor: 'text-[#F0BB1F]',
    bulletColor: 'text-[#F0BB1F]',
    icon: Award,
    isPopular: true,
    features: [
      'Chequeo exhaustivo y lubricación crítica',
      'Limpieza liviana interna y externa',
      'Ajustes y calibraciones precisas',
      'Cambio de componentes básicos (repuestos incl.)',
      '7% OFF en mano de obra extra',
    ],
    benefits: 'Ahorro real • Equipos más eficientes',
  },
  {
    title: 'Plan Platinum',
    subtitle: 'Máximo Desempeño',
    description: 'Mayor confort y rendimiento absoluto.',
    price: 'Consultar',
    duration: '2 Visitas Mensuales',
    image: '/assets/plan-platinum.jpg',
    accentColor: 'text-[#DF6951]',
    bulletColor: 'text-[#DF6951]',
    icon: Crown,
    features: [
      'Control total de quemadores, válvulas y presión',
      'Verificación y control de refrigerante',
      'Ajustes precisos y puesta a punto',
      'Limpieza profunda (filtros, serpentinas, etc.)',
      'Cambio preventivo de componentes básicos',
    ],
    benefits: 'Cuidamos tu confort • Ahorro estratégico',
  },
]

const PricingPlans = () => {
  return (
    <section id="planes" className="w-full max-w-7xl mx-auto px-6 py-24 relative">
      
      <div className="text-center mb-12">
        <p className="text-[#5E6282] font-semibold text-lg uppercase tracking-wider mb-2">
          Mantenimiento Programado
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-[#14183E] capitalize">
          Planes Destacados
        </h2>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <div 
                key={index} 
                className={`bg-white rounded-[24px] overflow-hidden shadow-[0_1.85px_3.15px_0_rgba(0,0,0,0.02),0_8.15px_6.52px_0_rgba(0,0,0,0.028),0_20px_13px_0_rgba(0,0,0,0.035),0_38.5px_25.48px_0_rgba(0,0,0,0.042),0_64.8px_46.85px_0_rgba(0,0,0,0.05),0_100px_80px_0_rgba(0,0,0,0.07)] transition-transform hover:-translate-y-2 duration-300 group relative border-2 ${plan.isPopular ? 'border-[#F0BB1F]/30' : 'border-transparent'}`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute top-3 right-3 z-20 bg-[#F0BB1F] text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-md">
                    Más Elegido
                  </div>
                )}

                <div className="h-36 overflow-hidden relative">
                  <img 
                    src={plan.image} 
                    alt={plan.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Title overlay on image */}
                  <div className="absolute bottom-3 left-5 right-5 flex justify-between items-end">
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <Icon className={`w-4 h-4 ${plan.isPopular ? 'text-[#F0BB1F]' : 'text-white'}`} />
                        <h3 className="text-white font-bold text-lg tracking-wide">{plan.title}</h3>
                      </div>
                      <p className="text-white/90 text-[13px] font-medium">{plan.subtitle}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-[#5E6282] text-[13px] italic mb-4">
                    "{plan.description}"
                  </p>
                  
                  <div className="flex items-center gap-2 text-[#14183E] font-bold mb-4 pb-4 border-b border-gray-100">
                    <Navigation className={`w-4 h-4 ${plan.accentColor}`} fill="currentColor" />
                    <span className="text-[14px]">{plan.duration}</span>
                  </div>

                  <ul className="text-[13px] text-[#5E6282] space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-[2px] ${plan.bulletColor}`} />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-4 border-t border-gray-100 text-center">
                    <p className="text-[11px] font-bold text-[#14183E] uppercase tracking-wider">
                      Beneficios clave
                    </p>
                    <p className={`text-[12px] mt-1 font-medium ${plan.accentColor}`}>
                      {plan.benefits}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Decorative Coil Image on the right */}
        <div className="absolute top-[30%] -right-[70px] -z-0 opacity-80 hidden lg:block w-32">
          <img src="/assets/decore-coil.png" alt="Decoración" className="w-full h-auto object-contain" />
        </div>
      </div>
    </section>
  )
}

export default PricingPlans
