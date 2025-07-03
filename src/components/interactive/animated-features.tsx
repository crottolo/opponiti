"use client"

import { motion } from "framer-motion"
import { FeaturesContent } from "@/components/content/features-content"

export function AnimatedFeatures() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <FeaturesContent />
    </motion.div>
  )
}