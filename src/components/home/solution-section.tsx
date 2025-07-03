import { CardSpotlight } from "@/components/ui/card-spotlight"
import { ShieldCheck, CheckCircle, ArrowRight } from "lucide-react"

export function SolutionSection() {
  return (
    <section id="soluzione" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            La <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Soluzione</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Un sistema rivoluzionario che distingue le aziende legittime da quelle abusive.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <CardSpotlight className="glass-card p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-emerald-500/20 rounded-full flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Certificazione</h3>
            <p className="text-gray-400 text-sm">Identifichiamo le aziende legittime con spunta verde</p>
          </CardSpotlight>

          <CardSpotlight className="glass-card p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Protezione</h3>
            <p className="text-gray-400 text-sm">Blocchiamo automaticamente le chiamate abusive</p>
          </CardSpotlight>

          <CardSpotlight className="glass-card p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Azioni Legali</h3>
            <p className="text-gray-400 text-sm">Procediamo insieme contro le aziende abusive</p>
          </CardSpotlight>
        </div>

        <div className="text-center">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">Come Funziona</h3>
            <div className="space-y-4">
              <div className="flex items-center text-left">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-emerald-400 font-bold">1</span>
                </div>
                <span className="text-gray-300">Ti iscrivi gratis e ricevi €1</span>
              </div>
              <div className="flex items-center text-left">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-400 font-bold">2</span>
                </div>
                <span className="text-gray-300">Riconosci le aziende certificate</span>
              </div>
              <div className="flex items-center text-left">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-400 font-bold">3</span>
                </div>
                <span className="text-gray-300">Partecipi alle azioni legali collettive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}