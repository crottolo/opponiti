import { CardSpotlight } from "@/components/ui/card-spotlight"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export function BusinessPricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "€99",
      period: "/mese",
      popular: false,
      features: [
        "Spunta verde base",
        "Analytics essenziali",
        "Supporto email",
        "Fino a 1.000 chiamate/mese"
      ]
    },
    {
      name: "Professional",
      price: "€299",
      period: "/mese",
      popular: true,
      features: [
        "Spunta verde premium",
        "Analytics avanzate",
        "Supporto prioritario",
        "Fino a 10.000 chiamate/mese",
        "API integrazione",
        "Dashboard personalizzata"
      ]
    },
    {
      name: "Enterprise",
      price: "€799",
      period: "/mese",
      popular: false,
      features: [
        "Spunta verde enterprise",
        "Analytics complete",
        "Supporto dedicato",
        "Chiamate illimitate",
        "API completa",
        "Consulenza legale",
        "White-label solution"
      ]
    }
  ]

  return (
    <section id="prezzi" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Scegli il Tuo <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Piano</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Piani flessibili per aziende di ogni dimensione. Inizia la tua certificazione oggi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <CardSpotlight key={index} className={`glass-card p-6 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500 text-white">
                    Più Popolare
                  </Badge>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  )
}