"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  ArrowRight
} from "lucide-react"

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <motion.div 
                className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-2xl"
                whileHover={{ 
                  boxShadow: "0 0 30px rgba(239, 68, 68, 0.8)",
                  scale: 1.1 
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Shield className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Opponiti
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">Home</Link>
              <Link href="/aziende" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Aziende</Link>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-0 shadow-lg">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Iscriviti ora
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="px-6 py-3 text-lg font-bold bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-0 shadow-2xl mb-6">
              🗺️ ROADMAP DI SVILUPPO
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Il Nostro
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 bg-clip-text text-transparent">
                Piano di
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 bg-clip-text text-transparent">
                Battaglia
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              6 fasi per <span className="font-semibold text-white">rivoluzionare il telemarketing in Italia</span>. 
              Iniziamo solo se raggiungiamo il <span className="font-semibold text-emerald-400">primo goal</span> di pre-registrazioni.
            </p>

            {/* Current Goal Counter */}
            <div className="mb-16 p-8 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-3xl max-w-4xl mx-auto border border-emerald-500/30 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-emerald-400 mr-3" />
                <h3 className="text-3xl font-bold text-emerald-400">FASE 1 - OBIETTIVO ATTUALE</h3>
                <Target className="w-8 h-8 text-emerald-400 ml-3" />
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-black text-emerald-400 mb-2">4.247</div>
                  <p className="text-gray-300">Pre-registrazioni</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-blue-400 mb-2">300.000</div>
                  <p className="text-gray-300">Goal Fase 1</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-purple-400 mb-2">1,4%</div>
                  <p className="text-gray-300">Completato</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-4 mb-6">
                <motion.div 
                  className="bg-gradient-to-r from-emerald-500 to-blue-500 h-4 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "1.4%" }}
                  transition={{ duration: 2, delay: 1 }}
                ></motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="w-full h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-0 shadow-lg text-xl">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Aiutaci a raggiungere 300.000 su WhatsApp!
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Phases */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Le <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">6 Fasi</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ogni fase si sblocca solo raggiungendo il goal della precedente. <span className="font-semibold text-white">Servono 300k italiani che ci credono!</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                phase: "Fase 1", 
                title: "Validazione Mercato", 
                goal: "300.000 pre-registrazioni", 
                status: "current",
                icon: Target,
                color: "emerald"
              },
              { 
                phase: "Fase 2", 
                title: "Fundraising & Team", 
                goal: "€300k seed + team legale", 
                status: "locked",
                icon: DollarSign,
                color: "blue"
              },
              { 
                phase: "Fase 3", 
                title: "MVP Development", 
                goal: "App funzionante", 
                status: "locked",
                icon: Smartphone,
                color: "purple"
              },
              { 
                phase: "Fase 4", 
                title: "Integrazioni", 
                goal: "API complete", 
                status: "locked",
                icon: CheckCircle,
                color: "orange"
              },
              { 
                phase: "Fase 5", 
                title: "Azioni Legali", 
                goal: "Prime cause vinte", 
                status: "locked",
                icon: Gavel,
                color: "red"
              },
              { 
                phase: "Fase 6", 
                title: "Scale & Expansion", 
                goal: "Leadership mercato", 
                status: "locked",
                icon: Rocket,
                color: "indigo"
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`relative h-full bg-gradient-to-br from-gray-900/80 to-${phase.color}-900/20 backdrop-blur-xl border-gray-700/50 shadow-xl transition-all duration-300 ${
                  phase.status === 'current' ? 'ring-2 ring-emerald-500/50' : ''
                } ${phase.status === 'locked' ? 'opacity-60' : ''}`}>
                  
                  {phase.status === 'current' && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 font-semibold border-0 shadow-lg">
                        🎯 IN CORSO
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-6 pt-8">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-${phase.color}-500/20 border border-${phase.color}-500/30`}>
                      <phase.icon className={`w-8 h-8 text-${phase.color}-400`} />
                    </div>
                    <CardTitle className="text-xl text-white">{phase.phase}: {phase.title}</CardTitle>
                    <p className="text-gray-400 mt-2">{phase.goal}</p>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Link href="/" className="flex items-center justify-center space-x-3 mb-6">
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-2xl"
                whileHover={{ 
                  boxShadow: "0 0 30px rgba(239, 68, 68, 0.8)",
                  scale: 1.1 
                }}
              >
                <Shield className="w-7 h-7 text-white" />
              </motion.div>
              <span className="text-3xl font-bold">Opponiti</span>
            </Link>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Il piano per liberare l&apos;Italia dal telemarketing selvaggio. Una fase alla volta, un goal alla volta.
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">&copy; 2025 Opponiti. Il futuro inizia quando raggiungiamo 300.000 registrazioni.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}