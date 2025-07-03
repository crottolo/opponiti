"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { motion } from "framer-motion"
import { 
  Shield, 
  ShieldCheck, 
  Building2,
  TrendingUp, 
  Award,
  BarChart3,
  Lock,
  Crown,
  CheckCircle,
  ArrowRight,
  Mail
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

export default function AziendePage() {
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
              <Badge className="px-4 py-2 text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
                Certificazione Aziendale
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight"
            >
              <span className="text-white">
                Distinguiti dalla
              </span>
              <br />
              <span className="text-blue-400">
                Concorrenza Sleale
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Certifica la tua azienda su Opponiti e ottieni la spunta verde per 
              tutte le tue chiamate legittime. Proteggi la tua reputazione e aumenta la fiducia dei clienti.
            </motion.p>

            {/* Value Proposition */}
            <motion.div variants={fadeInUp} className="mb-12">
              <CardSpotlight className="border-neutral-700 bg-neutral-950/90 max-w-3xl mx-auto">
                <div className="relative z-20 p-8 text-center">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
                    <Crown className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-xs font-medium text-yellow-400">TELEMARKETING LEGALE PREMIATO</span>
                  </div>
                  <p className="text-white">
                    Le aziende certificate ottengono <span className="text-blue-400">maggiore fiducia</span>, 
                    <span className="text-emerald-400"> tassi di risposta più alti</span> e protezione dalla concorrenza sleale.
                  </p>
                </div>
              </CardSpotlight>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInUp} className="mb-20">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="h-12 px-8 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-200">
                  <Mail className="w-4 h-4 mr-2" />
                  Richiedi Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
              <p className="text-sm text-zinc-500 mt-3">
                Consulenza gratuita per la tua azienda
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
              Cosa Ottieni
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              I vantaggi concreti della certificazione per la tua azienda.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: ShieldCheck, 
                title: "Spunta Verde", 
                description: "Identificazione automatica per tutte le tue chiamate con badge di fiducia"
              },
              { 
                icon: BarChart3, 
                title: "Analytics Avanzate", 
                description: "Dashboard completa con metriche dettagliate su performance e reputazione"
              },
              { 
                icon: Lock, 
                title: "Compliance Garantita", 
                description: "Supporto legale completo e conformità GDPR per operazioni sicure"
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
                    <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-blue-400" />
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
              Perché Certificarsi
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              I vantaggi concreti per la tua azienda e i tuoi clienti.
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
              <h3 className="text-2xl font-bold text-white mb-8">Vantaggi per le Aziende</h3>
              <div className="space-y-6">
                {[
                  "Riconoscimento del lavoro regolare",
                  "Protezione brand identity",
                  "Maggiore fiducia e performance",
                  "Costi call center ottimizzati"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-zinc-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ROI Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <CardSpotlight className="border-neutral-700 bg-neutral-950/90">
                <div className="relative z-20 p-8">
                  <h3 className="text-2xl font-bold text-white mb-8 text-center">ROI della Certificazione</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { value: "+40%", label: "Tasso risposta" },
                      { value: "+25%", label: "Conversioni" },
                      { value: "-60%", label: "Reclami" },
                      { value: "+15%", label: "Fatturato" }
                    ].map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-emerald-400 mb-1">{metric.value}</div>
                        <p className="text-xs text-zinc-400">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20 text-center">
                    <p className="text-emerald-400 font-medium">
                      Investimento che si ripaga in 2-3 mesi!
                    </p>
                  </div>
                </div>
              </CardSpotlight>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Piani di Certificazione
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Scegli il piano più adatto alle dimensioni della tua azienda.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "€99",
                period: "/mese",
                description: "Per piccole aziende",
                features: [
                  "Certificazione base",
                  "Spunta verde",
                  "Analytics basic",
                  "Supporto email"
                ]
              },
              {
                name: "Professional",
                price: "€299",
                period: "/mese",
                description: "Per aziende medie",
                features: [
                  "Tutto di Starter",
                  "Analytics avanzate",
                  "Supporto prioritario",
                  "API access",
                  "Custom branding"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "€799",
                period: "/mese",
                description: "Per grandi aziende",
                features: [
                  "Tutto di Professional",
                  "Supporto dedicato",
                  "SLA garantito",
                  "Integrazione custom",
                  "Report personalizzati"
                ]
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CardSpotlight className={`border-neutral-700 bg-neutral-950/90 h-full ${plan.popular ? 'ring-2 ring-blue-500/50' : ''}`}>
                  <div className="relative z-20 p-6">
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-blue-500 text-white border-0">
                          Più Popolare
                        </Badge>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-sm text-zinc-400 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-3xl font-bold text-white">{plan.price}</span>
                        <span className="text-sm text-zinc-400 ml-1">{plan.period}</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span className="text-sm text-zinc-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className={`w-full ${plan.popular ? 'bg-blue-500 hover:bg-blue-600' : 'bg-neutral-800 hover:bg-neutral-700'} text-white rounded-lg transition-all duration-200`}
                    >
                      Scegli {plan.name}
                    </Button>
                  </div>
                </CardSpotlight>
              </motion.div>
            ))}
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
                  Pronto per Iniziare?
                </h2>
                <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                  Ottieni la certificazione e distinguiti dalla concorrenza sleale. Consulenza gratuita inclusa.
                </p>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="h-12 px-8 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-200">
                    <Mail className="w-4 h-4 mr-2" />
                    Richiedi Demo Gratuita
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