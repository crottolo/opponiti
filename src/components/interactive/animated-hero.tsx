"use client"

import { motion } from "framer-motion"
import { HeroContent } from "@/components/content/hero-content"

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

export function AnimatedHero() {
  return (
    <section className="relative pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={fadeInUp}>
          <HeroContent animated={true} />
        </motion.div>
      </motion.div>
    </section>
  )
}