"use client"

import { motion } from "framer-motion"
import { StatsContent } from "@/components/content/stats-content"

export function AnimatedStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <StatsContent />
    </motion.div>
  )
}