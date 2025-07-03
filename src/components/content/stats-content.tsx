import { GradientCard } from "@/components/ui/card-variants"
import { 
  Users, 
  Phone, 
  Shield, 
  DollarSign
} from "lucide-react"

const stats = [
  { 
    number: "87%", 
    desc: "degli italiani riceve chiamate indesiderate", 
    icon: Users,
    variant: "red" as const,
    color: "text-red-400"
  },
  { 
    number: "6.2", 
    desc: "chiamate spam al giorno in media", 
    icon: Phone,
    variant: "red" as const,
    color: "text-red-400"
  },
  { 
    number: "73%", 
    desc: "usa numeri esteri per eludere controlli", 
    icon: Shield,
    variant: "red" as const,
    color: "text-red-400"
  },
  { 
    number: "€0", 
    desc: "conseguenze reali per chi abusa", 
    icon: DollarSign,
    variant: "red" as const,
    color: "text-red-400"
  }
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
            <GradientCard 
              key={index} 
              variant={stat.variant}
              containerClassName="h-full"
            >
              <div className="text-center">
                <div className="mb-4 mx-auto w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-white mb-3">{stat.number}</div>
                <p className="text-sm text-neutral-300 leading-relaxed">{stat.desc}</p>
              </div>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  )
}