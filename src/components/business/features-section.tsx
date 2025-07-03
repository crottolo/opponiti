import { CardSpotlight } from "@/components/ui/card-spotlight"
import { ShieldCheck, BarChart3, Lock } from "lucide-react"

export function BusinessFeaturesSection() {
  const features = [
    { 
      icon: ShieldCheck, 
      title: "Spunta Verde", 
      desc: "Identificazione automatica per tutte le chiamate", 
      color: "emerald" 
    },
    { 
      icon: BarChart3, 
      title: "Analytics Avanzate", 
      desc: "Metriche dettagliate su performance e reputazione", 
      color: "blue" 
    },
    { 
      icon: Lock, 
      title: "Compliance Garantita", 
      desc: "Supporto legale e conformità GDPR", 
      color: "purple" 
    }
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <CardSpotlight key={index} className="glass-card p-6 text-center">
              <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center
                ${item.color === 'emerald' ? 'bg-emerald-500/20' : 
                  item.color === 'blue' ? 'bg-blue-500/20' : 'bg-purple-500/20'}`}>
                <item.icon className={`w-6 h-6 
                  ${item.color === 'emerald' ? 'text-emerald-400' : 
                    item.color === 'blue' ? 'text-blue-400' : 'text-purple-400'}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  )
}