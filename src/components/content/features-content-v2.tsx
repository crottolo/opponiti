import { BackgroundGradient } from "@/components/ui/background-gradient"
import { 
  Target,
  Shield,
  Trophy
} from "lucide-react"

interface FeaturesContentV2Props {
  animated?: boolean
}

export function FeaturesContentV2({}: FeaturesContentV2Props) {
  const steps = [
    {
      number: "1",
      title: "Registrati e Guadagna",
      description: "Ti paghiamo €1 per iscriverti. Accumula crediti invitando amici.",
      icon: <Target className="w-8 h-8 text-emerald-400" />,
      gradient: "from-emerald-500/20 to-emerald-600/20"
    },
    {
      number: "2", 
      title: "Segnala gli Abusi",
      description: "Registra chiamate indesiderate e costruisci prove legali.",
      icon: <Shield className="w-8 h-8 text-red-400" />,
      gradient: "from-red-500/20 to-red-600/20"
    },
    {
      number: "3",
      title: "Azione Collettiva",
      description: "Unisciti a migliaia di utenti per azioni legali vincenti.",
      icon: <Trophy className="w-8 h-8 text-blue-400" />,
      gradient: "from-blue-500/20 to-blue-600/20"
    }
  ]

  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Come Funziona
        </h2>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
          3 semplici passi per fermare il telemarketing e guadagnare
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {steps.map((step) => (
          <BackgroundGradient 
            key={step.number} 
            className="rounded-[22px] p-6 sm:p-8 bg-white dark:bg-zinc-900 h-full"
            containerClassName="h-full"
            animate={false}
          >
            <div className="space-y-4 h-full flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-5xl font-bold text-neutral-700">{step.number}</span>
                {step.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">{step.description}</p>
              </div>
            </div>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  )
}