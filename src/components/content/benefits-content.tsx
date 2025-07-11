import { CheckCircle } from "lucide-react"
import { GradientCard } from "@/components/ui/card-variants"

const userBenefits = [
  "Identificazione immediata chiamate legittime",
  "Protezione da truffe e call center abusivi",
  "Guadagno per ogni segnalazione utile",
  "Azioni legali collettive gratuite"
]

const businessBenefits = [
  "Spunta verde per chiamate certificate",
  "Maggiore fiducia e tassi di risposta",
  "Protezione del brand da truffe",
  "Analytics dettagliate e compliance"
]

export function BenefitsContent() {
  return (
    <section className="section-divider py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Perché Funziona
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Un approccio unico che combina tecnologia, legalità e incentivi economici.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* User Benefits Card */}
          <GradientCard variant="emerald" containerClassName="h-full">
            <h3 className="text-2xl font-bold text-white mb-6">Vantaggi per gli Utenti</h3>
            <div className="space-y-4">
              {userBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-neutral-300">{benefit}</span>
                </div>
              ))}
            </div>
          </GradientCard>

          {/* Business Benefits Card */}
          <GradientCard variant="blue" containerClassName="h-full">
            <h3 className="text-2xl font-bold text-white mb-6">Vantaggi per le Aziende</h3>
            <div className="space-y-4">
              {businessBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-neutral-300">{benefit}</span>
                </div>
              ))}
            </div>
          </GradientCard>
        </div>
      </div>
    </section>
  )
}