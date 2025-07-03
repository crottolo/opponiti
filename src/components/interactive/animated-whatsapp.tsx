"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { WhatsAppSection } from "@/components/sections/whatsapp-section"
import { MessageCircle, ArrowRight } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export function AnimatedWhatsApp() {
  return (
    <motion.div variants={fadeInUp} className="mb-16">
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <WhatsAppSection />
        
        {/* Interactive Button */}
        <div className="mt-6 max-w-2xl mx-auto px-8">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button className="w-full h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-0 shadow-lg text-xl">
              <MessageCircle className="w-6 h-6 mr-3" />
              Aiutaci a raggiungere 300.000 su WhatsApp!
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}