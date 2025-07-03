"use client"

import { motion } from "framer-motion"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { HeroSection } from "@/components/sections/hero-section"

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

const glowAnimation = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(34, 197, 94, 0.3)",
      "0 0 40px rgba(34, 197, 94, 0.5)",
      "0 0 20px rgba(34, 197, 94, 0.3)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export function AnimatedHero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <motion.div
              className="inline-block"
              animate={glowAnimation}
            >
              <HeroSection />
            </motion.div>
          </motion.div>
          
          {/* Goal Counter - Clean Aceternity Style */}
          <motion.div 
            variants={fadeInUp}
            className="mb-8 max-w-5xl mx-auto"
          >
            <CardSpotlight className="border-neutral-700 bg-neutral-950/90">
              <div className="relative z-20">
                <HeroSection />

                {/* Clean Progress Bar */}
                <div className="w-full bg-neutral-800 rounded-full h-2 mb-6">
                  <motion.div 
                    className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "1.4%" }}
                    transition={{ duration: 2, delay: 1 }}
                  ></motion.div>
                </div>
              </div>
            </CardSpotlight>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}