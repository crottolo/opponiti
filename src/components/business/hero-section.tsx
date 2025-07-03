import { Badge } from "@/components/ui/badge"
import { Crown } from "lucide-react"

export function BusinessHeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <Badge className="px-4 py-2 text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
            Certificazione Aziendale
          </Badge>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Distinguiti dalla
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Concorrenza Sleale
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Certifica la tua azienda su Opponiti e ottieni la spunta verde per 
          tutte le tue chiamate legittime. Proteggi la tua reputazione e aumenta la fiducia dei clienti.
        </p>
        
        <div className="mb-8 p-6 glass-card max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Crown className="w-6 h-6 text-yellow-400 mr-2" />
            <h3 className="text-2xl font-bold text-blue-400">Telemarketing Legale Premiato</h3>
            <Crown className="w-6 h-6 text-yellow-400 ml-2" />
          </div>
          <p className="text-gray-300">
            Le aziende certificate ottengono <span className="font-semibold text-white">maggiore fiducia</span>, 
            <span className="font-semibold text-white"> tassi di risposta più alti</span> e protezione dalla concorrenza sleale.
          </p>
        </div>
      </div>
    </section>
  )
}