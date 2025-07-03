import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { Check } from "lucide-react"

interface PricingContentV2Props {
  animated?: boolean
}

export function PricingContentV2({}: PricingContentV2Props) {
  const tiers = [
    {
      name: "Starter",
      price: "€99",
      period: "/mese",
      description: "Per piccole imprese che vogliono certificarsi",
      features: [
        "Badge di certificazione verde",
        "Profilo aziendale verificato",
        "Protezione base da segnalazioni",
        "Report mensili semplici",
        "Supporto email"
      ],
      gradient: "from-neutral-500/20 to-neutral-600/20",
      popular: false
    },
    {
      name: "Professional",
      price: "€299",
      period: "/mese",
      description: "Per aziende che vogliono eccellere",
      features: [
        "Tutto di Starter +",
        "Badge premium con animazione",
        "Protezione avanzata da segnalazioni",
        "Analytics dettagliate in tempo reale",
        "API per integrazione CRM",
        "Supporto prioritario 24/7",
        "Formazione compliance inclusa"
      ],
      gradient: "from-emerald-500/20 to-emerald-600/20",
      popular: true
    },
    {
      name: "Enterprise",
      price: "€799",
      period: "/mese",
      description: "Per grandi organizzazioni e call center",
      features: [
        "Tutto di Professional +",
        "Badge esclusivo personalizzato",
        "Protezione totale e consulenza legale",
        "Dashboard multi-sede",
        "Compliance manager dedicato",
        "Formazione on-site team",
        "SLA garantito 99.9%",
        "Contratto personalizzato"
      ],
      gradient: "from-blue-500/20 to-blue-600/20",
      popular: false
    }
  ]

  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Piani di Certificazione
        </h2>
        <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
          Investi nella tua reputazione aziendale e distinguiti dalla concorrenza sleale
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {tiers.map((tier) => (
          <BackgroundGradient
            key={tier.name}
            className="rounded-[22px] p-6 sm:p-8 bg-white dark:bg-zinc-900 relative h-full"
            containerClassName="h-full"
            animate={false}
          >
            {tier.popular && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white border-0">
                Più Popolare
              </Badge>
            )}
            
            <div className="space-y-6 h-full flex flex-col">
              <div>
                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-2">{tier.name}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">{tier.description}</p>
              </div>

              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-zinc-900 dark:text-white">{tier.price}</span>
                <span className="text-neutral-600 dark:text-neutral-400 ml-2">{tier.period}</span>
              </div>

              <div className="flex-1">
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                className={`w-full h-12 font-medium rounded-lg transition-all duration-200 ${
                  tier.popular 
                    ? 'bg-emerald-500 hover:bg-emerald-600 text-white' 
                    : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                }`}
              >
                Inizia Ora
              </Button>
            </div>
          </BackgroundGradient>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-neutral-400 mb-4">
          Hai bisogno di un piano personalizzato?
        </p>
        <Button variant="outline" className="border-neutral-700 text-white hover:bg-neutral-800">
          Contatta il nostro team vendite
        </Button>
      </div>
    </div>
  )
}