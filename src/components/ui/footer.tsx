import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Mail, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Unisciti a Opponiti
        </h2>
        <p className="text-neutral-400 mb-8 text-lg">
          Ti paghiamo €1 per iscriverti e fermare insieme il telemarketing selvaggio
        </p>
        <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white border-0">
          Registrati Gratis
        </Button>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Contact & Social */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <span className="text-white font-bold text-xl">Opponiti</span>
            </div>
            
            <div className="space-y-4">
              <a href="mailto:info@opponiti.com" className="flex items-center text-neutral-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                info@opponiti.com
              </a>
              
              <div className="flex space-x-3">
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Prodotto</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-neutral-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/roadmap" className="text-neutral-400 hover:text-white transition-colors">Piano</Link></li>
              <li><Link href="/aziende" className="text-neutral-400 hover:text-white transition-colors">Per Aziende</Link></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">App Mobile</a></li>
            </ul>
          </div>

          {/* Risorse */}
          <div>
            <h3 className="text-white font-semibold mb-4">Risorse</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Come Funziona</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Supporto</a></li>
            </ul>
          </div>

          {/* Azienda */}
          <div>
            <h3 className="text-white font-semibold mb-4">Azienda</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Chi Siamo</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Missione</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Stampa</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Contatti</a></li>
            </ul>
          </div>

          {/* Legale */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legale</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Termini</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Cookie</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            © 2025 Opponiti. Tutti i diritti riservati.
          </p>
          <p className="text-neutral-500 text-xs mt-2 md:mt-0">
            Certificato per la protezione dei dati
          </p>
        </div>
      </div>
    </footer>
  )
}