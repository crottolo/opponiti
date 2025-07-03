import { Badge } from "@/components/ui/badge"
import { Target } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <Badge className="px-4 py-2 text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
            Ti paghiamo €1 per iscriverti
          </Badge>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Stop al
          </span>
          <br />
          <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Telemarketing Selvaggio
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          La prima piattaforma italiana che certifica le aziende legittime e 
          combatte quelle abusive attraverso azioni legali collettive.
        </p>
        
        {/* Goal Counter */}
        <div className="mb-8 p-6 glass-card max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Target className="w-6 h-6 text-emerald-400 mr-2" />
            <h3 className="text-2xl font-bold text-emerald-400">OBIETTIVO FASE 1</h3>
            <Target className="w-6 h-6 text-emerald-400 ml-2" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-1">4.247</div>
              <p className="text-gray-300 text-sm">Pre-registrazioni</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">300.000</div>
              <p className="text-gray-300 text-sm">Goal Fase 1</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">1,4%</div>
              <p className="text-gray-300 text-sm">Completato</p>
            </div>
          </div>

          <div className="w-full bg-gray-800 rounded-full h-3 mb-4">
            <div 
              className="bg-gradient-to-r from-emerald-500 to-blue-500 h-3 rounded-full"
              style={{ width: "1.4%" }}
            />
          </div>

          <p className="text-sm text-emerald-100 text-center">
            <span className="font-semibold text-white">€1 per iscriverti + €1 per ogni referral!</span><br/>
            Iniziamo solo se raggiungiamo 300.000 registrazioni.
          </p>
        </div>
      </div>
    </section>
  )
}