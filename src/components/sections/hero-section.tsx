import { Badge } from "@/components/ui/badge"
import { Target } from "lucide-react"

export function HeroSection() {
  return (
    <>
      {/* Hero Badge */}
      <div className="mb-6">
        <div className="inline-block">
          <Badge className="px-4 py-2 text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
            Ti paghiamo €1 per iscriverti
          </Badge>
        </div>
      </div>
      
      {/* Hero Title */}
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
        <span className="text-white">
          Stop al Telemarketing
        </span>
        <br />
        <span className="text-accent">
          Selvaggio
        </span>
      </h1>
      
      {/* Hero Description */}
      <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
        La prima piattaforma italiana che <span className="font-semibold text-white">certifica le aziende legittime</span> e 
        combatte quelle abusive attraverso <span className="font-semibold text-white">azioni legali collettive</span>.
      </p>
      
      {/* Goal Counter Static Content */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
          <Target className="w-4 h-4 text-emerald-400 mr-2" />
          <span className="text-sm font-medium text-emerald-400">OBIETTIVO FASE 1</span>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-1">4.247</div>
          <p className="text-sm text-neutral-400">Pre-registrazioni</p>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-1">300.000</div>
          <p className="text-sm text-neutral-400">Goal Fase 1</p>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-emerald-400 mb-1">1,4%</div>
          <p className="text-sm text-neutral-400">Completato</p>
        </div>
      </div>

      <div className="text-center">
        <p className="text-white font-medium mb-1">€1 per iscriverti + €1 per ogni referral</p>
        <p className="text-sm text-neutral-400">
          Iniziamo solo se raggiungiamo 300.000 registrazioni WhatsApp.
        </p>
      </div>
    </>
  )
}