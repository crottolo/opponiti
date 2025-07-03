"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { motion } from "framer-motion"
import { 
  Shield,
  Target,
  DollarSign,
  Smartphone,
  Gavel,
  Rocket,
  CheckCircle,
  MessageCircle,
  ArrowRight,
  Lock
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden professional-bg subtle-grid">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <Badge className="px-4 py-2 text-sm font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full">
                Roadmap di Sviluppo
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight"
            >
              <span className="text-white">
                Il Nostro Piano di
              </span>
              <br />
              <span className="text-purple-400">
                Battaglia
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              6 fasi per rivoluzionare il telemarketing in Italia. 
              Iniziamo solo se raggiungiamo il primo goal di pre-registrazioni.
            </motion.p>

            {/* Current Goal */}
            <motion.div variants={fadeInUp} className="mb-12">
              <CardSpotlight className="border-neutral-700 bg-neutral-950/90 max-w-3xl mx-auto">
                <div className="relative z-20">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                      <Target className="w-4 h-4 text-emerald-400 mr-2" />
                      <span className="text-xs font-medium text-emerald-400">FASE 1 - OBIETTIVO ATTUALE</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-8 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">4.247</div>
                      <p className="text-xs text-neutral-400">Pre-registrazioni</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">300.000</div>
                      <p className="text-xs text-neutral-400">Goal Fase 1</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-400 mb-1">1,4%</div>
                      <p className="text-xs text-neutral-400">Completato</p>
                    </div>
                  </div>

                  <div className="w-full bg-neutral-800 rounded-full h-1 mb-6">
                    <motion.div 
                      className="bg-emerald-400 h-1 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "1.4%" }}
                      transition={{ duration: 2, delay: 1 }}
                    ></motion.div>
                  </div>

                  <div className="text-center">
                    <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Aiutaci a raggiungere 300.000
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardSpotlight>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Phases */}
      <section className="section-divider py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Le 6 Fasi
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Ogni fase si sblocca solo raggiungendo il goal della precedente. 
              Servono 300k italiani che ci credono!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                phase: "Fase 1", 
                title: "Validazione Mercato", 
                goal: "300.000 pre-registrazioni", 
                status: "current",
                icon: Target,
                description: "Dimostrare che il mercato vuole davvero la soluzione"
              },
              { 
                phase: "Fase 2", 
                title: "Fundraising & Team", 
                goal: "€300k seed + team legale", 
                status: "locked",
                icon: DollarSign,
                description: "Raccogliere fondi e assemblare il team giusto"
              },
              { 
                phase: "Fase 3", 
                title: "MVP Development", 
                goal: "App funzionante", 
                status: "locked",
                icon: Smartphone,
                description: "Sviluppare la prima versione dell'applicazione"
              },
              { 
                phase: "Fase 4", 
                title: "Integrazioni", 
                goal: "API complete", 
                status: "locked",
                icon: CheckCircle,
                description: "Integrare con sistemi di telecomunicazioni"
              },
              { 
                phase: "Fase 5", 
                title: "Azioni Legali", 
                goal: "Prime cause vinte", 
                status: "locked",
                icon: Gavel,
                description: "Avviare le prime azioni legali collettive"
              },
              { 
                phase: "Fase 6", 
                title: "Scale & Expansion", 
                goal: "Leadership mercato", 
                status: "locked",
                icon: Rocket,
                description: "Espansione e dominio del mercato italiano"
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CardSpotlight 
                  className={`border-neutral-700 bg-neutral-950/90 h-full ${
                    phase.status === 'current' ? 'ring-2 ring-emerald-500/50' : ''
                  } ${phase.status === 'locked' ? 'opacity-60' : ''}`}
                >
                  <div className="relative z-20 p-6">
                    {phase.status === 'current' && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-emerald-500 text-white border-0 px-3 py-1 text-xs font-medium">
                          IN CORSO
                        </Badge>
                      </div>
                    )}

                    <div className="text-center mb-4">
                      <div className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center ${
                        phase.status === 'current' 
                          ? 'bg-emerald-500/20 border border-emerald-500/30' 
                          : 'bg-neutral-700/50 border border-neutral-600'
                      }`}>
                        {phase.status === 'locked' ? (
                          <Lock className="w-6 h-6 text-neutral-500" />
                        ) : (
                          <phase.icon className={`w-6 h-6 ${
                            phase.status === 'current' ? 'text-emerald-400' : 'text-neutral-400'
                          }`} />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-1">{phase.phase}</h3>
                      <h4 className="text-sm font-medium text-zinc-300 mb-2">{phase.title}</h4>
                      <p className="text-xs text-zinc-500 mb-3">{phase.goal}</p>
                      <p className="text-xs text-zinc-400">{phase.description}</p>
                    </div>
                  </div>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-divider py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <CardSpotlight className="border-neutral-700 bg-neutral-950/90">
              <div className="relative z-20 p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Tutto Inizia da Te
                </h2>
                <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
                  Senza il supporto di 300.000 italiani, questo rimane solo un sogno. 
                  Con il tuo aiuto, diventa realtà.
                </p>
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Iscriviti e Aiutaci a Partire
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </CardSpotlight>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Opponiti</span>
          </div>
          <p className="text-zinc-400 mb-6">
            Il piano per liberare l'Italia dal telemarketing selvaggio. Una fase alla volta, un goal alla volta.
          </p>
          <p className="text-sm text-zinc-500">
            © 2025 Opponiti. Il futuro inizia quando raggiungiamo 300.000 registrazioni.
          </p>
        </div>
      </footer>
    </div>
  )
}