import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Users, Award } from "lucide-react"

export function WhatsAppSection() {
  return (
    <Card className="max-w-2xl mx-auto bg-gradient-to-br from-emerald-900/60 to-blue-900/60 backdrop-blur-xl border-emerald-500/30 shadow-2xl">
      <CardHeader className="text-center pb-6">
        <div className="flex items-center justify-center mb-4">
          <MessageCircle className="w-12 h-12 text-emerald-400 mr-3" />
          <CardTitle className="text-3xl text-white">Registrazione Smart via WhatsApp</CardTitle>
        </div>
        <CardDescription className="text-lg text-gray-300">
          Niente email complicate! Il nostro bot AI su WhatsApp ti guiderà in 2 minuti.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-emerald-400" />
            </div>
            <h4 className="font-semibold text-white mb-2">1. Clicca e chatta</h4>
            <p className="text-gray-400 text-sm">Il bot ti accoglie e spiega tutto</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
              <Users className="w-8 h-8 text-blue-400" />
            </div>
            <h4 className="font-semibold text-white mb-2">2. Conferma i dati</h4>
            <p className="text-gray-400 text-sm">Nome, città e conferma partecipazione</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
              <Award className="w-8 h-8 text-purple-400" />
            </div>
            <h4 className="font-semibold text-white mb-2">3. Sei dentro!</h4>
            <p className="text-gray-400 text-sm">Ricevi aggiornamenti e il tuo €1 quando partiamo</p>
          </div>
        </div>

        <div className="bg-emerald-500/20 rounded-lg p-4 text-center border border-emerald-500/30">
          <p className="text-sm text-emerald-200 font-medium">
            💚 <span className="font-semibold text-emerald-400">Registrazione semplice</span> • 
            🤖 <span className="font-semibold text-blue-400">Bot AI intelligente</span> • 
            💰 <span className="font-semibold text-purple-400">€1 garantito al lancio</span>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}