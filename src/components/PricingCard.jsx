import { Check, MessageCircle } from 'lucide-react'

const PricingCard = ({ plan, featured = false }) => {
  const themeClass = `plan-${plan.theme}`
  const ctaClass = `cta-${plan.theme}`
  const cardClass = featured ? 'plan-featured' : ''

  return (
    <div className={`plan-card ${themeClass} ${cardClass} flex flex-col`}>
      
      {/* Recommended ribbon for Gold */}
      {featured && <div className="ribbon">Recomendado</div>}

      {/* Header */}
      <div className="plan-header p-6 pb-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 block mb-1">
              Plan
            </span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white">
              {plan.name}
            </h2>
          </div>
          <div className="plan-badge w-14 h-14 rounded-xl flex items-center justify-center">
            <span className="text-2xl font-black text-white">{plan.name.charAt(0)}</span>
          </div>
        </div>
        <p className="text-sm font-medium text-white/70 leading-relaxed">
          {plan.subtitle}
        </p>
      </div>

      {/* Promise */}
      <div className="px-6 py-3 border-t border-white/5">
        <p className="plan-accent text-xs font-bold tracking-wider uppercase">
          {plan.promise}
        </p>
      </div>

      {/* Benefits */}
      <div className="px-6 pt-2 pb-4 flex-grow">
        {plan.benefits.map((benefit, i) => (
          <div key={i} className="benefit-row">
            <div className="mt-0.5 flex-shrink-0">
              <Check className="w-4 h-4 plan-check" strokeWidth={3} />
            </div>
            <div>
              <h4 className="font-bold text-[13px] text-white/90 leading-tight mb-1">
                {benefit.title}
              </h4>
              <p className="text-[12px] text-white/40 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Results */}
      <div className="px-6 pb-4">
        <div className="flex flex-wrap gap-2">
          {plan.results.map((res, i) => {
            const label = res.split(':')[0]
            return (
              <div key={i} className="result-pill">
                <Check className="w-3 h-3 plan-check flex-shrink-0" strokeWidth={3} />
                <span>{label}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Slogan + CTA */}
      <div className="px-6 pb-6 mt-auto">
        <p className="text-[11px] text-white/30 font-semibold tracking-wide uppercase text-center mb-4">
          {plan.slogan}
        </p>
        <a
          href="https://wa.me/541112345678"
          target="_blank"
          rel="noopener noreferrer"
          className={`cta-button ${ctaClass}`}
          aria-label={`Consultar por el plan ${plan.name} en WhatsApp`}
          tabIndex={0}
        >
          <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
          Consultar por WhatsApp
        </a>
      </div>

    </div>
  )
}

export default PricingCard
