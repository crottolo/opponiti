"use client"

import { motion } from "framer-motion"
import { FeaturesContentV2 } from "@/components/content/features-content-v2"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

export function AnimatedFeaturesV2() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <motion.div variants={fadeInUp}>
          <FeaturesContentV2 animated />
        </motion.div>
      </motion.div>
    </section>
  )
}