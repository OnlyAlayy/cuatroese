import React from 'react'

const About = () => {
  return (
    <section id="nosotros" className="w-full max-w-7xl mx-auto px-6 py-12 lg:py-20 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col text-center lg:text-left">
          <p className="text-[#5E6282] font-semibold text-lg uppercase tracking-wider mb-2">
            Quiénes Somos
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#14183E] capitalize mb-8 leading-tight">
            31 Años <br className="hidden md:block"/>
            <span className="relative inline-block text-[#DF6951]">
              <span className="relative z-10">Nuestra trayectoria</span>
              <img src="/assets/underline.png" alt="" aria-hidden="true" className="absolute -bottom-1 left-4 w-full object-contain -z-10 opacity-60" />
            </span>
            <br /> habla por nosotros
          </h2>

          <div className="space-y-6 text-[#5E6282] font-medium leading-relaxed text-lg">
            <p>
              Somos una empresa familiar, nacida de un anhelo personal: aplicar en un proyecto propio la experiencia recogida en <strong className="text-[#DF6951]">31 años de trayectoria</strong> en algunas de las obras más diversas de nuestro país y de Latinoamérica.
            </p>
            <p>
              Aplicamos conceptos de servicio orientados a la satisfacción de clientes exigentes, impulsando la transformación de obras e instalaciones hacia la eficiencia energética y el máximo aprovechamiento de recursos.
            </p>
          </div>
        </div>

        {/* Right Column: Photos Grid */}
        <div className="relative">
          {/* Main big photo placeholder */}
          <img 
            src="/assets/efe6b665-fe5e-44c4-bcbd-0d36a6d1ffcc.jpg" 
            alt="Personal de 4S CLIMA en obra" 
            className="w-full h-[300px] sm:h-[400px] object-cover rounded-3xl shadow-lg border-4 border-white"
          />

          {/* Two smaller photos overlapping */}
          <div className="absolute -bottom-2 -left-2 sm:-bottom-10 sm:-left-10 w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] bg-white p-1.5 sm:p-2 rounded-xl sm:rounded-2xl shadow-xl z-20">
            <img 
              src="/assets/cb28a21b-5a03-4159-a054-0bae70202dc4.jpg" 
              alt="Personal de 4S CLIMA" 
              className="w-full h-full object-cover rounded-lg sm:rounded-xl"
            />
          </div>

          <div className="absolute top-10 -right-8 w-[160px] h-[160px] bg-white p-2 rounded-2xl shadow-xl hidden md:block">
            <div className="w-full h-full bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center text-center p-4">
              <span className="text-gray-400 font-medium text-xs">
                [Foto 3: Personal en obra (Pedir a Walter)]
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
