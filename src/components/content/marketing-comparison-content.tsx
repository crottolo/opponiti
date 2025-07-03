// import { FocusCards } from "@/components/ui/focus-cards"
import { Check, X } from "lucide-react"

interface MarketingComparisonContentProps {
  animated?: boolean
}

export function MarketingComparisonContent({}: MarketingComparisonContentProps) {
  // const comparisons = [
  //   {
  //     title: "Marketing Tradizionale",
  //     src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
  //   },
  //   {
  //     title: "Marketing Rivoluzionario", 
  //     src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
  //   },
  //   {
  //     title: "Il Futuro è Qui",
  //     src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop",
  //   }
  // ]

  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Marketing Rivoluzionario
        </h2>
        <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
          Invece di sprecare milioni in pubblicità fastidiose, ti paghiamo direttamente
        </p>
      </div>

      {/* <div className="mb-16">
        <FocusCards cards={comparisons} />
      </div> */}

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white mb-6">Vecchio Modello</h3>
          <div className="space-y-3">
            {[
              "Pubblicità invadente che disturba",
              "Costi enormi per acquisire clienti",
              "ROI negativo o minimo",
              "Utenti infastiditi e non fidelizzati"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-400">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white mb-6">Nostro Modello</h3>
          <div className="space-y-3">
            {[
              "Ti paghiamo per unirti a noi",
              "Costo di acquisizione: €1 per utente",
              "ROI garantito dalle azioni legali",
              "Community motivata e fedele"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-400">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}