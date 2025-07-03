"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { 
  Shield, 
  MessageCircle, 
  Menu,
  X,
  ArrowRight
} from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isBusiness = pathname === "/aziende"

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const navItems = isBusiness ? [
    { href: "/", label: "Per Utenti", color: "emerald" },
    { href: "/roadmap", label: "Piano", color: "purple" }
  ] : [
    { href: "/roadmap", label: "Piano", color: "purple" },
    { href: "/aziende", label: "Per Aziende", color: "blue" }
  ]

  const ctaButton = isBusiness ? {
    text: "Richiedi Demo",
    gradient: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
    icon: null
  } : {
    text: "Iscriviti ora",
    gradient: "from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700",
    icon: MessageCircle
  }

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" onClick={closeMobileMenu}>
            <motion.div 
              className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-2xl"
              whileHover={{ 
                boxShadow: "0 0 30px rgba(239, 68, 68, 0.8)",
                scale: 1.1 
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Shield className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Opponiti
            </span>
            {isBusiness && (
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                Business
              </Badge>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const hoverClass = item.color === 'red' ? 'hover:text-red-400' :
                                item.color === 'emerald' ? 'hover:text-emerald-400' :
                                item.color === 'purple' ? 'hover:text-purple-400' :
                                'hover:text-blue-400'
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-gray-300 ${hoverClass} transition-colors font-medium`}
                >
                  {item.label}
                </Link>
              )
            })}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className={`bg-gradient-to-r ${ctaButton.gradient} text-white border-0 shadow-lg`}>
                {ctaButton.icon && <ctaButton.icon className="w-4 h-4 mr-2" />}
                {ctaButton.text}
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white p-2 rounded-lg"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-gray-800/50"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => {
                const hoverClass = item.color === 'red' ? 'hover:text-red-400' :
                                  item.color === 'emerald' ? 'hover:text-emerald-400' :
                                  item.color === 'purple' ? 'hover:text-purple-400' :
                                  'hover:text-blue-400'
                
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`block text-lg text-gray-300 ${hoverClass} transition-colors font-medium py-2`}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                className="pt-4"
              >
                <Button 
                  className={`w-full bg-gradient-to-r ${ctaButton.gradient} text-white border-0 shadow-lg h-12 text-lg`}
                  onClick={closeMobileMenu}
                >
                  {ctaButton.icon && <ctaButton.icon className="w-5 h-5 mr-2" />}
                  {ctaButton.text}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}