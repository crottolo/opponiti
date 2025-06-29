"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { 
  Shield,
  Target,
  DollarSign,
  Smartphone,
  Link,
  Gavel,
  Rocket,
  Users,
  CheckCircle,
  Clock,
  TrendingUp,
  Zap,
  MessageCircle,
  Bot,
  Calendar,
  Award,
  Building2,
  Globe,
  ArrowRight,
  Timer
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
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

const roadmapPhases = [
  {
    phase: "Fase 1",
    title: "Validazione Mercato",
    duration: "0-3 mesi",
    goal: "5.000 pre-registrazioni WhatsApp",
    status: "current",
    color: "emerald",
    icon: Target,
    description: "Verifichiamo che l'idea piaccia agli italiani",
    milestones: [
      "Pre-registrazione tramite WhatsApp Bot AI",
      "Landing con contatore live goal",
      "Campagna social per awareness",
      "Survey e feedback collection"
    ],
    unlock: "Raggiungere 5k registrazioni → Unlock Fase 2"
  },
  {
    phase: "Fase 2",
    title: "Fundraising & Team",
    duration: "3-6 mesi",
    goal: "€300k seed + team legale",
    status: "locked",
    color: "blue",
    icon: DollarSign,
    description: "Costruiamo le fondamenta per lo sviluppo",
    milestones: [
      "Pitch deck e ricerca investitori",
      "Partnership con studi legali specializzati",
      "Team development (2-3 sviluppatori)",
      "Compliance e setup aziendale"
    ],
    unlock: "Seed round chiuso → Unlock sviluppo"
  },
  {
    phase: "Fase 3",
    title: "MVP Development",
    duration: "6-12 mesi",
    goal: "App funzionante + prime certificazioni",
    status: "locked",
    color: "purple",
    icon: Smartphone,
    description: "Sviluppiamo il prodotto principale",
    milestones: [
      "App mobile iOS/Android",
      "Backend per certificazioni aziende",
      "Sistema pagamenti e bonus €1",
      "Dashboard amministrazione"
    ],
    unlock: "50 aziende certificate → Unlock API"
  },
  {
    phase: "Fase 4",
    title: "Integrazioni",
    duration: "12-18 mesi",
    goal: "API complete + Registro Opposizioni",
    status: "locked",
    color: "orange",
    icon: Link,
    description: "Integriamo con sistemi esterni",
    milestones: [
      "API verifica numeri per operatori",
      "Integrazione Registro delle Opposizioni",
      "Sistema notifiche push avanzato",
      "Partnership operatori telefonici"
    ],
    unlock: "10k utenti attivi → Unlock scala"
  },
  {
    phase: "Fase 5",
    title: "Azioni Legali",
    duration: "18-24 mesi",
    goal: "Prime cause vinte + revenue share",
    status: "locked",
    color: "red",
    icon: Gavel,
    description: "Iniziamo a combattere gli abusivi",
    milestones: [
      "Avvio prime azioni legali collettive",
      "Sistema revenue sharing per utenti",
      "Espansione team legale",
      "Database completo aziende abusive"
    ],
    unlock: "3 cause vinte → Unlock espansione"
  },
  {
    phase: "Fase 6",
    title: "Scale & Expansion",
    duration: "24+ mesi",
    goal: "Leadership mercato italiano",
    status: "locked",
    color: "indigo",
    icon: Rocket,
    description: "Dominiamo il mercato e espandiamo",
    milestones: [
      "Automazione investigazioni AI",
      "Espansione EU (Spagna, Francia)",
      "API licensing B2B",
      "IPO o acquisizione strategica"
    ],
    unlock: "Target: 100k+ utenti, €1M+ ARR"
  }
]

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
            <a href="/" className="flex items-center space-x-3">
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
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">Home</a>
              <a href="/aziende" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Aziende</a>
              <a href="#fasi" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Piano</a>
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
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <Badge className="px-6 py-3 text-lg font-bold bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-0 shadow-2xl">
                🗺️ ROADMAP DI SVILUPPO
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-6xl md:text-8xl font-black tracking-tight mb-6"
            >
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
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              6 fasi per <span className="font-semibold text-white">rivoluzionare il telemarketing in Italia</span>. 
              Iniziamo solo se raggiungiamo il <span className="font-semibold text-emerald-400">primo goal</span> di pre-registrazioni.
            </motion.p>

            {/* Current Goal Counter */}
            <motion.div 
              variants={fadeInUp}
              className="mb-16 p-8 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-3xl max-w-4xl mx-auto border border-emerald-500/30 backdrop-blur-sm"
            >
              <div className="flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-emerald-400 mr-3" />
                <h3 className="text-3xl font-bold text-emerald-400">FASE 1 - OBIETTIVO ATTUALE</h3>
                <Target className="w-8 h-8 text-emerald-400 ml-3" />
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-black text-emerald-400 mb-2">1.247</div>
                  <p className="text-gray-300">Pre-registrazioni</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-blue-400 mb-2">5.000</div>
                  <p className="text-gray-300">Goal Fase 1</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-purple-400 mb-2">25%</div>
                  <p className="text-gray-300">Completato</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-4 mb-6">
                <motion.div 
                  className="bg-gradient-to-r from-emerald-500 to-blue-500 h-4 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "25%" }}
                  transition={{ duration: 2, delay: 1 }}
                ></motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="w-full h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-0 shadow-lg text-xl">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Iscriviti su WhatsApp e aiutaci a raggiungere 5.000!
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Phases */}
      <section id="fasi" className="relative py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Le <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">6 Fasi</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ogni fase si sblocca solo raggiungendo il goal della precedente. <span className="font-semibold text-white">Iniziamo solo se voi ci credete!</span>
            </p>
          </motion.div>

          <div className="space-y-12">
            {roadmapPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`relative bg-gradient-to-br from-gray-900/80 to-${phase.color}-900/20 backdrop-blur-xl border-gray-700/50 shadow-2xl hover:border-gray-600/70 transition-all duration-300 ${
                  phase.status === 'current' ? 'ring-2 ring-emerald-500/50' : ''
                } ${phase.status === 'locked' ? 'opacity-60' : ''}`}>
                  
                  {/* Status Badge */}
                  <div className="absolute -top-4 left-8">
                    <Badge className={`px-4 py-2 font-semibold ${
                      phase.status === 'current' 
                        ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white' 
                        : phase.status === 'locked'
                        ? 'bg-gray-600 text-gray-300'
                        : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                    }`}>
                      {phase.status === 'current' ? '🎯 IN CORSO' : phase.status === 'locked' ? '🔒 BLOCCATA' : '✅ COMPLETATA'}
                    </Badge>
                  </div>

                  <CardHeader className="pb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-${phase.color}-500/20 border border-${phase.color}-500/30`}>
                          <phase.icon className={`w-8 h-8 text-${phase.color}-400`} />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-white">{phase.phase}: {phase.title}</CardTitle>
                          <div className="flex items-center space-x-4 mt-2">
                            <Badge variant="outline" className="text-gray-300 border-gray-600">
                              <Clock className="w-3 h-3 mr-1" />
                              {phase.duration}
                            </Badge>
                            <Badge variant="outline" className={`text-${phase.color}-400 border-${phase.color}-500/30`}>
                              <Target className="w-3 h-3 mr-1" />
                              {phase.goal}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-lg text-gray-300">
                      {phase.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-white text-lg mb-4 flex items-center">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                        Milestone da raggiungere:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.milestones.map((milestone, mIndex) => (
                          <div key={mIndex} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-800/40 border border-gray-700/30">
                            <div className={`w-2 h-2 rounded-full bg-${phase.color}-400 mt-2 flex-shrink-0`}></div>
                            <span className="text-gray-300 text-sm">{milestone}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg bg-gradient-to-r from-${phase.color}-500/20 to-${phase.color}-600/20 border border-${phase.color}-500/30`}>
                      <p className="font-bold text-white flex items-center">
                        <Zap className={`w-4 h-4 text-${phase.color}-400 mr-2`} />
                        {phase.unlock}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-emerald-900/60 to-blue-900/60 backdrop-blur-xl border-emerald-500/30 shadow-2xl">
              <CardHeader className="pb-6">
                <div className="flex items-center justify-center mb-4">
                  <Bot className="w-12 h-12 text-emerald-400 mr-3" />
                  <CardTitle className="text-3xl text-white">Registrazione Smart via WhatsApp</CardTitle>
                </div>
                <CardDescription className="text-lg text-gray-300">
                  Niente email complicate! Il nostro bot AI su WhatsApp ti guiderà nella registrazione in 2 minuti.
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

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-0 shadow-lg text-xl">
                    <MessageCircle className="w-6 h-6 mr-3" />
                    Inizia su WhatsApp - Registrazione Gratuita
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Button>
                </motion.div>

                <p className="text-sm text-gray-400">
                  💚 <span className="font-semibold text-emerald-400">Registrazione semplice</span> • 
                  🤖 <span className="font-semibold text-blue-400">Bot AI intelligente</span> • 
                  💰 <span className="font-semibold text-purple-400">€1 garantito al lancio</span>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <a href="/" className="flex items-center justify-center space-x-3 mb-6">
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
            </a>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Il piano per liberare l'Italia dal telemarketing selvaggio. Una fase alla volta, un goal alla volta.
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