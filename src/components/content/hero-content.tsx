import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  MessageCircle,
  ArrowRight
} from "lucide-react"

interface HeroContentProps {
  animated?: boolean
}

export function HeroContent({ animated = false }: HeroContentProps) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column - Content */}
        <div className="space-y-6">
          
          <Badge className="px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full w-fit">
            💰 TI PAGHIAMO €1 PER ISCRIVERTI!
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white">
            Stop al<br />
            <span className="text-red-400">Telemarketing Selvaggio</span>
          </h1>
          
          <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
            La prima piattaforma italiana che certifica le aziende legittime e 
            combatte quelle abusive attraverso azioni legali collettive.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="h-12 px-8 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-all duration-200">
              <MessageCircle className="w-4 h-4 mr-2" />
              Registrati Ora
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            
            <div className="flex items-center text-sm text-zinc-500">
              🎯 4.247 utenti già registrati
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-800">
            <div>
              <div className="text-2xl font-bold text-emerald-400 mb-1">4.247</div>
              <p className="text-xs text-zinc-400">Pre-registrazioni</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-1">300k</div>
              <p className="text-xs text-zinc-400">Goal Fase 1</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-1">€1</div>
              <p className="text-xs text-zinc-400">Bonus garantito</p>
            </div>
          </div>
        </div>

        {/* Right Column - Image Placeholder */}
        <div className="relative">
          <div className="aspect-[4/3] bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl border border-neutral-700 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center text-zinc-500">
                <div className="w-16 h-16 mx-auto mb-4 bg-neutral-700 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm">Aggiungi qui la tua immagine</p>
                <p className="text-xs mt-1 text-zinc-600">Ratio 4:3 • Max 800px</p>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-500/20 rounded-full blur-xl"></div>
        </div>
      </div>
    </div>
  )
}