import { Card } from "@/components/ui/card"
import { Users, Phone, Globe, XCircle } from "lucide-react"

export function ProblemSection() {
  const tactics = [
    { title: "Numeri Esteri", desc: "Usano numerazioni straniere per eludere la normativa italiana", color: "red" },
    { title: "False Identità", desc: "Si spacciano per aziende famose o enti pubblici", color: "orange" },
    { title: "Cambio Continuo", desc: "Modificano costantemente i numeri per evitare blocchi", color: "yellow" },
    { title: "Consensi Fantasma", desc: "Affermano di avere consensi mai rilasciati realmente", color: "purple" }
  ]

  return (
    <section id="problema" className="relative py-20 bg-gradient-to-b from-gray-900/50 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Il Problema è <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Reale</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Il telemarketing selvaggio in Italia è fuori controllo. Le cifre parlano chiaro.
          </p>
        </div>

        <Card className="bg-gray-900/60 backdrop-blur-xl border-gray-700/50 p-8 hover:border-gray-600/70 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-6 text-center text-white">Tattiche Comuni dei Call Center Abusivi</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {tactics.map((tactic, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-3 p-4 rounded-lg bg-gray-800/40 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300"
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1
                  ${tactic.color === 'red' ? 'bg-red-500/20 border border-red-500/40' :
                    tactic.color === 'orange' ? 'bg-orange-500/20 border border-orange-500/40' :
                    tactic.color === 'yellow' ? 'bg-yellow-500/20 border border-yellow-500/40' :
                    'bg-purple-500/20 border border-purple-500/40'}`}>
                  <div className={`w-2 h-2 rounded-full
                    ${tactic.color === 'red' ? 'bg-red-400' :
                      tactic.color === 'orange' ? 'bg-orange-400' :
                      tactic.color === 'yellow' ? 'bg-yellow-400' :
                      'bg-purple-400'}`}></div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{tactic.title}</h4>
                  <p className="text-gray-400 text-sm">{tactic.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}