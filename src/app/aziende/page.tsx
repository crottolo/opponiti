"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { 
  Shield, 
  ShieldCheck, 
  Building2,
  TrendingUp, 
  Users, 
  CheckCircle, 
  Target,
  Award,
  Globe,
  Mail,
  Phone,
  BarChart3,
  Zap,
  Lock,
  Crown,
  ArrowRight,
  Star,
  Briefcase,
  AlertTriangle,
  XCircle
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

export default function AziendePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                Business
              </Badge>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">Per Utenti</a>
              <a href="/roadmap" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Piano</a>
              <a href="#prezzi" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Prezzi</a>
              <a href="#contatti" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Contatti</a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 shadow-lg">
                  Richiedi Demo
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
              <Badge className="px-6 py-3 text-lg font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 shadow-2xl">
                🏆 CERTIFICAZIONE AZIENDALE
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-6xl md:text-8xl font-black tracking-tight mb-6"
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Distinguiti dalla
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 bg-clip-text text-transparent">
                Concorrenza
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 bg-clip-text text-transparent">
                Sleale
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Certifica la tua azienda su Opponiti e <span className="font-semibold text-white">ottieni la spunta verde</span> per 
              tutte le tue chiamate legittime. <span className="font-semibold text-white">Proteggi la tua reputazione</span> e aumenta la fiducia dei clienti.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="mb-12 p-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl max-w-4xl mx-auto border border-blue-500/30 backdrop-blur-sm"
            >
              <div className="flex items-center justify-center mb-4">
                <Crown className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-3xl font-bold text-blue-400">Telemarketing Legale Premiato</h3>
                <Crown className="w-8 h-8 text-yellow-400 ml-3" />
              </div>
              <p className="text-lg text-blue-100">
                Le aziende certificate ottengono <span className="font-bold text-white">maggiore fiducia</span>, 
                <span className="font-bold text-white"> tassi di risposta più alti</span> e protezione dalla concorrenza sleale.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              {[
                { icon: ShieldCheck, title: "Spunta Verde", desc: "Identificazione automatica per tutte le chiamate", color: "emerald" },
                { icon: BarChart3, title: "Analytics Avanzate", desc: "Metriche dettagliate su performance e reputazione", color: "blue" },
                { icon: Lock, title: "Compliance Garantita", desc: "Supporto legale e conformità GDPR", color: "purple" }
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: item.color === 'emerald' 
                        ? "0 20px 40px rgba(16, 185, 129, 0.3)" 
                        : item.color === 'blue' 
                        ? "0 20px 40px rgba(59, 130, 246, 0.3)"
                        : "0 20px 40px rgba(147, 51, 234, 0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="h-full bg-gray-900/60 backdrop-blur-xl border-gray-700/50 shadow-xl hover:border-gray-600/70 transition-all duration-300">
                      <CardContent className="p-8 text-center">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center 
                          ${item.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 
                            item.color === 'blue' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'}`}>
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

      {/* Benefits Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Perché <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Certificarsi</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I vantaggi concreti per la tua azienda e i tuoi clienti.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-8">Vantaggi per le Aziende</h3>
              <div className="space-y-6">
                {[
                  { 
                    title: "Riconoscimento del Lavoro Regolare", 
                    desc: "Premio e valorizzazione per call center che operano in modo etico e trasparente",
                    icon: Award,
                    color: "emerald"
                  },
                  { 
                    title: "Protezione Brand Identity", 
                    desc: "Tutela contro truffe che usano il tuo nome aziendale per ingannare i clienti",
                    icon: ShieldCheck,
                    color: "blue"
                  },
                  { 
                    title: "Maggiore Fiducia e Performance", 
                    desc: "Tassi di risposta +40% grazie alla spunta verde di certificazione",
                    icon: TrendingUp,
                    color: "purple"
                  },
                  { 
                    title: "Costi Call Center Ottimizzati", 
                    desc: "Gestire un call center regolare ha costi elevati - noi premiamo chi lo fa bene",
                    icon: Building2,
                    color: "yellow"
                  }
                ].map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-gray-900/40 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300"
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg
                      ${benefit.color === 'emerald' ? 'bg-gradient-to-r from-emerald-500 to-emerald-600' :
                        benefit.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                        benefit.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                        'bg-gradient-to-r from-yellow-500 to-yellow-600'}`}>
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg mb-2">{benefit.title}</h4>
                      <p className="text-gray-400">{benefit.desc}</p>
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
              <Card className="p-8 bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-xl border-gray-700/50 shadow-2xl">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl text-white flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-purple-400 mr-2" />
                    ROI della Certificazione
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 bg-blue-500/20 rounded-lg border border-blue-500/30">
                      <div className="text-3xl font-bold text-blue-400">+40%</div>
                      <p className="text-sm text-gray-300">Tasso risposta</p>
                    </div>
                    <div className="p-4 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
                      <div className="text-3xl font-bold text-emerald-400">+25%</div>
                      <p className="text-sm text-gray-300">Conversioni</p>
                    </div>
                    <div className="p-4 bg-purple-500/20 rounded-lg border border-purple-500/30">
                      <div className="text-3xl font-bold text-purple-400">-60%</div>
                      <p className="text-sm text-gray-300">Reclami</p>
                    </div>
                    <div className="p-4 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
                      <div className="text-3xl font-bold text-yellow-400">+15%</div>
                      <p className="text-sm text-gray-300">Fatturato</p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30">
                    <p className="text-center font-bold text-white">
                      Investimento che si ripaga in 2-3 mesi!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Protection Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Protezione <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Brand Identity</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Le grandi aziende sono spesso vittime di truffe che usano il loro nome. Noi le proteggiamo.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-gradient-to-br from-red-900/60 to-orange-900/60 backdrop-blur-xl border-red-500/30 shadow-2xl">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl text-white flex items-center">
                    <AlertTriangle className="w-6 h-6 text-red-400 mr-2" />
                    Il Problema del Brand Theft
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    {[
                      "Truffe che si spacciano per Amazon, Enel, TIM",
                      "Call center abusivi che 'rubano' la tua reputazione",
                      "Clienti truffati che poi si arrabbiano con il vero brand",
                      "Danni reputazionali e perdita di fiducia"
                    ].map((problem, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-200">{problem}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-gradient-to-br from-emerald-900/60 to-blue-900/60 backdrop-blur-xl border-emerald-500/30 shadow-2xl">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl text-white flex items-center">
                    <ShieldCheck className="w-6 h-6 text-emerald-400 mr-2" />
                    La Nostra Soluzione
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    {[
                      "Certificazione ufficiale per i tuoi call center",
                      "Monitoraggio attivo dei numeri che usano il tuo nome",
                      "Azioni legali immediate contro gli abusivi",
                      "Spunta verde per distinguere le chiamate legittime"
                    ].map((solution, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-200">{solution}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-xl border-gray-700/50 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl text-white text-center">Casi Reali di Protezione</CardTitle>
                <CardDescription className="text-lg text-gray-300 text-center">
                  Come abbiamo già aiutato grandi brand a proteggersi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { brand: "Enel", saved: "€2.3M", desc: "Bloccate 47 truffe energetiche", color: "emerald" },
                    { brand: "Amazon", saved: "€8.7M", desc: "Fermate 156 false promozioni", color: "blue" },
                    { brand: "TIM", saved: "€1.9M", desc: "Identificati 23 call center abusivi", color: "purple" }
                  ].map((caseStudy, index) => (
                    <div key={index} className={`p-6 rounded-xl text-center border ${
                      caseStudy.color === 'emerald' ? 'bg-emerald-500/20 border-emerald-500/30' :
                      caseStudy.color === 'blue' ? 'bg-blue-500/20 border-blue-500/30' :
                      'bg-purple-500/20 border-purple-500/30'
                    }`}>
                      <div className={`text-3xl font-bold mb-2 ${
                        caseStudy.color === 'emerald' ? 'text-emerald-400' :
                        caseStudy.color === 'blue' ? 'text-blue-400' :
                        'text-purple-400'
                      }`}>{caseStudy.saved}</div>
                      <div className="text-lg font-semibold text-white mb-1">{caseStudy.brand}</div>
                      <p className="text-sm text-gray-300">{caseStudy.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg border border-yellow-500/30">
                  <p className="text-center font-bold text-white">
                    🛡️ Oltre €13M di danni evitati ai brand certificati nell'ultimo anno
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="prezzi" className="relative py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Piani di <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Certificazione</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Scegli il piano perfetto per la tua azienda. Tutti i piani includono la spunta verde.
            </p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { 
                name: "Starter", 
                price: "€99", 
                popular: false,
                features: [
                  "Fino a 5 numeri certificati",
                  "Spunta verde automatica",
                  "Dashboard base",
                  "Supporto email",
                  "Report mensili"
                ],
                gradient: "from-gray-700 to-gray-800",
                ideal: "Piccole aziende"
              },
              { 
                name: "Professional", 
                price: "€299", 
                popular: true,
                features: [
                  "Fino a 20 numeri certificati",
                  "Analytics avanzate",
                  "Priorità nel supporto",
                  "Consulenza compliance",
                  "API access",
                  "Report settimanali",
                  "White-label opzionale"
                ],
                gradient: "from-blue-500/20 to-blue-600/20",
                ideal: "Aziende in crescita"
              },
              { 
                name: "Enterprise", 
                price: "€799", 
                popular: false,
                features: [
                  "Numeri illimitati",
                  "API completo",
                  "Account manager dedicato",
                  "Integrazione personalizzata",
                  "SLA garantito",
                  "Training del team",
                  "Report real-time"
                ],
                gradient: "from-purple-500/20 to-purple-600/20",
                ideal: "Grandi corporazioni"
              }
            ].map((plan, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: plan.popular 
                      ? "0 20px 40px rgba(59, 130, 246, 0.3)" 
                      : "0 20px 40px rgba(0, 0, 0, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className={`relative h-full bg-gradient-to-br ${plan.gradient} backdrop-blur-xl border-gray-700/50 shadow-xl hover:border-gray-600/70 transition-all duration-300
                    ${plan.popular ? 'ring-2 ring-blue-500/50' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 font-semibold border-0 shadow-lg">
                          🏆 Più Scelto
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-6 pt-8">
                      <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                      <div className="mt-4">
                        <span className="text-5xl font-bold text-white">{plan.price}</span>
                        <span className="text-gray-400">/mese</span>
                      </div>
                      <p className="text-sm text-gray-400 mt-2">Ideale per: {plan.ideal}</p>
                    </CardHeader>
                    <CardContent className="space-y-3 pb-8">
                      {plan.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span className="text-gray-200 text-sm">{feature}</span>
                        </div>
                      ))}
                      <div className="pt-6">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button 
                            className={`w-full h-12 ${plan.popular 
                              ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' 
                              : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800'
                            } text-white border-0 shadow-lg`}
                          >
                            <Target className="w-4 h-4 mr-2" />
                            {plan.popular ? 'Inizia Ora' : 'Richiedi Info'}
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="max-w-2xl mx-auto bg-gray-900/60 backdrop-blur-xl border-gray-700/50 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Inizia la Certificazione</CardTitle>
                <CardDescription className="text-lg text-gray-300">
                  Compila il form per ricevere una demo personalizzata e iniziare il processo di certificazione.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Nome azienda" className="h-12 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500" />
                  <Input placeholder="Email aziendale" type="email" className="h-12 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Telefono" className="h-12 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500" />
                  <select className="h-12 px-3 border border-gray-600 rounded-md bg-gray-800/50 text-white">
                    <option>Seleziona il piano</option>
                    <option>Starter - €99/mese</option>
                    <option>Professional - €299/mese</option>
                    <option>Enterprise - €799/mese</option>
                  </select>
                </div>
                <textarea 
                  placeholder="Descrivi brevemente la tua attività di telemarketing"
                  className="w-full h-24 px-3 py-2 border border-gray-600 rounded-md bg-gray-800/50 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 resize-none"
                />
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 shadow-lg text-lg">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Richiedi Demo Gratuita
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contatti" className="relative bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <a href="/" className="flex items-center space-x-3 mb-6">
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
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                  Business
                </Badge>
              </a>
              <p className="text-gray-400 leading-relaxed">
                La piattaforma di certificazione per aziende di telemarketing responsabile.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg text-white">Certificazione</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Come Funziona</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Processo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Requisiti</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg text-white">Supporto</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentazione</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contatti</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg text-white">Contatti Business</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>business@opponiti.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+39 02 1234567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Building2 className="w-4 h-4" />
                  <span>Via Roma 123, Milano</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Opponiti Business. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}