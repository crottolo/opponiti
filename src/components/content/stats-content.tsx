import { CardSpotlight } from "@/components/ui/card-spotlight"
import { 
  Users, 
  Phone, 
  Shield, 
  DollarSign
} from "lucide-react"

const stats = [
  { number: "87%", desc: "degli italiani riceve chiamate indesiderate", icon: Users },
  { number: "6.2", desc: "chiamate spam al giorno in media", icon: Phone },
  { number: "73%", desc: "usa numeri esteri per eludere controlli", icon: Shield },
  { number: "€0", desc: "conseguenze reali per chi abusa", icon: DollarSign }
]

export function StatsContent() {
  return (
    <section className="section-divider py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Il Problema è Reale
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Il telemarketing selvaggio in Italia è fuori controllo. Le cifre parlano chiaro.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index}>
              <CardSpotlight className="border-neutral-700 bg-neutral-950/90 h-full">
                <div className="relative z-20 p-6 text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-red-400" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <p className="text-sm text-zinc-400">{stat.desc}</p>
                </div>
              </CardSpotlight>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}