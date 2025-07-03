import { CardSpotlight } from "@/components/ui/card-spotlight"
import { 
  ShieldCheck, 
  AlertTriangle, 
  Gavel
} from "lucide-react"

const features = [
  { 
    icon: ShieldCheck, 
    title: "Aziende Certificate", 
    description: "Spunta verde per chiamate legittime con badge di fiducia verificato",
    color: "emerald"
  },
  { 
    icon: AlertTriangle, 
    title: "Segnala Abusi", 
    description: "Report facile e veloce delle chiamate spam con sistema smart",
    color: "red"
  },
  { 
    icon: Gavel, 
    title: "Azioni Legali", 
    description: "Cause collettive efficaci contro call center abusivi",
    color: "blue"
  }
]

export function FeaturesContent() {
  return (
    <section className="section-divider py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Come Funziona
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Un approccio triplo per eliminare il telemarketing abusivo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index}>
              <CardSpotlight className="border-neutral-700 bg-neutral-950/90 h-full">
                <div className="relative z-20 p-6 text-center">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center ${
                    feature.color === 'emerald' ? 'bg-emerald-500/10 border border-emerald-500/20' :
                    feature.color === 'red' ? 'bg-red-500/10 border border-red-500/20' :
                    'bg-blue-500/10 border border-blue-500/20'
                  }`}>
                    <feature.icon className={`w-6 h-6 ${
                      feature.color === 'emerald' ? 'text-emerald-400' :
                      feature.color === 'red' ? 'text-red-400' :
                      'text-blue-400'
                    }`} />
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