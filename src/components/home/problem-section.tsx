import { CardSpotlight } from "@/components/ui/card-spotlight"
import { AlertTriangle, Shield, Gavel } from "lucide-react"

export function ProblemSection() {
  return (
    <section id="problema" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Il <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Problema</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ogni giorno milioni di italiani subiscono chiamate aggressive da aziende non autorizzate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <CardSpotlight className="glass-card p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">15M+ Chiamate</h3>
            <p className="text-gray-400 text-sm">Chiamate indesiderate ogni giorno in Italia</p>
          </CardSpotlight>

          <CardSpotlight className="glass-card p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-orange-500/20 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">€2.3 Miliardi</h3>
            <p className="text-gray-400 text-sm">Danni economici annui stimati</p>
          </CardSpotlight>

          <CardSpotlight className="glass-card p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
              <Gavel className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">0.1% Puniti</h3>
            <p className="text-gray-400 text-sm">Aziende effettivamente sanzionate</p>
          </CardSpotlight>
        </div>
      </div>
    </section>
  )
}