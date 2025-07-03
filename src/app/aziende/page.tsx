import { Suspense } from "react"
import { Metadata } from "next"

// Static content components (SSR)
import { BusinessHeroContent } from "@/components/content/business-hero-content"
import { BusinessFeaturesContent } from "@/components/content/business-features-content"
import { BenefitsContent } from "@/components/content/benefits-content"
import { PricingContentV2 } from "@/components/content/pricing-content-v2"

// Dynamic animated components (Client-side)
import { AnimatedBenefits } from "@/components/interactive/animated-benefits"
import { AnimatedCTA } from "@/components/interactive/animated-cta"

export const metadata: Metadata = {
  title: "Certificazione Aziendale - Opponiti Business",
  description: "Certifica la tua azienda su Opponiti e ottieni la spunta verde per tutte le tue chiamate legittime. Distinguiti dalla concorrenza sleale con tassi di risposta +40% superiori.",
  keywords: [
    "certificazione aziendale",
    "telemarketing legale", 
    "call center certificato",
    "spunta verde chiamate",
    "business telemarketing",
    "compliance GDPR",
    "analytics call center",
    "ROI telemarketing"
  ],
  openGraph: {
    title: "Certificazione Aziendale - Opponiti Business",
    description: "Ottieni la spunta verde per le tue chiamate legittime. +40% tasso risposta, +25% conversioni. Protezione dalla concorrenza sleale.",
    type: "website",
    locale: "it_IT",
    siteName: "Opponiti Business"
  },
  twitter: {
    card: "summary_large_image",
    title: "Certificazione Aziendale - Opponiti Business",
    description: "Distinguiti dalla concorrenza sleale. Spunta verde garantita per call center certificati."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://opponiti.com/aziende"
  }
}

export default function AziendePage() {
  return (
    <div className="min-h-screen bg-black text-white professional-bg subtle-grid">
      
      {/* Hero Section - SSR with Client Enhancement */}
      <noscript>
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <BusinessHeroContent />
        </section>
      </noscript>
      
      <Suspense fallback={
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <BusinessHeroContent />
        </section>
      }>
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <BusinessHeroContent />
        </section>
      </Suspense>

      {/* Features Section */}
      <noscript>
        <BusinessFeaturesContent />
      </noscript>
      
      <Suspense fallback={<BusinessFeaturesContent />}>
        <BusinessFeaturesContent />
      </Suspense>

      {/* Benefits Section */}
      <noscript>
        <BenefitsContent />
      </noscript>
      
      <Suspense fallback={<BenefitsContent />}>
        <AnimatedBenefits />
      </Suspense>

      {/* Pricing Section */}
      <noscript>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <PricingContentV2 />
        </section>
      </noscript>
      
      <Suspense fallback={
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <PricingContentV2 />
        </section>
      }>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <PricingContentV2 />
        </section>
      </Suspense>

      {/* Final CTA */}
      <noscript>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="border border-neutral-700 bg-neutral-950/90 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Pronto per Iniziare?
              </h2>
              <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                Ottieni la certificazione e distinguiti dalla concorrenza sleale. Consulenza gratuita inclusa.
              </p>
              <button className="h-12 px-8 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-200">
                Richiedi Demo Gratuita
              </button>
            </div>
          </div>
        </section>
      </noscript>
      
      <Suspense fallback={
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="border border-neutral-700 bg-neutral-950/90 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Pronto per Iniziare?
              </h2>
              <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                Ottieni la certificazione e distinguiti dalla concorrenza sleale. Consulenza gratuita inclusa.
              </p>
              <button className="h-12 px-8 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-200">
                Richiedi Demo Gratuita
              </button>
            </div>
          </div>
        </section>
      }>
        <AnimatedCTA />
      </Suspense>
    </div>
  )
}