import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { CheckCircle } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "€99",
    period: "/mese",
    description: "Per piccole aziende",
    features: [
      "Certificazione base",
      "Spunta verde",
      "Analytics basic",
      "Supporto email"
    ]
  },
  {
    name: "Professional",
    price: "€299",
    period: "/mese",
    description: "Per aziende medie",
    features: [
      "Tutto di Starter",
      "Analytics avanzate",
      "Supporto prioritario",
      "API access",
      "Custom branding"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "€799",
    period: "/mese",
    description: "Per grandi aziende",
    features: [
      "Tutto di Professional",
      "Supporto dedicato",
      "SLA garantito",
      "Integrazione custom",
      "Report personalizzati"
    ]
  }
]

export function PricingContent() {
  return (
    <section className="section-divider py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Piani di Certificazione
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Scegli il piano più adatto alle dimensioni della tua azienda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index}>
              <CardSpotlight className={`border-neutral-700 bg-neutral-950/90 h-full ${plan.popular ? 'ring-2 ring-blue-500/50' : ''}`}>
                <div className="relative z-20 p-6">
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-500 text-white border-0">
                        Più Popolare
                      </Badge>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-sm text-zinc-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-white">{plan.price}</span>
                      <span className="text-sm text-zinc-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span className="text-sm text-zinc-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full ${plan.popular ? 'bg-blue-500 hover:bg-blue-600' : 'bg-neutral-800 hover:bg-neutral-700'} text-white rounded-lg transition-all duration-200`}
                  >
                    Scegli {plan.name}
                  </Button>
                </div>
              </CardSpotlight>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}