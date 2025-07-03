"use client"

import { motion } from "framer-motion"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { ShieldCheck, AlertTriangle, Gavel, Users, Phone, Globe, XCircle } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export function HoverEffectsMain() {
  return (
    <motion.div variants={fadeInUp} className="max-w-6xl mx-auto">
      <HoverEffect 
        items={[
          { 
            title: "Aziende Certificate", 
            description: "Spunta verde per chiamate legittime e maggiore fiducia dei clienti",
            icon: <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-2xl flex items-center justify-center"><ShieldCheck className="w-8 h-8" /></div>,
            gradient: "bg-gradient-to-br from-emerald-500/10 to-green-500/10"
          },
          { 
            title: "Segnala Abusi", 
            description: "Report facile e veloce di chiamate moleste con sistema automatizzato",
            icon: <div className="w-16 h-16 bg-red-500/20 text-red-400 border border-red-500/30 rounded-2xl flex items-center justify-center"><AlertTriangle className="w-8 h-8" /></div>,
            gradient: "bg-gradient-to-br from-red-500/10 to-pink-500/10"
          },
          { 
            title: "Azioni Legali", 
            description: "Cause collettive efficaci contro aziende che violano la privacy",
            icon: <div className="w-16 h-16 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-2xl flex items-center justify-center"><Gavel className="w-8 h-8" /></div>,
            gradient: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
          }
        ]}
        className=""
      />
    </motion.div>
  )
}

export function HoverEffectsStats() {
  return (
    <motion.div 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="mb-16"
    >
      <HoverEffect 
        items={[
          { 
            title: "87%", 
            description: "degli italiani riceve chiamate indesiderate ogni giorno",
            icon: <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-2xl flex items-center justify-center"><Users className="w-6 h-6" /></div>,
            gradient: "bg-gradient-to-br from-emerald-500/10 to-green-500/10"
          },
          { 
            title: "6.2", 
            description: "chiamate spam al giorno ricevute in media dagli italiani",
            icon: <div className="w-12 h-12 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-2xl flex items-center justify-center"><Phone className="w-6 h-6" /></div>,
            gradient: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
          },
          { 
            title: "73%", 
            description: "usa numeri esteri per eludere i controlli delle autorità",
            icon: <div className="w-12 h-12 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-2xl flex items-center justify-center"><Globe className="w-6 h-6" /></div>,
            gradient: "bg-gradient-to-br from-purple-500/10 to-indigo-500/10"
          },
          { 
            title: "€0", 
            description: "conseguenze reali per chi abusa del telemarketing selvaggio",
            icon: <div className="w-12 h-12 bg-red-500/20 text-red-400 border border-red-500/30 rounded-2xl flex items-center justify-center"><XCircle className="w-6 h-6" /></div>,
            gradient: "bg-gradient-to-br from-red-500/10 to-pink-500/10"
          }
        ]}
        className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      />
    </motion.div>
  )
}