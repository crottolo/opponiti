import { CardSpotlight } from "@/components/ui/card-spotlight"
import { ShieldCheck, BarChart3, Lock } from "lucide-react"

const features = [
  { 
    icon: ShieldCheck, 
    title: "Spunta Verde", 
    description: "Identificazione automatica per tutte le tue chiamate con badge di fiducia"
  },
  { 
    icon: BarChart3, 
    title: "Analytics Avanzate", 
    description: "Dashboard completa con metriche dettagliate su performance e reputazione"
  },
  { 
    icon: Lock, 
    title: "Compliance Garantita", 
    description: "Supporto legale completo e conformità GDPR per operazioni sicure"
  }
]

export function BusinessFeaturesContent() {
  return (
    <section className="section-divider py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cosa Ottieni
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            I vantaggi concreti della certificazione per la tua azienda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index}>
              <CardSpotlight className="border-neutral-700 bg-neutral-950/90 h-full">
                <div className="relative z-20 p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-zinc-400">{feature.description}</p>
                </div>
              </CardSpotlight>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}