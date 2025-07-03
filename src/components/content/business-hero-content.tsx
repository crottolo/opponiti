import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { Crown, Mail, ArrowRight } from "lucide-react"

export function BusinessHeroContent() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-6">
        <Badge className="px-4 py-2 text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
          Certificazione Aziendale
        </Badge>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
        <span className="text-white">
          Distinguiti dalla
        </span>
        <br />
        <span className="text-blue-400">
          Concorrenza Sleale
        </span>
      </h1>
      
      <p className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
        Certifica la tua azienda su Opponiti e ottieni la spunta verde per 
        tutte le tue chiamate legittime. Proteggi la tua reputazione e aumenta la fiducia dei clienti.
      </p>

      {/* Value Proposition */}
      <div className="mb-12">
        <CardSpotlight className="border-neutral-700 bg-neutral-950/90 max-w-3xl mx-auto">
          <div className="relative z-20 p-8 text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
              <Crown className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-xs font-medium text-yellow-400">TELEMARKETING LEGALE PREMIATO</span>
            </div>
            <p className="text-white">
              Le aziende certificate ottengono <span className="text-blue-400">maggiore fiducia</span>, 
              <span className="text-emerald-400"> tassi di risposta più alti</span> e protezione dalla concorrenza sleale.
            </p>
          </div>
        </CardSpotlight>
      </div>

      {/* CTA */}
      <div className="mb-20">
        <Button className="h-12 px-8 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-200">
          <Mail className="w-4 h-4 mr-2" />
          Richiedi Demo
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
        <p className="text-sm text-zinc-500 mt-3">
          Consulenza gratuita per la tua azienda
        </p>
      </div>
    </div>
  )
}