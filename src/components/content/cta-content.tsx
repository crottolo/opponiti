import { Button } from "@/components/ui/button"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { MessageCircle, ArrowRight } from "lucide-react"

export function CTAContent() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <CardSpotlight className="border-neutral-700 bg-neutral-950/90">
          <div className="relative z-20 p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Unisciti alla Rivoluzione
            </h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Basta telemarketing selvaggio. È ora di cambiare le regole del gioco per sempre.
            </p>
            <Button className="h-12 px-8 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-all duration-200">
              <MessageCircle className="w-4 h-4 mr-2" />
              Inizia Ora - €1 Garantito
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardSpotlight>
      </div>
    </section>
  )
}