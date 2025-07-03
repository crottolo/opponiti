"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { motion } from "framer-motion"
import { 
  Shield, 
  ShieldCheck, 
  AlertTriangle, 
  Gavel, 
  Users, 
  DollarSign, 
  Phone,
  ArrowRight,
  Target,
  MessageCircle,
  Sparkles,
  CheckCircle
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

export default function Home() {
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
              <Badge className="px-4 py-2 text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                💰 TI PAGHIAMO €1 PER ISCRIVERTI!
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight"
            >
              <span className="text-white">
                Stop al
              </span>
              <br />
              <span className="text-red-400">
                Telemarketing Selvaggio
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              La prima piattaforma italiana che certifica le aziende legittime e 
              combatte quelle abusive attraverso azioni legali collettive.
            </motion.p>

            {/* Goal Counter */}
            <motion.div variants={fadeInUp} className="mb-12">
              <CardSpotlight className="border-neutral-700 bg-neutral-950/90 max-w-3xl mx-auto">
                <div className="relative z-20 p-8 text-center">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                    <Target className="w-4 h-4 text-emerald-400 mr-2" />
                    <span className="text-xs font-medium text-emerald-400">OBIETTIVO FASE 1</span>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-400 mb-2">4.247</div>
                      <p className="text-sm text-zinc-400">Pre-registrazioni</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">300.000</div>
                      <p className="text-sm text-zinc-400">Goal Fase 1</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">1,4%</div>
                      <p className="text-sm text-zinc-400">Completato</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-neutral-800 rounded-full h-2 mb-6">
                    <motion.div 
                      className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "1.4%" }}
                      transition={{ duration: 2, delay: 1 }}
                    ></motion.div>
                  </div>

                  <p className="text-white">
                    <span className="text-emerald-400">€1 per iscriverti + €1 per ogni referral!</span><br/>
                    Iniziamo solo se raggiungiamo 300.000 registrazioni WhatsApp.
                  </p>
                </div>
              </CardSpotlight>
            </motion.div>

            {/* Revolutionary Marketing */}
            <motion.div variants={fadeInUp} className="mb-12">
              <CardSpotlight className="border-neutral-700 bg-neutral-950/90 max-w-2xl mx-auto">
                <div className="relative z-20 p-6 text-center">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                    <Sparkles className="w-4 h-4 text-emerald-400 mr-2" />
                    <span className="text-xs font-medium text-emerald-400">MARKETING RIVOLUZIONARIO</span>
                  </div>
                  <p className="text-white">
                    Invece di spendere milioni in pubblicità, <span className="text-emerald-400">ti paghiamo per usare l&apos;app</span>!
                  </p>
                </div>
              </CardSpotlight>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInUp} className="mb-20">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="h-12 px-8 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-all duration-200">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Registrati Ora
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
              <p className="text-sm text-zinc-500 mt-3">
                🎯 4.247 utenti già preregistrati • 💰 €1 garantito al lancio
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              Come Funziona
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Un approccio triplo per eliminare il telemarketing abusivo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: ShieldCheck, 
                title: "Aziende Certificate", 
                description: "Spunta verde per chiamate legittime con badge di fiducia verificato",
                color: "emerald"
              },
              { 
                icon: AlertTriangle, 
                title: "Segnala Abusi", 
                description: "Report facile e veloce delle chiamate spam con sistema smart",
                color: "red"
              },
              { 
                icon: Gavel, 
                title: "Azioni Legali", 
                description: "Cause collettive efficaci contro call center abusivi",
                color: "blue"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CardSpotlight className="border-neutral-700 bg-neutral-950/90 h-full">
                  <div className="relative z-20 p-6 text-center">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center ${
                      feature.color === 'emerald' ? 'bg-emerald-500/10 border border-emerald-500/20' :
                      feature.color === 'red' ? 'bg-red-500/10 border border-red-500/20' :
                      'bg-blue-500/10 border border-blue-500/20'
                    }`}>
                      <feature.icon className={`w-6 h-6 ${
                        feature.color === 'emerald' ? 'text-emerald-400' :
                        feature.color === 'red' ? 'text-red-400' :
                        'text-blue-400'
                      }`} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-zinc-400">{feature.description}</p>
                  </div>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Stats */}
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
              Il Problema è Reale
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Il telemarketing selvaggio in Italia è fuori controllo. Le cifre parlano chiaro.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: "87%", desc: "degli italiani riceve chiamate indesiderate", icon: Users },
              { number: "6.2", desc: "chiamate spam al giorno in media", icon: Phone },
              { number: "73%", desc: "usa numeri esteri per eludere controlli", icon: Shield },
              { number: "€0", desc: "conseguenze reali per chi abusa", icon: DollarSign }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CardSpotlight className="border-neutral-700 bg-neutral-950/90 h-full">
                  <div className="relative z-20 p-6 text-center">
                    <stat.icon className="w-8 h-8 mx-auto mb-4 text-red-400" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <p className="text-sm text-zinc-400">{stat.desc}</p>
                  </div>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Perché Funziona
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Un approccio unico che combina tecnologia, legalità e incentivi economici.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-8">Vantaggi per gli Utenti</h3>
              <div className="space-y-6">
                {[
                  "Identificazione immediata chiamate legittime",
                  "Protezione da truffe e call center abusivi",
                  "Guadagno per ogni segnalazione utile",
                  "Azioni legali collettive gratuite"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-zinc-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Business Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-8">Vantaggi per le Aziende</h3>
              <div className="space-y-6">
                {[
                  "Spunta verde per chiamate certificate",
                  "Maggiore fiducia e tassi di risposta",
                  "Protezione del brand da truffe",
                  "Analytics dettagliate e compliance"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-zinc-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <CardSpotlight className="border-neutral-700 bg-neutral-950/90">
              <div className="relative z-20 p-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Unisciti alla Rivoluzione
                </h2>
                <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                  Basta telemarketing selvaggio. È ora di cambiare le regole del gioco per sempre.
                </p>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="h-12 px-8 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-all duration-200">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Inizia Ora - €1 Garantito
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              </div>
            </CardSpotlight>
          </motion.div>
        </div>
      </section>
    </div>
  );
}