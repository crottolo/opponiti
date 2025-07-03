"use client"

import { motion } from "framer-motion"
import { CTAContent } from "@/components/content/cta-content"

export function AnimatedCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <CTAContent />
    </motion.div>
  )
}