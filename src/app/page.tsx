"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { 
  Shield, 
  ShieldCheck, 
  AlertTriangle, 
  Gavel, 
  Users, 
  DollarSign, 
  CheckCircle, 
  XCircle,
  Phone,
  Star,
  ArrowRight,
  Target,
  Award,
  Globe,
  Mail,
  MapPin,
  Sparkles,
  MessageCircle
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

const glowAnimation = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(34, 197, 94, 0.3)",
      "0 0 40px rgba(34, 197, 94, 0.5)",
      "0 0 20px rgba(34, 197, 94, 0.3)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
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
              <a href="#problema" className="text-gray-300 hover:text-red-400 transition-colors font-medium">Il Problema</a>
              <a href="#soluzione" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">La Soluzione</a>
              <a href="/roadmap" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Piano</a>
              <a href="/aziende" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Per Aziende</a>
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
              <motion.div
                className="inline-block"
                animate={glowAnimation}
              >
                <Badge className="px-6 py-3 text-lg font-bold bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-0 shadow-2xl">
                  💰 TI PAGHIAMO €1 PER ISCRIVERTI!
                </Badge>
              </motion.div>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-6xl md:text-8xl font-black tracking-tight mb-6"
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Stop al
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
                Telemarketing
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent">
                Selvaggio
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed"
            >
              La prima piattaforma italiana che <span className="font-semibold text-white">certifica le aziende legittime</span> e 
              combatte quelle abusive attraverso <span className="font-semibold text-white">azioni legali collettive</span>.
            </motion.p>
            
            {/* Goal Counter */}
            <motion.div 
              variants={fadeInUp}
              className="mb-8 p-8 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-3xl max-w-4xl mx-auto border border-emerald-500/30 backdrop-blur-sm"
            >
              <div className="flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-emerald-400 mr-3" />
                <h3 className="text-3xl font-bold text-emerald-400">OBIETTIVO FASE 1</h3>
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

              <p className="text-lg text-emerald-100 text-center">
                <span className="font-bold text-white">€1 per iscriverti + €1 per ogni referral!</span><br/>
                Iniziamo solo se raggiungiamo 300.000 registrazioni WhatsApp.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="mb-8 p-6 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-3xl max-w-3xl mx-auto border border-emerald-500/30 backdrop-blur-sm"
            >
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-emerald-400 mr-3" />
                <h3 className="text-2xl font-bold text-emerald-400">Marketing Rivoluzionario</h3>
                <Sparkles className="w-8 h-8 text-emerald-400 ml-3" />
              </div>
              <p className="text-lg text-emerald-100 text-center">
                Invece di spendere milioni in pubblicità, <span className="font-bold text-white">ti paghiamo per usare l&apos;app</span>!
              </p>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.div variants={fadeInUp} className="mb-16">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="max-w-2xl mx-auto bg-gradient-to-br from-emerald-900/60 to-blue-900/60 backdrop-blur-xl border-emerald-500/30 shadow-2xl">
                  <CardHeader className="text-center pb-6">
                    <div className="flex items-center justify-center mb-4">
                      <MessageCircle className="w-12 h-12 text-emerald-400 mr-3" />
                      <CardTitle className="text-3xl text-white">Registrazione Smart via WhatsApp</CardTitle>
                    </div>
                    <CardDescription className="text-lg text-gray-300">
                      Niente email complicate! Il nostro bot AI su WhatsApp ti guiderà in 2 minuti.
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
                        Aiutaci a raggiungere 300.000 su WhatsApp!
                        <ArrowRight className="w-6 h-6 ml-3" />
                      </Button>
                    </motion.div>

                    <div className="bg-emerald-500/20 rounded-lg p-4 text-center border border-emerald-500/30">
                      <p className="text-sm text-emerald-200 font-medium">
                        💚 <span className="font-semibold text-emerald-400">Registrazione semplice</span> • 
                        🤖 <span className="font-semibold text-blue-400">Bot AI intelligente</span> • 
                        💰 <span className="font-semibold text-purple-400">€1 garantito al lancio</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              {[
                { icon: ShieldCheck, title: "Aziende Certificate", desc: "Spunta verde per chiamate legittime", color: "emerald", glow: "emerald" },
                { icon: AlertTriangle, title: "Segnala Abusi", desc: "Report facile e veloce", color: "red", glow: "red" },
                { icon: Gavel, title: "Azioni Legali", desc: "Cause collettive efficaci", color: "blue", glow: "blue" }
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: item.glow === 'emerald' 
                        ? "0 20px 40px rgba(16, 185, 129, 0.3)" 
                        : item.glow === 'red' 
                        ? "0 20px 40px rgba(239, 68, 68, 0.3)"
                        : "0 20px 40px rgba(59, 130, 246, 0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="h-full bg-gray-900/60 backdrop-blur-xl border-gray-700/50 shadow-xl hover:border-gray-600/70 transition-all duration-300">
                      <CardContent className="p-8 text-center">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center 
                          ${item.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 
                            item.color === 'red' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'}`}>
                          <item.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problema" className="relative py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Il Problema è <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Reale</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Il telemarketing selvaggio in Italia è fuori controllo. Le cifre parlano chiaro.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { number: "87%", desc: "degli italiani riceve chiamate indesiderate", icon: Users, color: "emerald" },
              { number: "6.2", desc: "chiamate spam al giorno in media", icon: Phone, color: "blue" },
              { number: "73%", desc: "usa numeri esteri per eludere controlli", icon: Globe, color: "purple" },
              { number: "€0", desc: "conseguenze reali per chi abusa", icon: XCircle, color: "red" }
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-gray-900/60 backdrop-blur-xl border-gray-700/50 text-center p-6 hover:border-gray-600/70 transition-all duration-300 group">
                    <stat.icon className={`w-8 h-8 mx-auto mb-4 
                      ${stat.color === 'emerald' ? 'text-emerald-400' : 
                        stat.color === 'blue' ? 'text-blue-400' : 
                        stat.color === 'purple' ? 'text-purple-400' : 'text-red-400'} 
                      group-hover:scale-110 transition-transform`} />
                    <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <p className="text-gray-400 text-sm">{stat.desc}</p>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900/60 backdrop-blur-xl border-gray-700/50 p-8 hover:border-gray-600/70 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-center text-white">Tattiche Comuni dei Call Center Abusivi</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Numeri Esteri", desc: "Usano numerazioni straniere per eludere la normativa italiana", color: "red" },
                  { title: "False Identità", desc: "Si spacciano per aziende famose o enti pubblici", color: "orange" },
                  { title: "Cambio Continuo", desc: "Modificano costantemente i numeri per evitare blocchi", color: "yellow" },
                  { title: "Consensi Fantasma", desc: "Affermano di avere consensi mai rilasciati realmente", color: "purple" }
                ].map((tactic, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-3 p-4 rounded-lg bg-gray-800/40 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300"
                    whileHover={{ x: 5 }}
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
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="soluzione" className="relative py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              La Nostra <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Soluzione</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Un approccio innovativo che combina certificazione e azioni legali.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-8">Come Funziona</h3>
              <div className="space-y-8">
                {[
                  { 
                    num: "1", 
                    title: "Certificazione Aziende", 
                    desc: "Le aziende legittime si certificano. Spunta verde automatica.",
                    bg: "from-emerald-500 to-emerald-600",
                    icon: ShieldCheck
                  },
                  { 
                    num: "2", 
                    title: "Segnalazione Abusi", 
                    desc: "Gli utenti segnalano chiamate indesiderate e il vero mandante.",
                    bg: "from-red-500 to-red-600",
                    icon: AlertTriangle
                  },
                  { 
                    num: "3", 
                    title: "Azioni Legali", 
                    desc: "Raggiunte 50-100 segnalazioni, avviamo cause collettive.",
                    bg: "from-blue-500 to-blue-600",
                    icon: Gavel
                  }
                ].map((step, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-gray-900/40 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300"
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${step.bg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg mb-2">{step.title}</h4>
                      <p className="text-gray-400">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="p-8 bg-gradient-to-br from-gray-900/80 to-blue-900/20 backdrop-blur-xl border-gray-700/50 shadow-2xl">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl text-white flex items-center justify-center">
                      <Star className="w-6 h-6 text-yellow-400 mr-2" />
                      Vantaggi per Te
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { text: "€1 immediato solo per iscriverti", icon: DollarSign, color: "emerald" },
                      { text: "€1 per ogni amico che inviti (illimitati)", icon: Users, color: "blue" }, 
                      { text: "Database centrale numeri spam condiviso", icon: Shield, color: "red" },
                      { text: "Notifiche anti-phishing e truffe online", icon: AlertTriangle, color: "orange" },
                      { text: "Tutela speciale per anziani e meno esperti", icon: Users, color: "cyan" },
                      { text: "Protezione e privacy del tuo numero", icon: ShieldCheck, color: "purple" },
                      { text: "Blocco automatico aziende non certificate", icon: XCircle, color: "gray" },
                      { text: "Quota sui risarcimenti delle cause vinte", icon: Award, color: "yellow" }
                    ].map((benefit, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/40 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <benefit.icon className={`w-5 h-5 flex-shrink-0
                          ${benefit.color === 'emerald' ? 'text-emerald-400' :
                            benefit.color === 'blue' ? 'text-blue-400' :
                            benefit.color === 'red' ? 'text-red-400' :
                            benefit.color === 'orange' ? 'text-orange-400' :
                            benefit.color === 'cyan' ? 'text-cyan-400' :
                            benefit.color === 'purple' ? 'text-purple-400' :
                            benefit.color === 'gray' ? 'text-gray-400' :
                            'text-yellow-400'}`} />
                        <span className="text-gray-200">{benefit.text}</span>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Revolutionary Marketing Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-900/40 to-green-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              🚀 Marketing <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Rivoluzionario</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              Perché spendere milioni in pubblicità quando possiamo pagare direttamente i nostri utenti?
            </p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl font-bold mb-8 text-white">Il Vecchio Modello</h3>
              <div className="space-y-6">
                {[
                  { title: "Google Ads", cost: "€50k/mese", desc: "Per acquisire utenti che magari disinstallano dopo 1 giorno" },
                  { title: "Facebook Ads", cost: "€30k/mese", desc: "Targeting impreciso e costi sempre più alti" },
                  { title: "TV & Radio", cost: "€100k/mese", desc: "Impossibile misurare il ROI reale" }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-4 bg-gray-900/40 rounded-lg p-4 border border-gray-700/30"
                    whileHover={{ x: -5 }}
                  >
                    <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <span className="text-red-400 font-bold">{item.cost}</span>
                      </div>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-8 text-white">Il Nostro Modello</h3>
              <motion.div 
                className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur rounded-2xl p-8 border border-emerald-500/30"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center mb-6">
                  <motion.div 
                    className="text-6xl font-bold text-yellow-400 mb-2"
                    animate={{ 
                      textShadow: [
                        "0 0 20px rgba(251, 191, 36, 0.5)",
                        "0 0 40px rgba(251, 191, 36, 0.8)",
                        "0 0 20px rgba(251, 191, 36, 0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    €1
                  </motion.div>
                  <p className="text-xl text-white">pagato subito quando ti iscrivi</p>
                </div>
                <div className="space-y-4">
                  {[
                    "✅ Utenti motivati a rimanere attivi",
                    "✅ Passaparola naturale incentivato", 
                    "✅ Costo acquisizione prevedibile",
                    "✅ ROI misurabile al 100%"
                  ].map((benefit, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center space-x-3"
                      whileHover={{ x: 5 }}
                    >
                      <CheckCircle className="w-5 h-5 text-yellow-400" />
                      <span className="text-white">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div 
                  className="mt-6 p-4 bg-yellow-400/20 rounded-lg border border-yellow-400/30"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-center font-bold text-white">
                    Risultato: Crescita organica esplosiva con utenti felici e fedeli!
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="max-w-2xl mx-auto bg-gray-900/60 backdrop-blur-xl border-gray-700/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Fai i Conti</h3>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="space-y-2 p-4 bg-red-500/20 rounded-lg border border-red-500/30">
                    <div className="text-3xl font-bold text-red-400">€180k</div>
                    <p className="text-sm text-gray-300">Costo marketing tradizionale/mese</p>
                  </div>
                  <div className="space-y-2 p-4 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
                    <div className="text-3xl font-bold text-emerald-400">€10k</div>
                    <p className="text-sm text-gray-300">Pagamento 10k iscrizioni una tantum</p>
                  </div>
                </div>
                <motion.div 
                  className="mt-6 p-4 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-lg border border-emerald-500/30"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="font-bold text-lg text-white">
                    Risultato: ROI migliore + utenti felici e fedeli!
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Survey Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Aiutaci a <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Migliorare</span>
            </h2>
            <p className="text-xl text-gray-300">
              Rispondi al sondaggio per aiutarci a sviluppare la soluzione perfetta
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900/60 backdrop-blur-xl border-gray-700/50 shadow-2xl">
              <CardContent className="p-8">
                <form className="space-y-8">
                  <div>
                    <label className="block text-lg font-semibold text-white mb-4">
                      Quante chiamate indesiderate ricevi al giorno?
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['0-2', '3-5', '6-10', 'Più di 10'].map((option) => (
                        <motion.label 
                          key={option} 
                          className="flex items-center justify-center p-4 border border-gray-600 rounded-lg cursor-pointer hover:border-purple-400 hover:bg-purple-500/10 transition-all bg-gray-800/40"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <input type="radio" name="calls" value={option} className="sr-only" />
                          <span className="font-medium text-gray-200">{option}</span>
                        </motion.label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold text-white mb-4">
                      Ti interesserebbe ricevere €1 subito per iscriverti ad un&apos;app anti-telemarketing?
                    </label>
                    <div className="space-y-3">
                      {['Assolutamente sì!', 'Molto interessante', 'Devo saperne di più', 'Sembra troppo bello per essere vero'].map((option) => (
                        <motion.label 
                          key={option} 
                          className="flex items-center p-4 border border-gray-600 rounded-lg cursor-pointer hover:border-purple-400 hover:bg-purple-500/10 transition-all bg-gray-800/40"
                          whileHover={{ x: 5 }}
                        >
                          <input type="radio" name="payment" value={option} className="w-4 h-4 text-purple-400 bg-gray-700 border-gray-600 mr-3" />
                          <span className="text-gray-200">{option}</span>
                        </motion.label>
                      ))}
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full h-12 text-lg bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0 shadow-lg">
                      <Star className="w-5 h-5 mr-2" />
                      Invia Risposte
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Scarica l&apos;<span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">App</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proteggi il tuo telefono e inizia a guadagnare. Disponibile presto su App Store e Google Play.
            </p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Cosa Include l&apos;App</h3>
              <div className="space-y-6">
                {[
                  { 
                    title: "Identificazione Chiamate", 
                    desc: "Vedi subito se una chiamata è da un&apos;azienda certificata o sospetta",
                    icon: ShieldCheck,
                    color: "emerald"
                  },
                  { 
                    title: "Segnalazione Rapida", 
                    desc: "Report veloce per chiamate indesiderate con un solo tap",
                    icon: AlertTriangle,
                    color: "red"
                  },
                  { 
                    title: "Guadagni Automatici", 
                    desc: "€1 per l&apos;iscrizione + €1 per ogni referral + quota cause vinte",
                    icon: DollarSign,
                    color: "yellow"
                  }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-gray-900/40 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300"
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg
                      ${feature.color === 'emerald' ? 'bg-gradient-to-r from-emerald-500 to-emerald-600' :
                        feature.color === 'red' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                        'bg-gradient-to-r from-yellow-500 to-yellow-600'}`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg mb-2">{feature.title}</h4>
                      <p className="text-gray-400">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="p-8 bg-gradient-to-br from-gray-900/80 to-emerald-900/20 backdrop-blur-xl border-gray-700/50 shadow-2xl">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl text-white flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-emerald-400 mr-2" />
                      Notificami al Lancio
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-300">
                      Sii tra i primi a scaricare l&apos;app e ricevi €1 bonus extra
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input 
                      placeholder="Il tuo numero di telefono" 
                      className="h-12 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                    <Input 
                      placeholder="La tua email" 
                      type="email"
                      className="h-12 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-0 shadow-lg text-lg">
                        <Target className="w-5 h-5 mr-2" />
                        Notificami al Lancio
                      </Button>
                    </motion.div>
                    <div className="bg-emerald-500/20 rounded-lg p-3 text-center border border-emerald-500/30">
                      <p className="text-sm text-emerald-200 font-medium">
                        🎁 Early bird bonus: €2 invece di €1 per i primi 1000 iscritti!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
                className="mt-8 flex justify-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="bg-gray-800/50 backdrop-blur rounded-lg p-4 border border-gray-700/50"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-400 text-sm">Disponibile su</p>
                  <p className="text-white font-semibold">App Store</p>
                  <p className="text-gray-500 text-xs">Presto</p>
                </motion.div>
                <motion.div 
                  className="bg-gray-800/50 backdrop-blur rounded-lg p-4 border border-gray-700/50"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-400 text-sm">Disponibile su</p>
                  <p className="text-white font-semibold">Google Play</p>
                  <p className="text-gray-500 text-xs">Presto</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <motion.div 
                  className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-2xl"
                  whileHover={{ 
                    boxShadow: "0 0 30px rgba(239, 68, 68, 0.8)",
                    scale: 1.1 
                  }}
                >
                  <Shield className="w-6 h-6 text-white" />
                </motion.div>
                <span className="text-2xl font-bold">Opponiti</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                La prima piattaforma italiana contro il telemarketing selvaggio. 
                Protezione, certificazione e giustizia.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg text-white">App</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Come Funziona</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Scarica App</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="/aziende" className="hover:text-white transition-colors">Per Aziende</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg text-white">Azienda</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Chi Siamo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termini</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carriere</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg text-white">Contatti</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@opponiti.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Via Roma 123, Milano</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+39 02 1234567</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Opponiti. Tutti i diritti riservati. Made with ❤️ in Italy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}